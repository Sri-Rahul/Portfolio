/* Three.js abstract landing scene
   - Central icosahedron with iridescent feel
   - Orbiting smaller spheres
   - Mouse parallax
   No build step — uses CDN three.js (window.THREE).
*/
(function () {
  function init(container) {
    if (!window.THREE) {
      console.warn("Three not loaded yet");
      return;
    }
    const THREE = window.THREE;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0x8b6bff, 0.7);
    scene.add(ambient);
    const key = new THREE.PointLight(0xc2a4ff, 25, 30);
    key.position.set(3, 3, 4);
    scene.add(key);
    const fill = new THREE.PointLight(0xfb8dff, 18, 30);
    fill.position.set(-3, -1, 3);
    scene.add(fill);
    const rim = new THREE.PointLight(0x7f40ff, 30, 30);
    rim.position.set(-2, 3, -3);
    scene.add(rim);

    // Central icosahedron — abstract "head"
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x1a1424,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      iridescence: 1,
      iridescenceIOR: 1.4,
      iridescenceThicknessRange: [120, 480],
      flatShading: true,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Wire overlay
    const wireGeo = new THREE.IcosahedronGeometry(1.62, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc2a4ff, wireframe: true, transparent: true, opacity: 0.25,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    core.add(wire);

    // Orbiting small spheres
    const orbiters = [];
    const orbCount = 14;
    for (let i = 0; i < orbCount; i++) {
      const r = 0.08 + Math.random() * 0.22;
      const g = new THREE.SphereGeometry(r, 18, 18);
      const m = new THREE.MeshPhysicalMaterial({
        color: i % 3 === 0 ? 0xfb8dff : (i % 3 === 1 ? 0xc2a4ff : 0x9d7bff),
        emissive: i % 3 === 0 ? 0xfb8dff : (i % 3 === 1 ? 0xc2a4ff : 0x9d7bff),
        emissiveIntensity: 0.7,
        metalness: 0.4,
        roughness: 0.25,
      });
      const mesh = new THREE.Mesh(g, m);
      const orbit = 2.6 + Math.random() * 3.2;        // wider spread
      const speed = 0.18 + Math.random() * 0.55;
      const phase = Math.random() * Math.PI * 2;
      const tiltX = (Math.random() - 0.5) * 0.7;       // independent tilt axes
      const tiltY = (Math.random() - 0.5) * 0.5;
      const tiltZ = (Math.random() - 0.5) * 0.7;
      mesh.userData = { orbit, speed, phase, tiltX, tiltY, tiltZ };
      scene.add(mesh);
      orbiters.push(mesh);
    }

    // Particle dust (more, wider spread for full-bleed canvas)
    const dustCount = 300;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const r = 4 + Math.random() * 8;
      const t = Math.random() * Math.PI * 2;
      const p = (Math.random() - 0.5) * 8;
      dustPos[i * 3]     = Math.cos(t) * r;
      dustPos[i * 3 + 1] = p;
      dustPos[i * 3 + 2] = Math.sin(t) * r;
    }
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xc2a4ff, size: 0.025, transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // Mouse parallax
    let mouseX = 0, mouseY = 0, tx = 0, ty = 0;
    const onMouse = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      mouseY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    // Resize
    const onResize = () => {
      const w2 = container.clientWidth;
      const h2 = container.clientHeight;
      renderer.setSize(w2, h2);
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Animate
    const clock = new THREE.Clock();
    let rafId;
    let paused = false;
    let scrollProgress = 0;            // 0..1 driven by scroll
    let scrollLerp = 0;
    function tick() {
      if (paused) return;
      const t = clock.getElapsedTime();

      // Lerp scroll progress for smoothness
      scrollLerp += (scrollProgress - scrollLerp) * 0.06;

      // Base rotation + scroll-amplified spin
      core.rotation.y = t * 0.25 + scrollLerp * Math.PI * 1.4;
      core.rotation.x = Math.sin(t * 0.4) * 0.18 + scrollLerp * 0.8;
      core.rotation.z = scrollLerp * 0.6;

      // Scale down + drift up as you scroll past
      const scale = 1 - scrollLerp * 0.4;
      core.scale.set(scale, scale, scale);
      core.position.y = scrollLerp * 1.2;

      orbiters.forEach(o => {
        const { orbit, speed, phase, tiltX, tiltY, tiltZ } = o.userData;
        const r = orbit * (1 + scrollLerp * 0.4);
        const a = t * speed + phase;
        // tilted orbit plane — each orbiter has its own tilt
        o.position.x = Math.cos(a) * r + Math.sin(a) * tiltX;
        o.position.z = Math.sin(a) * r + Math.cos(a) * tiltZ;
        o.position.y = Math.sin(a * 1.3) * (r * 0.35 + tiltY) + scrollLerp * 0.5;
      });
      dust.rotation.y = t * 0.04 + scrollLerp * 0.3;

      // Parallax
      tx += (mouseX * 0.4 - tx) * 0.05;
      ty += (-mouseY * 0.25 - ty) * 0.05;
      camera.position.x = tx;
      camera.position.y = ty;
      camera.position.z = 6 + scrollLerp * 2;       // pull camera back on scroll
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    }
    tick();

    // Pause rendering when the landing is scrolled out of view or the tab is
    // hidden — no point spinning the GPU at 60fps while the user reads the rest
    // of the page. Resumes seamlessly when it comes back into view.
    let inView = true, tabVisible = true;
    const updatePause = () => {
      const run = inView && tabVisible;
      if (run && paused) { paused = false; tick(); }
      else if (!run && !paused) { paused = true; cancelAnimationFrame(rafId); }
    };
    const io = new IntersectionObserver(
      (entries) => { inView = entries[0].isIntersecting; updatePause(); },
      { threshold: 0 }
    );
    io.observe(container);
    const onVis = () => { tabVisible = !document.hidden; updatePause(); };
    document.addEventListener("visibilitychange", onVis);

    // External setter so GSAP/ScrollTrigger can drive scene state
    window.__setSceneProgress = (p) => {
      scrollProgress = Math.max(0, Math.min(1, p));
    };

    return () => {
      cancelAnimationFrame(rafId);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      window.__setSceneProgress = null;
      renderer.dispose();
      container.innerHTML = "";
    };
  }

  window.__initLandingScene = init;
})();
