# Sri Rahul Namana's Portfolio

A single-page interactive portfolio: dark, cinematic, with a full-bleed Three.js
landing scene, GSAP scroll animations, Lenis smooth scrolling, and a custom blob
cursor.

## Stack

- **React 18**, loaded from a CDN and compiled in the browser with Babel, so there is no build step
- **Three.js** for the landing icosahedron and orbiter scene, plus the constellation backdrop
- **GSAP and ScrollTrigger** for the scroll-driven reveals and the pinned horizontal Work rail
- **Lenis** for smooth scrolling
- Plain **CSS** with the Geist and Geist Mono typefaces

## Sections

Landing · About · Practices · Career · Work (recent builds) · Certifications · Contact

## Run locally

No build or install step. Serve the folder over HTTP (the browser fetches the
`.jsx` files, so `file://` won't work):

```bash
# any static server, e.g.
npx serve .
# or
python -m http.server 8000
```

Then open the printed URL.

## Structure

```
index.html        entry point, loads styles and scripts
styles.css        all styling and animations
app.jsx           React app: data, sections, components
three-scene.js    landing 3D scene
tech-bg.js        constellation backdrop
image-slot.js     fillable image component
tweaks-panel.jsx  live theme/motion controls
projects/         project screenshots
```

## Contact

- **GitHub:** [@Sri-Rahul](https://github.com/Sri-Rahul)
- **LinkedIn:** [sri-rahul-n](https://www.linkedin.com/in/sri-rahul-n/)
- **Email:** srirahul0301@gmail.com
