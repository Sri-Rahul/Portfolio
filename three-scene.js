/* Landing scene: the conductor's view.
   Every section of this orchestra is a system I built or led, drawn in
   engraving ink as music stands on curved rows around a podium. The baton
   follows the visitor's pointer and cues whichever section it points at: that
   section's stands lift on the beat in blue pencil and its label shows what the
   section is. With no pointer over the stage (touch, idle), it conducts itself.

   Section labels live in .scene-labels (HTML over the canvas) and are placed by
   projecting each section's position every frame. The scene frames itself into
   the landing's .landing-stage element, so the CSS decides where it sits.

   API: window.__initLandingScene(container) returns a cleanup fn;
   window.__setSceneProgress(0..1) tips the view over into the stage plan as the
   landing scrolls away. No build step: uses the CDN three.js (window.THREE). */
(function () {
  const PAPER = 0xeef0ec, INK = 0x121317, PENCIL = 0x2b46d9;
  const ROWS = [2.7, 4.05, 5.4];                // row radii, podium at the origin
  // Sections: row, angular span in degrees (0 = straight ahead), number of stands
  const LAYOUT = {
    llm: { row: 0, from: -66, to: -8, n: 6 },
    voice: { row: 0, from: 8, to: 66, n: 6 },
    platform: { row: 1, from: -62, to: -6, n: 7 },
    automation: { row: 1, from: 8, to: 60, n: 5 },
    cloud: { row: 2, from: -54, to: 54, n: 10 }
  };
  const ORDER = ["llm", "voice", "platform", "automation", "cloud"];
  const HAND = [0, 1.5, 0.45];
  const LOOK_Y = 0.9;
  const RADIUS = 4.9;                            // fit radius for the stage box
  const deg = Math.PI / 180;

  function standSegments(px, pz, out) {
    // forward points from the stand back toward the podium
    const len = Math.hypot(px, pz) || 1;
    const fx = -px / len, fz = -pz / len;
    const rx = fz, rz = -fx;                     // right, on the floor
    const top = 1.0;
    const push = (ax, ay, az, bx, by, bz) => out.push(ax, ay, az, bx, by, bz);
    // pole and tripod
    push(px, 0, pz, px, top, pz);
    for (const a of [90, 210, 330]) {
      const c = Math.cos(a * deg), s = Math.sin(a * deg);
      push(px, 0.02, pz, px + 0.22 * (c * rx + s * fx), 0, pz + 0.22 * (c * rz + s * fz));
    }
    // the desk leans away from the conductor
    const ux = -fx * Math.sin(28 * deg), uy = Math.cos(28 * deg), uz = -fz * Math.sin(28 * deg);
    const cx = px, cy = top + 0.16, cz = pz;
    const hw = 0.26, hh = 0.17;
    const P = (i, j) => [cx + i * hw * rx + j * hh * ux, cy + j * hh * uy, cz + i * hw * rz + j * hh * uz];
    const corners = [P(-1, -1), P(1, -1), P(1, 1), P(-1, 1)];
    for (let k = 0; k < 4; k++) push(...corners[k], ...corners[(k + 1) % 4]);
    // three staff lines on the part
    for (const j of [-0.45, 0, 0.45]) push(...P(-0.72, j), ...P(0.72, j));
  }

  function init(container) {
    if (!window.THREE) { console.warn("Three not loaded yet"); return; }
    const THREE = window.THREE;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none)").matches;
    const landing = container.closest(".landing") || container.parentNode;
    const stage = landing.querySelector(".landing-stage");
    const labelBox = landing.querySelector(".scene-labels");

    let w = container.clientWidth, h = container.clientHeight;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(PAPER, 14, 30);
    const camera = new THREE.PerspectiveCamera(32, w / h, 0.3, 120);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const world = new THREE.Group();
    scene.add(world);
    const disposables = [];

    // ── Rows marked on the floor ───────────────────────────────
    ROWS.forEach((R) => {
      const pts = [];
      for (let a = -72; a <= 72; a += 2) pts.push(new THREE.Vector3(R * Math.sin(a * deg), 0, -R * Math.cos(a * deg)));
      const g = new THREE.BufferGeometry().setFromPoints(pts);
      const m = new THREE.LineDashedMaterial({ color: INK, dashSize: 0.12, gapSize: 0.1, transparent: true, opacity: 0.28 });
      const l = new THREE.Line(g, m);
      l.computeLineDistances();
      world.add(l);
      disposables.push(g, m);
    });

    // ── Podium ─────────────────────────────────────────────────
    {
      const x = 0.55, z0 = 0.05, z1 = 0.85, y = 0.26;
      const v = [
        [-x, 0, z0], [x, 0, z0], [x, 0, z1], [-x, 0, z1],
        [-x, y, z0], [x, y, z0], [x, y, z1], [-x, y, z1]
      ];
      const E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
      const arr = [];
      E.forEach(([a, b]) => arr.push(...v[a], ...v[b]));
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(arr, 3));
      const m = new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.85 });
      world.add(new THREE.LineSegments(g, m));
      disposables.push(g, m);
    }

    // ── Sections of stands ─────────────────────────────────────
    const sections = {};
    ORDER.forEach((id, si) => {
      const L = LAYOUT[id];
      const R = ROWS[L.row];
      const arr = [];
      for (let i = 0; i < L.n; i++) {
        const a = (L.from + (L.to - L.from) * (L.n === 1 ? 0.5 : i / (L.n - 1))) * deg;
        standSegments(R * Math.sin(a), -R * Math.cos(a), arr);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(arr, 3));
      const m = new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.62 });
      const grp = new THREE.Group();
      grp.add(new THREE.LineSegments(g, m));
      grp.scale.y = reduceMotion ? 1 : 0.001;
      world.add(grp);
      disposables.push(g, m);
      const mid = ((L.from + L.to) / 2) * deg;
      sections[id] = {
        grp, mat: m, row: L.row, index: si,
        center: new THREE.Vector3(R * Math.sin(mid), 1.42, -R * Math.cos(mid)),
        aim: new THREE.Vector3(R * Math.sin(mid), 1.15, -R * Math.cos(mid)),
        label: labelBox ? labelBox.querySelector(`.sl[data-section="${id}"]`) : null,
        cueEls: labelBox ? [...labelBox.querySelectorAll(`[data-section="${id}"]`)] : [],
        lift: 0, glow: 0
      };
    });
    const podiumLabel = labelBox ? labelBox.querySelector(".sl-podium") : null;

    // ── Baton: a pencil line from the conductor's hand ─────────
    const batonPos = new Float32Array(6);
    const batonGeo = new THREE.BufferGeometry();
    batonGeo.setAttribute("position", new THREE.BufferAttribute(batonPos, 3));
    const batonMat = new THREE.LineBasicMaterial({ color: PENCIL });
    const batons = [0, 0.006, -0.006].map((dy) => {
      const l = new THREE.Line(batonGeo, batonMat);
      l.position.y = dy;
      world.add(l);
      return l;
    });
    disposables.push(batonGeo, batonMat);
    const aimNow = sections.llm.aim.clone();

    // ── Framing: fit the orchestra into the stage element ──────
    let dist = 12;
    function frame() {
      w = container.clientWidth; h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      const box = container.getBoundingClientRect();
      let cx = w * 0.72, cy = h * 0.42, sw = w * 0.5, sh = h * 0.6;
      if (stage) {
        const st = stage.getBoundingClientRect();
        if (st.width > 0 && st.height > 0) {
          cx = st.left - box.left + st.width / 2;
          cy = st.top - box.top + st.height / 2;
          sw = st.width; sh = st.height;
        }
      }
      camera.setViewOffset(w, h, w / 2 - cx, h / 2 - cy, w, h);
      const tanV = Math.tan((camera.fov * Math.PI) / 360);
      dist = Math.max(RADIUS / (tanV * (sh / h)) * 0.78, RADIUS / (tanV * camera.aspect * (sw / w)));
      scene.fog.near = dist - 1;
      scene.fog.far = dist + 16;
      camera.updateProjectionMatrix();
    }

    // ── Pointer: point at a section to cue it ──────────────────
    let px = 0, py = 0, tpx = 0, tpy = 0;
    let pointer = null, lastMove = -10;
    const clock = new THREE.Clock();
    const onMouse = (e) => {
      tpx = (e.clientX / window.innerWidth - 0.5) * 2;
      tpy = (e.clientY / window.innerHeight - 0.5) * 2;
      pointer = { x: e.clientX, y: e.clientY };
      lastMove = clock.getElapsedTime();
    };
    if (!touch) window.addEventListener("mousemove", onMouse, { passive: true });

    let progress = 0, progLerp = 0;
    const center = new THREE.Vector3(0, LOOK_Y, -2.2);
    function placeCamera() {
      const e = (36 + progLerp * 48) * deg + py * 0.04;
      const yaw = px * 0.1;
      camera.position.set(
        center.x + Math.sin(yaw) * Math.cos(e) * dist,
        center.y + Math.sin(e) * dist,
        center.z + Math.cos(yaw) * Math.cos(e) * dist
      );
      camera.lookAt(center);
    }

    const pv = new THREE.Vector3();
    const PODIUM_FRONT = new THREE.Vector3(0, 0, 0.95);
    const INK_C = new THREE.Color(INK), PENCIL_C = new THREE.Color(PENCIL);
    const screenOf = (v) => {
      pv.copy(v).project(camera);
      return [(pv.x * 0.5 + 0.5) * w, (-pv.y * 0.5 + 0.5) * h];
    };

    let cued = "llm";
    function setCue(id) {
      if (id === cued) return;
      cued = id;
      ORDER.forEach((k) => sections[k].cueEls.forEach((el) => el.classList.toggle("is-cued", k === id)));
    }
    sections.llm.cueEls.forEach((el) => el.classList.add("is-cued"));

    function pickCue(t) {
      const box = container.getBoundingClientRect();
      const auto = touch || !pointer || t - lastMove > 3.2;
      if (!auto) {
        // nearest section to the pointer, when the pointer is over the stage
        const st = stage ? stage.getBoundingClientRect() : box;
        const inside = pointer.x > st.left - 40 && pointer.x < st.right + 40 && pointer.y > st.top - 40 && pointer.y < st.bottom + 40;
        if (inside) {
          let best = cued, bd = Infinity;
          ORDER.forEach((k) => {
            const [sx, sy] = screenOf(sections[k].center);
            const d = Math.hypot(sx + box.left - pointer.x, sy + box.top - pointer.y);
            if (d < bd) { bd = d; best = k; }
          });
          setCue(best);
          return;
        }
      }
      // conducting by itself: a new section every two bars
      setCue(ORDER[Math.floor(t / 2.6) % ORDER.length]);
    }

    function placeLabels() {
      ORDER.forEach((k) => {
        const s = sections[k];
        if (!s.label) return;
        const [x, y] = screenOf(s.center);
        s.label.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      });
      if (podiumLabel) {
        const [x, y] = screenOf(PODIUM_FRONT);
        podiumLabel.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      }
    }

    let startAt = -1, rafId, paused = false, last = 0;
    function update(t) {
      const dt = Math.min(0.05, t - last); last = t;
      if (startAt < 0 && document.documentElement.classList.contains("is-ready")) startAt = t;
      progLerp += (progress - progLerp) * 0.08;
      px += (tpx - px) * 0.04;
      py += (tpy - py) * 0.04;

      // stands rise from the floor, row by row, once the loader hands over
      const since = startAt < 0 ? -1 : t - startAt;
      const beat = (t % 0.6) / 0.6;
      ORDER.forEach((k) => {
        const s = sections[k];
        if (!reduceMotion) {
          const x = Math.min(1, Math.max(0, (since - s.row * 0.22 - s.index * 0.06) / 0.9));
          s.grp.scale.y = Math.max(0.001, 1 - Math.pow(1 - x, 3));
        }
        const on = k === cued ? 1 : 0;
        s.glow += (on - s.glow) * Math.min(1, dt * 7);
        const lift = on && !reduceMotion ? Math.pow(Math.max(0, Math.sin(beat * Math.PI)), 6) * 0.07 : 0;
        s.lift += (lift - s.lift) * 0.5;
        s.grp.position.y = s.lift;
        s.mat.color.copy(INK_C).lerp(PENCIL_C, s.glow);
        s.mat.opacity = 0.55 + 0.4 * s.glow;
      });

      // the baton turns toward the cued section and dips on the beat
      aimNow.lerp(sections[cued].aim, Math.min(1, dt * 5));
      const dx = aimNow.x - HAND[0], dy = aimNow.y - HAND[1], dz = aimNow.z - HAND[2];
      const dl = Math.hypot(dx, dy, dz) || 1;
      const dip = reduceMotion ? 0 : Math.sin(beat * Math.PI * 2) * 0.05;
      const bl = 1.25 * Math.min(1, Math.max(0, since / 1.4));
      batonPos[0] = HAND[0]; batonPos[1] = HAND[1]; batonPos[2] = HAND[2];
      batonPos[3] = HAND[0] + (dx / dl) * bl; batonPos[4] = HAND[1] + (dy / dl) * bl + dip; batonPos[5] = HAND[2] + (dz / dl) * bl;
      batonGeo.attributes.position.needsUpdate = true;

      placeCamera();
      renderer.render(scene, camera);
      if (!reduceMotion) pickCue(t);
      placeLabels();
    }

    function tick() {
      if (paused) return;
      update(clock.getElapsedTime());
      rafId = requestAnimationFrame(tick);
    }

    frame();
    const ro = new ResizeObserver(() => { frame(); if (paused) update(last + 10); });
    ro.observe(landing);

    if (reduceMotion) {
      startAt = 0;
      update(10);
      paused = true;
    } else {
      tick();
    }

    // Pause when the landing is off-screen or the tab is hidden
    let inView = true, tabVisible = true;
    const updatePause = () => {
      if (reduceMotion) return;
      const run = inView && tabVisible;
      if (run && paused) { paused = false; tick(); }
      else if (!run && !paused) { paused = true; cancelAnimationFrame(rafId); }
    };
    const io = new IntersectionObserver((entries) => { inView = entries[0].isIntersecting; updatePause(); }, { threshold: 0 });
    io.observe(container);
    const onVis = () => { tabVisible = !document.hidden; updatePause(); };
    document.addEventListener("visibilitychange", onVis);

    window.__setSceneProgress = (p) => { progress = Math.max(0, Math.min(1, p)); };

    return () => {
      cancelAnimationFrame(rafId);
      io.disconnect(); ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("mousemove", onMouse);
      window.__setSceneProgress = null;
      batons.forEach((l) => world.remove(l));
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      container.innerHTML = "";
    };
  }

  window.__initLandingScene = init;
})();
