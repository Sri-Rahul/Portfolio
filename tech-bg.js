/* Tech stack background — slowly-rotating constellation of glowing points
   connected by faint lines. Adds atmospheric depth behind the tech chips.
*/
(function () {
  function init(container) {
    if (!window.THREE) { console.warn("Three not loaded"); return; }
    const THREE = window.THREE;

    // If the container has zero size, wait until it does (ResizeObserver-style polling).
    if (container.clientWidth === 0 || container.clientHeight === 0) {
      let retries = 0;
      const retry = setInterval(() => {
        retries++;
        if (container.clientWidth > 0 && container.clientHeight > 0) {
          clearInterval(retry);
          init(container);
        } else if (retries > 40) {  // 4 seconds
          clearInterval(retry);
          console.warn("[tech-bg] container never got dimensions");
        }
      }, 100);
      return () => clearInterval(retry);
    }

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Generate point cloud on the surface of a tilted sphere (so it has shape)
    const count = 220;
    const positions = new Float32Array(count * 3);
    const radii = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const r = 4.5 + (Math.random() - 0.5) * 1.4;
      positions[i * 3]     = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.cos(theta) * 0.65;        // squish vertically
      positions[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi);
      radii.push(r);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xc2a4ff,
      size: 0.06,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const pts = new THREE.Points(pGeo, pMat);
    scene.add(pts);

    // Build constellation lines — for each point, connect to its 2 nearest neighbours
    // (computed once at init for performance)
    const linePositions = [];
    const points3 = [];
    for (let i = 0; i < count; i++) {
      points3.push(new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]));
    }
    for (let i = 0; i < count; i++) {
      const dists = [];
      for (let j = 0; j < count; j++) {
        if (i === j) continue;
        dists.push({ j, d: points3[i].distanceTo(points3[j]) });
      }
      dists.sort((a, b) => a.d - b.d);
      // connect to 2 closest, but only if they're close enough to feel like a constellation
      for (let k = 0; k < 2; k++) {
        const n = dists[k];
        if (n.d > 1.6) continue;
        linePositions.push(
          points3[i].x, points3[i].y, points3[i].z,
          points3[n.j].x, points3[n.j].y, points3[n.j].z
        );
      }
    }
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lMat = new THREE.LineBasicMaterial({
      color: 0xc2a4ff, transparent: true, opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lGeo, lMat);
    scene.add(lines);

    // A central faint glow
    const glowGeo = new THREE.SphereGeometry(0.4, 24, 24);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xfb8dff, transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    // Mouse parallax
    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      const w2 = container.clientWidth, h2 = container.clientHeight;
      renderer.setSize(w2, h2);
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let raf;
    function tick() {
      const t = clock.getElapsedTime();
      pts.rotation.y = t * 0.06;
      pts.rotation.x = Math.sin(t * 0.08) * 0.12;
      lines.rotation.copy(pts.rotation);

      glow.scale.setScalar(0.9 + Math.sin(t * 0.8) * 0.15);

      tx += (mx * 0.6 - tx) * 0.04;
      ty += (-my * 0.4 - ty) * 0.04;
      camera.position.x = tx;
      camera.position.y = ty;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.innerHTML = "";
    };
  }

  window.__initTechBg = init;
})();
