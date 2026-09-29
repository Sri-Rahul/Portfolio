/* AUTO-GENERATED from app.jsx by build.js — do not edit directly. */
/* global React, ReactDOM, gsap, ScrollTrigger, Lenis */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ─── Data ─────────────────────────────────────────────── */
const PROFILE = {
  first: "Sri Rahul",
  last: "Namana",
  email: "srirahul0301@gmail.com",
  github: "https://github.com/Sri-Rahul",
  linkedin: "https://www.linkedin.com/in/sri-rahul-n/"
};

/* Practices are parts in the score. Their tags are sung as lyrics, and the
   rhythm matches the work: planning in half notes, building in quick eighths,
   design in even quarters. Pitches are staff positions, 0 = bottom line. */
const WHAT_I_DO = [{
  title: "Plan",
  rhythm: "half",
  pitches: [2, 4, 3, 5, 4, 6, 5],
  desc: "Mapping out the build before any code lands. Researching the approaches, weighing the tradeoffs, picking the right stack, and shaping an architecture that keeps everything downstream simpler.",
  tags: ["Research", "Stack decisions", "Architecture", "Tradeoffs", "Constraints", "Scope", "Prior art"]
}, {
  title: "Develop",
  rhythm: "eighth",
  pitches: [0, 2, 4, 3, 5, 7, 6],
  desc: "Building production AI products from end to end. Voice agents, full-stack platforms, payment integrations, and the APIs that connect them.",
  tags: ["Full-stack", "Next.js", "React", "Node.js", "FastAPI", "Voice agents", "Integrations"]
}, {
  title: "Design",
  rhythm: "quarter",
  pitches: [4, 5, 7, 6, 5, 3],
  desc: "Interface and conversation design. Voice flows, platform UI, and content systems, plus the wireframes, prototypes, and visual language that turn features into experiences people remember.",
  tags: ["Figma", "UI design", "Voice / conversation", "Platform UX", "Prototyping", "Content systems"]
}];
const CAREER = [{
  year: "2023",
  role: "Content Writer & PM Intern",
  org: "Thaya Jewels",
  period: "Mar – May 2023",
  hl: {
    v: "+20%",
    l: "organic search"
  },
  body: "Developed SEO-optimized content and managed product listings. Ran digital marketing campaigns that lifted organic search rankings by 20%."
}, {
  year: "2023",
  role: "Content Editor",
  org: "CSI VITAP Chapter",
  period: "Jan – Dec 2023",
  body: "Edited videos and Instagram reels for the chapter and produced multimedia in Wondershare Filmora, working with teams across departments through a year of programming."
}, {
  year: "2025",
  role: "AI Intern",
  org: "Edunet Foundation",
  period: "Jan 2025",
  body: "Explored image generation with Stable Diffusion and ComfyUI, fine-tuning diffusion models and refining the prompt engineering to produce high-quality outputs."
}, {
  year: "2025",
  role: "Web Developer Intern",
  org: "Texvo Developers",
  period: "Feb – May 2025",
  body: "Built a restaurant digital ordering system with kitchen, customer, and waiter dashboards plus order automation, working remotely across PHP, JS, and MySQL."
}, {
  year: "2025",
  role: "AI Intern",
  org: "Inbotiq",
  period: "May – Nov 2025",
  hl: {
    v: "70%",
    l: "less manual SEO work"
  },
  body: "Designed the platform's database schema from scratch and built its first core: agent management, plan subscriptions with Razorpay, and an embeddable website chatbot. Also shipped an n8n pipeline that takes a topic through keyword research, writing and review to a published WordPress post, with a person approving each step."
}, {
  year: "2026",
  role: "Associate Technical Lead",
  org: "Inbotiq",
  period: "Nov 2025 – Sep 2026",
  promoted: true,
  clients: true,
  hl: {
    v: "6x",
    l: "faster extraction API"
  },
  body: "Promoted to run the AI team on two products: the fine-tuned LLM engine behind Volza's data extraction, and v2 of Vaanee, our voice agent. I owned the architecture, the releases and the incidents, and took Vaanee to Artium Academy myself."
}];
const PROJECTS = [{
  n: "01",
  name: "Retail Automation",
  category: "Computer vision, 2024",
  desc: "A retail solution that reimagines checkout using face recognition and object detection.",
  stack: "OpenCV, InsightFace, TensorFlow, Python, Flask",
  image: "projects/automated-shopping.png",
  stock: true,
  alt: "Illustration of a self-checkout store where cameras recognise the shopper and the items in the basket",
  github: null,
  demo: null,
  pub: null
}, {
  n: "02",
  name: "Accident Severity Prediction",
  category: "Machine learning, published at IEEE",
  desc: "Random Forest beat HGB, SVM, and KNN with 94% accuracy on road accident severity classification.",
  stack: "Python, scikit-learn, pandas, numpy",
  image: "projects/road-accident-severity.png",
  stock: true,
  alt: "Project banner: a laptop showing Random Forest results and the 94% accuracy",
  highlight: {
    v: "94%",
    l: "best accuracy"
  },
  github: "https://github.com/Sri-Rahul/Road-Accident-Severity-Prediction",
  pub: "https://ieeexplore.ieee.org/document/10962895"
}, {
  n: "03",
  name: "Salary Predictor",
  category: "Full-stack ML, 2024",
  desc: "Predicts starting salary from academics and skills using CatBoost + XGBoost. R² of 98.21%.",
  stack: "React, TypeScript, Next.js, Flask, Python, scikit-learn",
  image: "projects/salaryprd.png",
  alt: "Screenshot of the Salary Predictor landing page",
  highlight: {
    v: "0.98",
    l: "R² score"
  },
  github: "https://github.com/Sri-Rahul/Salary_Predictor",
  demo: "https://salarypredictor.netlify.app/"
}, {
  n: "04",
  name: "Link Analytics Dashboard",
  category: "Full stack, MERN",
  desc: "URL shortener with custom aliases, QR codes, JWT auth, and a click-through analytics dashboard.",
  stack: "Next.js, MongoDB, Tailwind, Node.js, Express",
  image: "projects/linksht.png",
  alt: "Screenshot of the link analytics dashboard landing page",
  github: "https://github.com/Sri-Rahul/linkanalysis",
  demo: "https://advanced-url-shortner.netlify.app/home"
}];
const CLIENTS = [{
  id: "volza",
  name: "Volza",
  url: "https://www.volza.com/",
  what: "Export–import trade data for 200 countries",
  logo: {
    webp: "clients/volza-on-light.webp",
    png: "clients/volza-on-light.png",
    w: 419,
    h: 150
  },
  brand: "3, 118, 241",
  did: "Their customs records arrive as one messy line per company. I led the fine-tuned LLM and the clean-up pipeline that turn each line into 14 structured fields, then scaled it to their whole backlog.",
  facts: [["99%", "client-validated accuracy"], ["55M+", "records processed"], ["11 mo", "Nov 2025 – Sep 2026"]]
}, {
  id: "artium",
  name: "Artium Academy",
  url: "https://artiumacademy.com/",
  what: "Online music school with one-to-one classes for families in India and abroad",
  logo: {
    webp: "clients/artium-academy.webp",
    png: "clients/artium-academy.png",
    w: 192,
    h: 192,
    tile: true
  },
  brand: "220, 28, 195",
  did: "I pitched our voice agent to their team in person in Bengaluru, then built the agent that makes the welcome call after a family enrols, working from 18 of their real onboarding calls.",
  facts: [["On-site", "pitch in Bengaluru"], ["18", "real calls studied"], ["16", "nodes in the call flow"]]
}];
const CERT_PROVIDERS = ["Google", "Coursera", "AWS", "Google Cloud", "Cisco Networking Academy", "FutureLearn"];

/* ─── Icons (authored, one 1.5 stroke family) ─────────── */
function IconArrow({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    "aria-hidden": "true",
    className: "icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7M9 7h8v8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function IconDown({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    "aria-hidden": "true",
    className: "icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M6 13l6 6 6-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function IconUp({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    "aria-hidden": "true",
    className: "icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M6 11l6-6 6 6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function IconCheck({
  size = 12
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    "aria-hidden": "true",
    className: "icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m3.5 8.5 3 3 6-7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/* The conductor's blue pencil: a hand-drawn stroke under a word */
const PEN_PATH = "M1.5 6.4C17 4.2 33 7.8 51 5.7S83 3.8 98.5 5.2";
/* A small fermata (the "hold" sign), drawn */
function Fermata({
  x,
  y,
  s = 1,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("g", {
    className: `fermata ${className}`,
    transform: `translate(${x} ${y}) scale(${s})`
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-9 0C-9-7-4.5-10.5 0-10.5S9-7 9 0h-1.6C7.4-5.6 4-8.6 0-8.6S-7.4-5.6-7.4 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "-2",
    r: "1.7"
  }));
}

/* Smooth scroll to a section id through Lenis when it is running */
function scrollToId(id, offset = -40) {
  const t = document.getElementById(id);
  if (!t) return;
  if (window.__lenis) window.__lenis.scrollTo(t, {
    offset,
    duration: 1.4
  });else t.scrollIntoView({
    behavior: "smooth"
  });
}

/* ─── Loader: the orchestra tunes before it plays ─────── */
function Loader({
  onDone
}) {
  const rootRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 150 : 1150;
    let raf;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      if (rootRef.current) rootRef.current.style.setProperty("--p", eased.toFixed(4));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const t1 = setTimeout(() => rootRef.current && rootRef.current.classList.add("done"), dur + 120);
    const t2 = setTimeout(() => {
      if (rootRef.current) rootRef.current.style.display = "none";
      document.body.style.overflow = "";
      onDone && onDone();
    }, dur + 650);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "loader",
    ref: rootRef,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-frame"
  }, /*#__PURE__*/React.createElement("p", {
    className: "loader-name"
  }, "Sri Rahul Namana"), /*#__PURE__*/React.createElement("svg", {
    className: "loader-staff",
    viewBox: "0 0 400 24",
    preserveAspectRatio: "none"
  }, [2, 7, 12, 17, 22].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    x2: "400",
    y1: y,
    y2: y
  }))), /*#__PURE__*/React.createElement("p", {
    className: "loader-meta"
  }, /*#__PURE__*/React.createElement("i", null, "tuning to A"), /*#__PURE__*/React.createElement("span", null, "440 Hz"))));
}

/* ─── Cursor: the conductor's pencil point ─────────────── */
function Cursor() {
  const ref = useRef(null);
  const labelRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    document.documentElement.classList.add("has-cursor");
    const c = ref.current;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let cx = mx,
      cy = my,
      raf;
    const loop = () => {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      c.style.setProperty("--x", cx.toFixed(1) + "px");
      c.style.setProperty("--y", cy.toFixed(1) + "px");
      c.style.setProperty("--dx", mx.toFixed(1) + "px");
      c.style.setProperty("--dy", my.toFixed(1) + "px");
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onMove = e => {
      mx = e.clientX;
      my = e.clientY;
      c.classList.add("is-live");
      // over the dark coda the pencil switches to paper colours
      c.classList.toggle("on-ink", !!(e.target && e.target.closest && e.target.closest(".coda")));
    };
    const onOut = () => c.classList.remove("is-live");
    window.addEventListener("mousemove", onMove, {
      passive: true
    });
    document.addEventListener("mouseleave", onOut);
    // every click is a downbeat: a pencil ring opens from the point
    const onDown = () => {
      c.classList.remove("beat");
      void c.offsetWidth;
      c.classList.add("beat");
    };
    window.addEventListener("mousedown", onDown);

    // Elements with data-cursor print their action beside the pencil ("open", "email")
    const hoverables = "a, button, [data-cursor]";
    const enter = e => {
      c.classList.add("is-hover");
      const lbl = e.currentTarget && e.currentTarget.dataset ? e.currentTarget.dataset.cursor : "";
      if (lbl && labelRef.current) {
        labelRef.current.textContent = lbl;
        c.classList.add("is-labeled");
      }
    };
    const leave = () => {
      c.classList.remove("is-hover");
      c.classList.remove("is-labeled");
    };
    const bind = el => {
      if (el.__hb) return;
      el.__hb = true;
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    };
    document.querySelectorAll(hoverables).forEach(bind);
    const mo = new MutationObserver(() => document.querySelectorAll(hoverables).forEach(bind));
    mo.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onOut);
      window.removeEventListener("mousedown", onDown);
      mo.disconnect();
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "cursor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cursor-ring"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cursor-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cursor-label",
    ref: labelRef
  }));
}

/* ─── Nav: the score's running header ──────────────────── */
function Nav() {
  const [active, setActive] = useState("top");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const sections = ["top", "about", "career", "clients", "work", "contact"];
    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= mid) current = id;
      }
      setActive(current);
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = id => e => {
    e.preventDefault();
    scrollToId(id, 0);
  };
  const links = [{
    id: "about",
    label: "About"
  }, {
    id: "career",
    label: "Career"
  }, {
    id: "work",
    label: "Work"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? "is-scrolled" : ""}`,
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav-logo",
    onClick: go("top"),
    "aria-label": "Sri Rahul Namana, back to top"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    className: "nav-mark"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 21h18M3 21 12 3M21 21 12 3",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 17l9.8-8.4M7 13l8.9-2.2M9 9l8 5.4M10.5 6l8.4 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: ".9"
  })), /*#__PURE__*/React.createElement("span", null, "Sri Rahul Namana")), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, links.map(l => {
    const on = active === l.id || l.id === "career" && active === "clients";
    return /*#__PURE__*/React.createElement("li", {
      key: l.id
    }, /*#__PURE__*/React.createElement("a", {
      href: `#${l.id}`,
      onClick: go(l.id),
      className: on ? "active" : "",
      "aria-current": on ? "true" : undefined
    }, l.label, /*#__PURE__*/React.createElement("svg", {
      className: "pen-line",
      viewBox: "0 0 100 10",
      preserveAspectRatio: "none",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: PEN_PATH,
      pathLength: "1"
    }))));
  })));
}

/* ─── The hero's full score: every part of the profile, 2022 to Sep 2026 ───
   Bars are quarters. As in engraved music, a bar's width follows how much
   happens in it rather than how long it lasts, so the busy Inbotiq quarters get
   the room. Parts that have not started yet rest (the number counts the bars),
   then enter on cue. m = months since Jan 2022. */
const HS = {
  W: 1320,
  H: 352,
  X0: 184,
  X1: 1312
};
const Q_WEIGHTS = [0.5, 0.5, 0.5, 0.5, 0.9, 0.9, 0.9, 0.9, 0.6, 0.6, 0.6, 0.6, 1.2, 1.3, 1.3, 1.5, 1.6, 1.6, 1.8];
const QB = (() => {
  const total = Q_WEIGHTS.reduce((a, b) => a + b, 0);
  const out = [HS.X0];
  Q_WEIGHTS.forEach(q => out.push(out[out.length - 1] + q / total * (HS.X1 - HS.X0)));
  return out;
})();
const hsX = m => {
  const q = Math.min(Q_WEIGHTS.length - 1, Math.max(0, Math.floor(m / 3)));
  return QB[q] + (m - q * 3) / 3 * (QB[q + 1] - QB[q]);
};
const hsTop = k => 88 + k * 40;
const hsY = (k, p) => hsTop(k) + 20 - p * 2.5;
const PROMO = 46; // Nov 2025
const HS_YEARS = [[0, "2022"], [12, "2023"], [24, "2024"], [36, "2025"], [48, "2026"]];

/* Parts, top to bottom. rests: [from, to, bars]; labels sit under the staff. */
const HS_PARTS = [{
  name: "AI models",
  rests: [[0, 36, 12]],
  notes: [[36.5, 3], [40.5, 2], [41.8, 3], [43.1, 4], [44.4, 3]],
  gliss: [[46.8, 1], [49.5, 4], [52.5, 6], [56.2, 10]],
  labels: [[36.2, "Edunet: diffusion"], [40.9, "n8n SEO pipeline"], [46.6, "Llama"], [49.3, "Qwen"], [52.2, "teacher-LLM data"]]
}, {
  name: "Voice agents",
  rests: [[0, 45, 15]],
  contour: [[46.3, 3], [47.6, 6], [49, 4], [50.4, 5.5], [51.8, 2.5], [53.2, 4.5], [54.6, 3], [56.2, 5]],
  notes: [[47.6, 6], [53.2, 4.5]],
  labels: [[47.4, "Vaanee v2 · flow builder"], [53, "Artium, Bengaluru"]]
}, {
  name: "Web and platform",
  rests: [[0, 36, 12]],
  notes: [[37.2, 2], [38.1, 4], [39, 3], [39.9, 5]],
  chords: [[40.8, [2, 4]], [43.5, [3, 5]], [46.5, [2, 5]], [49.5, [4, 6]], [52.5, [3, 6]], [55.5, [4, 7]]],
  labels: [[37, "Texvo: JS, MySQL"], [41.9, "Inbotiq platform"], [47.2, "console, campaigns"], [53.6, "43% smaller bundle"]]
}, {
  name: "Leadership",
  rests: [[0, 45, 15]],
  chords: [[47, [1, 3, 5, 7], true], [50, [1, 3, 5, 7], true], [53, [1, 3, 5, 7], true], [56, [1, 3, 5, 7], true]],
  labels: [[48, "releases and incidents"]]
}, {
  name: "Content",
  rests: [[0, 12, 4], [24, 57, 11]],
  notes: [[12.5, 2, true], [15.5, 2, true], [18.5, 2, true], [21.5, 2, true], [13.9, 5], [14.6, 6], [16.3, 5], [17, 7]],
  labels: [[12.2, "CSI VITAP editor · Thaya Jewels"]]
}, {
  name: "Study",
  held: [7.5, 19.5, 31.5, 43.5, 52.5],
  notes: [[37.8, 7]],
  labels: [[7.2, "B.Tech CSE, VIT-AP, 2022 – 2026"], [37.4, "two IEEE papers"], [52.2, "class of 2026"]]
}];
function Head({
  x,
  y,
  hollow
}) {
  return /*#__PURE__*/React.createElement("ellipse", {
    className: hollow ? "nh nh-open" : "nh",
    cx: x,
    cy: y,
    rx: "3.7",
    ry: "2.7",
    transform: `rotate(-22 ${x} ${y})`
  });
}
function MultiRest({
  k,
  from,
  to,
  n
}) {
  const x0 = hsX(from) + 14,
    x1 = hsX(to) - 14,
    t = hsTop(k);
  if (x1 - x0 < 20) return null;
  return /*#__PURE__*/React.createElement("g", {
    className: "mrest"
  }, /*#__PURE__*/React.createElement("rect", {
    x: x0,
    y: t + 7.5,
    width: x1 - x0,
    height: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: x0,
    x2: x0,
    y1: t + 5,
    y2: t + 15
  }), /*#__PURE__*/React.createElement("line", {
    x1: x1,
    x2: x1,
    y1: t + 5,
    y2: t + 15
  }), /*#__PURE__*/React.createElement("text", {
    x: (x0 + x1) / 2,
    y: t - 5,
    className: "mrest-n"
  }, n));
}
function smoothPath(pts) {
  // Catmull-Rom through the points, as cubic Beziers
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i],
      p1 = pts[i],
      p2 = pts[i + 1],
      p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}
const inRest = (part, m) => (part.rests || []).some(([a, b]) => m > a + 0.01 && m < b - 0.01);
function HeroScore() {
  const svgRef = useRef(null);
  const headRef = useRef(null);

  // The playhead plays the score: on the first pass each note and label appears
  // as it is reached, and every note lights in pencil while the playhead is on it.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = [...svg.querySelectorAll("[data-x]")].map(el => ({
      el,
      x: +el.dataset.x,
      heard: false,
      on: false
    }));
    if (reduce) {
      items.forEach(it => it.el.classList.add("is-heard"));
      return;
    }
    const fig = svg.closest(".hero-score");
    svg.classList.add("is-live");
    fig.classList.add("is-live");
    // the first pass performs the whole score in 8s; after that it reads at a calm pace
    const FIRST = 8000,
      PERIOD = 24000,
      SPAN = HS.X1 - 6 - HS.X0;
    let raf,
      t0 = null,
      visible = true,
      firstPass = true,
      peak = false;
    const io = new IntersectionObserver(e => {
      visible = e[0].isIntersecting;
    }, {
      threshold: 0
    });
    io.observe(svg);
    const loop = now => {
      raf = requestAnimationFrame(loop);
      if (!document.documentElement.classList.contains("is-ready") || !visible) return;
      if (t0 === null) t0 = now + 1100; // let the staves draw first
      const el = Math.max(0, now - t0);
      if (firstPass && el >= FIRST) firstPass = false;
      const f = firstPass ? el / FIRST : (el - FIRST) % PERIOD / PERIOD;
      const x = HS.X0 + f * SPAN;
      if (headRef.current) headRef.current.style.transform = `translateX(${(x - HS.X0).toFixed(1)}px)`;
      for (const it of items) {
        if (!it.heard && (x >= it.x || !firstPass)) {
          it.heard = true;
          it.el.classList.add("is-heard");
          if (!peak && it.el.classList.contains("hs-peak")) {
            peak = true;
            fig.classList.add("peak-heard");
          }
        }
        const on = Math.abs(it.x - x) < 9;
        if (on !== it.on) {
          it.on = on;
          it.el.classList.toggle("is-on", on);
        }
      }
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);
  const staves = [];
  HS_PARTS.forEach((part, k) => {
    const t = hsTop(k);
    const bars = [];
    for (let q = 1; q < Q_WEIGHTS.length; q++) {
      if (inRest(part, q * 3)) continue;
      bars.push(/*#__PURE__*/React.createElement("line", {
        key: q,
        className: "bar",
        x1: QB[q],
        x2: QB[q],
        y1: t,
        y2: t + 20
      }));
    }
    staves.push(/*#__PURE__*/React.createElement("g", {
      key: part.name,
      className: "staff"
    }, [0, 5, 10, 15, 20].map(dy => /*#__PURE__*/React.createElement("line", {
      key: dy,
      className: "st",
      pathLength: "1",
      x1: HS.X0,
      x2: HS.X1,
      y1: t + dy,
      y2: t + dy
    })), /*#__PURE__*/React.createElement("line", {
      className: "bar",
      x1: HS.X0,
      x2: HS.X0,
      y1: t,
      y2: t + 20
    }), bars, k < 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      className: "bar",
      x1: hsX(PROMO) - 3,
      x2: hsX(PROMO) - 3,
      y1: t,
      y2: t + 20
    }), /*#__PURE__*/React.createElement("line", {
      className: "bar",
      x1: hsX(PROMO) + 1,
      x2: hsX(PROMO) + 1,
      y1: t,
      y2: t + 20
    })), /*#__PURE__*/React.createElement("line", {
      className: "bar",
      x1: HS.X1 - 6,
      x2: HS.X1 - 6,
      y1: t,
      y2: t + 20
    }), /*#__PURE__*/React.createElement("line", {
      className: "bar-final",
      x1: HS.X1 - 1.75,
      x2: HS.X1 - 1.75,
      y1: t,
      y2: t + 20
    })));
  });
  const parts = HS_PARTS.map((part, k) => {
    const out = [];
    (part.rests || []).forEach(([a, b, n], i) => out.push(/*#__PURE__*/React.createElement(MultiRest, {
      key: `r${i}`,
      k: k,
      from: a,
      to: b,
      n: n
    })));
    (part.notes || []).forEach(([m, p, hollow], i) => {
      const x = hsX(m),
        y = hsY(k, p);
      out.push(/*#__PURE__*/React.createElement("g", {
        key: `n${i}`,
        className: "hs-note",
        "data-x": x.toFixed(1)
      }, /*#__PURE__*/React.createElement(Head, {
        x: x,
        y: y,
        hollow: hollow
      })));
    });
    (part.chords || []).forEach(([m, ps, hollow], i) => {
      const x = hsX(m);
      out.push(/*#__PURE__*/React.createElement("g", {
        key: `c${i}`,
        className: "hs-note",
        "data-x": x.toFixed(1)
      }, ps.map(p => /*#__PURE__*/React.createElement(Head, {
        key: p,
        x: x,
        y: hsY(k, p),
        hollow: hollow
      }))));
    });
    if (part.gliss) {
      const pts = part.gliss.map(([m, p]) => [hsX(m), hsY(k, p)]);
      pts.slice(0, -1).forEach(([x, y], i) => out.push(/*#__PURE__*/React.createElement("line", {
        key: `g${i}`,
        className: "gliss hs-note",
        "data-x": x.toFixed(1),
        x1: x + 5,
        y1: y,
        x2: pts[i + 1][0] - 5,
        y2: pts[i + 1][1]
      })));
      const [lx] = pts[pts.length - 1];
      out.push(/*#__PURE__*/React.createElement("line", {
        key: "ledger",
        className: "ledger",
        x1: lx - 7,
        x2: lx + 7,
        y1: hsY(k, 10),
        y2: hsY(k, 10)
      }));
      pts.forEach(([x, y], i) => out.push(/*#__PURE__*/React.createElement("g", {
        key: `gh${i}`,
        className: `hs-note${i === pts.length - 1 ? " hs-peak" : ""}`,
        "data-x": x.toFixed(1)
      }, /*#__PURE__*/React.createElement(Head, {
        x: x,
        y: y
      }))));
    }
    if (part.contour) {
      const pts = part.contour.map(([m, p]) => [hsX(m), hsY(k, p)]);
      out.push(/*#__PURE__*/React.createElement("path", {
        key: "contour",
        className: "contour hs-note",
        "data-x": pts[0][0].toFixed(1),
        d: smoothPath(pts)
      }));
    }
    if (part.held) {
      const xs = part.held.map(m => hsX(m)),
        y = hsY(k, 4);
      xs.forEach((x, i) => {
        out.push(/*#__PURE__*/React.createElement("g", {
          key: `h${i}`,
          className: "hs-note",
          "data-x": x.toFixed(1)
        }, /*#__PURE__*/React.createElement(Head, {
          x: x,
          y: y,
          hollow: true
        })));
        if (i < xs.length - 1) out.push(/*#__PURE__*/React.createElement("path", {
          key: `t${i}`,
          className: "tie hs-note",
          "data-x": x.toFixed(1),
          d: `M${x + 5} ${y - 4}Q${(x + xs[i + 1]) / 2} ${y - 13} ${xs[i + 1] - 5} ${y - 4}`
        }));
      });
    }
    (part.labels || []).forEach(([m, text], i) => {
      const x = hsX(m);
      out.push(/*#__PURE__*/React.createElement("text", {
        key: `l${i}`,
        className: "hs-label",
        "data-x": x.toFixed(1),
        x: x,
        y: hsTop(k) + 33
      }, text));
    });
    return /*#__PURE__*/React.createElement("g", {
      key: part.name,
      className: `part part-${k}`
    }, out);
  });
  return /*#__PURE__*/React.createElement("figure", {
    className: "hero-score"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-score-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-score-sheet"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "hs-svg",
    viewBox: `0 0 ${HS.W} ${HS.H}`,
    ref: svgRef,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("text", {
    className: "hs-tempo",
    x: HS.X0,
    y: "40"
  }, "With purpose"), HS_YEARS.map(([m, y]) => /*#__PURE__*/React.createElement("text", {
    key: y,
    className: "hs-year",
    x: hsX(m) + 3,
    y: hsTop(0) - 24
  }, y)), HS_PARTS.map((part, k) => /*#__PURE__*/React.createElement("text", {
    key: part.name,
    className: "hs-part",
    x: HS.X0 - 24,
    y: hsTop(k) + 14
  }, part.name)), /*#__PURE__*/React.createElement("path", {
    className: "hs-bracket",
    d: `M${HS.X0 - 12} ${hsTop(0) - 5}q7 0 9-6M${HS.X0 - 12} ${hsTop(HS_PARTS.length - 1) + 25}q7 0 9 6`
  }), /*#__PURE__*/React.createElement("line", {
    className: "hs-bracket-bar",
    x1: HS.X0 - 12,
    x2: HS.X0 - 12,
    y1: hsTop(0) - 6,
    y2: hsTop(HS_PARTS.length - 1) + 26
  }), staves, parts, /*#__PURE__*/React.createElement(Fermata, {
    x: HS.X1 - 3,
    y: hsTop(0) - 5,
    s: 0.75
  }), /*#__PURE__*/React.createElement("text", {
    className: "hs-date hs-date-promo",
    x: hsX(PROMO) + 3,
    y: hsTop(HS_PARTS.length - 1) + 52
  }, "Nov 2025, promoted"), /*#__PURE__*/React.createElement("text", {
    className: "hs-date",
    x: HS.X1,
    y: hsTop(HS_PARTS.length - 1) + 52,
    textAnchor: "end"
  }, "Sep 2026"), /*#__PURE__*/React.createElement("g", {
    className: "hs-playhead",
    ref: headRef
  }, /*#__PURE__*/React.createElement("line", {
    x1: HS.X0,
    x2: HS.X0,
    y1: hsTop(0) - 6,
    y2: hsTop(HS_PARTS.length - 1) + 26
  }))))), /*#__PURE__*/React.createElement("figcaption", {
    className: "sr-only"
  }, "A score of my whole profile from 2022 to September 2026. Study runs the length of it: a B.Tech in Computer Science at VIT-AP from 2022 to 2026, with two IEEE papers. Content work plays through 2023 at CSI VITAP and Thaya Jewels. In 2025 the web part enters with the Texvo internship (JavaScript and MySQL) and the Inbotiq platform, and the AI part with Edunet and an n8n SEO pipeline. From my promotion in November 2025 the fine-tuned LLM line rises from Llama to Qwen to teacher-LLM data and ends at 99% client-validated accuracy for Volza, the voice part carries Vaanee v2 and the Artium Academy launch in Bengaluru, and leadership enters with the releases and incidents."));
}

/* ─── Landing: the title page ───────────────────────────── */
/* The conductor's view: sections of the orchestra are the systems I led */
const STAGE_SECTIONS = [{
  id: "llm",
  name: "Fine-tuned LLM",
  detail: "DoRA fine-tuning on a four-node H100 cluster"
}, {
  id: "voice",
  name: "Voice agents",
  detail: "Vaanee v2, its flow builder, self-hosted VoxCPM voice"
}, {
  id: "platform",
  name: "Platform",
  detail: "agents, console, channels and campaigns, with Razorpay billing"
}, {
  id: "automation",
  name: "Automation",
  detail: "n8n in queue mode on Azure Kubernetes"
}, {
  id: "cloud",
  name: "Cloud and GPUs",
  detail: "Azure GPU VMs, CI/CD with health gates"
}];
function Landing() {
  const sceneRef = useRef(null);
  useEffect(() => {
    let cleanup;
    if (window.__initLandingScene && sceneRef.current) cleanup = window.__initLandingScene(sceneRef.current);
    let st;
    if (window.gsap && window.ScrollTrigger) {
      st = ScrollTrigger.create({
        trigger: ".landing",
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        onUpdate: self => {
          if (window.__setSceneProgress) window.__setSceneProgress(self.progress);
        }
      });
    }
    return () => {
      cleanup && cleanup();
      st && st.kill();
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "landing",
    id: "top",
    "aria-labelledby": "hero-name"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scene",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    ref: sceneRef,
    className: "scene-canvas"
  })), /*#__PURE__*/React.createElement("div", {
    className: "scene-labels",
    "aria-hidden": "true"
  }, STAGE_SECTIONS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "sl",
    "data-section": s.id,
    key: s.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "sl-name"
  }, s.name))), /*#__PURE__*/React.createElement("div", {
    className: "sl-podium"
  }, STAGE_SECTIONS.map(s => /*#__PURE__*/React.createElement("span", {
    className: "sl-detail",
    "data-section": s.id,
    key: s.id
  }, /*#__PURE__*/React.createElement("b", null, s.name), " \xB7 ", s.detail)))), /*#__PURE__*/React.createElement("div", {
    className: "landing-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "landing-title"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "landing-name",
    id: "hero-name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", null, PROFILE.first)), /*#__PURE__*/React.createElement("span", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", null, PROFILE.last))), /*#__PURE__*/React.createElement("p", {
    className: "landing-inst"
  }, "for fine-tuned LLMs, voice agents, platforms and a team of four"), /*#__PURE__*/React.createElement("p", {
    className: "landing-lede"
  }, "I design AI systems and lead the teams that ship them. Most recently Associate Technical Lead at Inbotiq, across an LLM for data extraction and a voice agent."), /*#__PURE__*/React.createElement("div", {
    className: "landing-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn-pencil",
    href: "#contact",
    "data-cursor": "contact",
    onClick: e => {
      e.preventDefault();
      scrollToId("contact", 0);
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    className: "btn-line",
    href: "#career",
    "data-cursor": "read on",
    onClick: e => {
      e.preventDefault();
      scrollToId("career");
    }
  }, "See the record ", /*#__PURE__*/React.createElement(IconDown, {
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    className: "landing-stage",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "sr-only",
    "aria-label": "Systems I built and led"
  }, STAGE_SECTIONS.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.id
  }, s.name, ": ", s.detail)))), /*#__PURE__*/React.createElement(HeroScore, null));
}

/* Headings ink in word by word as they scroll into place */
function Words({
  text
}) {
  const parts = text.split(" ");
  return parts.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "w"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wi"
  }, w)), i < parts.length - 1 ? " " : ""));
}

/* ─── About: the programme note ─────────────────────────── */
/* Three words, each played as a gesture: a chord that spreads across every part,
   a rest held under a fermata, and an ostinato that never stops. */
const TRAITS = [{
  word: "Versatile,",
  motif: "chord",
  gloss: "every part of the score: models, voice agents, platforms and design"
}, {
  word: "thoughtful,",
  motif: "rest",
  gloss: "the rests are planned as carefully as the notes"
}, {
  word: "relentless.",
  motif: "ostinato",
  gloss: "keeps the beat through releases, incidents and client calls"
}];
const MOTIF_LINES = [16, 24, 32, 40, 48];
function Motif({
  kind
}) {
  const staff = MOTIF_LINES.map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    className: "mo-st",
    pathLength: "1",
    x1: "0",
    x2: "200",
    y1: y,
    y2: y
  }));
  if (kind === "chord") {
    const ps = [0, 2, 4, 6, 8];
    return /*#__PURE__*/React.createElement("svg", {
      className: "motif motif-chord",
      viewBox: "0 0 200 64",
      "aria-hidden": "true"
    }, staff, /*#__PURE__*/React.createElement("path", {
      className: "mo-arp",
      pathLength: "1",
      d: "M76 50c-4-3 4-5 0-8s4-5 0-8 4-5 0-8 4-5 0-8"
    }), ps.map((p, k) => /*#__PURE__*/React.createElement("g", {
      key: p,
      className: "mo-n",
      style: {
        "--k": k
      }
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "100",
      cy: 48 - p * 4,
      rx: "5.4",
      ry: "3.8",
      transform: `rotate(-22 100 ${48 - p * 4})`
    }))), /*#__PURE__*/React.createElement("line", {
      className: "mo-stem",
      x1: "105",
      x2: "105",
      y1: "48",
      y2: "4"
    }));
  }
  if (kind === "rest") {
    return /*#__PURE__*/React.createElement("svg", {
      className: "motif motif-rest",
      viewBox: "0 0 200 64",
      "aria-hidden": "true"
    }, staff, /*#__PURE__*/React.createElement("path", {
      className: "mo-rest",
      d: "M95 18l8 9-6 7 8 9c-6-3-10 1-5 7-8-4-8-10-1-10l-8-9 6-6z"
    }), /*#__PURE__*/React.createElement("g", {
      className: "mo-fermata"
    }, /*#__PURE__*/React.createElement(Fermata, {
      x: 100,
      y: 10,
      s: 1.1
    })), /*#__PURE__*/React.createElement("path", {
      className: "mo-breath",
      d: "M140 12c3 0 4 3 2 6"
    }));
  }
  // ostinato: beamed pairs of eighths, marching left without end
  const pairs = [];
  for (let i = 0; i < 7; i++) {
    const x = i * 40;
    pairs.push(/*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: x + 8,
      cy: "40",
      rx: "5",
      ry: "3.6",
      transform: `rotate(-22 ${x + 8} 40)`
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: x + 28,
      cy: "36",
      rx: "5",
      ry: "3.6",
      transform: `rotate(-22 ${x + 28} 36)`
    }), /*#__PURE__*/React.createElement("line", {
      className: "mo-stem",
      x1: x + 12.6,
      x2: x + 12.6,
      y1: "40",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      className: "mo-stem",
      x1: x + 32.6,
      x2: x + 32.6,
      y1: "36",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      className: "mo-beam",
      d: `M${x + 12} 14L${x + 33.4} 10v4.2L${x + 12} 18.2z`
    })));
  }
  return /*#__PURE__*/React.createElement("svg", {
    className: "motif motif-ostinato",
    viewBox: "0 0 200 64",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "ostinato-clip"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "200",
    height: "64"
  }))), staff, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#ostinato-clip)"
  }, /*#__PURE__*/React.createElement("g", {
    className: "mo-march"
  }, pairs)));
}

/* A fact the conductor has marked in pencil */
function Fact({
  children
}) {
  return /*#__PURE__*/React.createElement("strong", {
    className: "fact"
  }, children);
}
const PROGRAMME = [["Roles", "6"], ["IEEE papers", "2"], ["Company", null], ["School", "Vellore Institute of Technology, 2022 – 2026"], ["Based in", "India"]];
function About() {
  const replay = e => {
    const el = e.currentTarget;
    if (!el.classList.contains("is-in")) return;
    el.classList.remove("replay");
    void el.offsetWidth;
    el.classList.add("replay");
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "sect about",
    id: "about",
    "aria-labelledby": "about-title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sr-only",
    id: "about-title"
  }, "Versatile, thoughtful, relentless."), /*#__PURE__*/React.createElement("div", {
    className: "traits"
  }, TRAITS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "trait",
    key: t.word,
    "data-play": true,
    style: {
      "--i": i
    },
    onMouseEnter: replay
  }, /*#__PURE__*/React.createElement("p", {
    className: "trait-word",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null, t.word)), /*#__PURE__*/React.createElement(Motif, {
    kind: t.motif
  }), /*#__PURE__*/React.createElement("p", {
    className: "trait-gloss"
  }, t.gloss)))), /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-copy",
    "data-play": true
  }, /*#__PURE__*/React.createElement("p", null, "I'm a Computer Science graduate of Vellore Institute of Technology, class of 2026. Until September 2026 I was ", /*#__PURE__*/React.createElement(Fact, null, "Associate Technical Lead at Inbotiq"), ", leading", " ", /*#__PURE__*/React.createElement(Fact, null, "a team of four"), " across AI and voice products, from research through deployment. I designed v2 of our voice agent (", /*#__PURE__*/React.createElement(Fact, null, "Vaanee"), "), fine-tuned the LLMs behind Volza's data extraction, and built the platform that ties our agents together."), /*#__PURE__*/React.createElement("p", null, "My work covers the full ML lifecycle, from research and dataset curation to fine-tuning, optimised deployment, and the API layer that makes it usable. I care just as much about conversation and interface design: voice flows, platform UX, and the visual language that holds a product together.")), /*#__PURE__*/React.createElement("aside", {
    className: "programme",
    "aria-label": "At a glance",
    "data-play": true
  }, /*#__PURE__*/React.createElement("dl", {
    className: "programme-rows"
  }, PROGRAMME.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      "--r": i
    }
  }, /*#__PURE__*/React.createElement("dt", null, k), /*#__PURE__*/React.createElement("dd", null, v || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "https://inbotiq.com",
    target: "_blank",
    rel: "noreferrer",
    "data-cursor": "open"
  }, "Inbotiq"), ", to Sep 2026"))))))));
}

/* ─── Practices: three parts, the skills sung as lyrics ── */
const STAFF_YS = [26, 33, 40, 47, 54];
const noteY = p => 54 - p * 3.5;
function StaffLines() {
  return STAFF_YS.map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    className: "st-line",
    pathLength: "1",
    x1: "0",
    x2: "100%",
    y1: y,
    y2: y
  }));
}
function Note({
  pos,
  rhythm
}) {
  const y = noteY(pos);
  const up = pos < 4;
  const stemX = up ? 4.4 : -4.4;
  const stemEnd = up ? y - 24 : y + 24;
  const ledgers = [];
  if (pos < -1) for (let p = -2; p >= pos; p -= 2) ledgers.push(noteY(p));
  if (pos > 9) for (let p = 10; p <= pos; p += 2) ledgers.push(noteY(p));
  return /*#__PURE__*/React.createElement("svg", {
    className: "note-svg",
    width: "100%",
    height: "72",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(StaffLines, null), /*#__PURE__*/React.createElement("svg", {
    x: "50%",
    y: "0",
    width: "1",
    height: "72",
    overflow: "visible"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "ripple",
    cx: "0",
    cy: y,
    r: "6"
  }), /*#__PURE__*/React.createElement("g", {
    className: "note"
  }, ledgers.map(ly => /*#__PURE__*/React.createElement("line", {
    key: ly,
    className: "ledger-line",
    x1: "-8",
    x2: "8",
    y1: ly,
    y2: ly
  })), /*#__PURE__*/React.createElement("ellipse", {
    className: rhythm === "half" ? "nh nh-open" : "nh",
    cx: "0",
    cy: y,
    rx: "4.6",
    ry: "3.3",
    transform: `rotate(-22 0 ${y})`
  }), /*#__PURE__*/React.createElement("line", {
    className: "stem",
    x1: stemX,
    x2: stemX,
    y1: y,
    y2: stemEnd
  }), rhythm === "eighth" && (up ? /*#__PURE__*/React.createElement("path", {
    className: "flag",
    d: `M${stemX} ${stemEnd}c1 5 8 7 7 15c-.5-5-4-8-7-9Z`
  }) : /*#__PURE__*/React.createElement("path", {
    className: "flag",
    d: `M${stemX} ${stemEnd}c1-5 8-7 7-15c-.5 5-4 8-7 9Z`
  })))));
}

/* How many notes fit on one system at the current width */
function useNotesPerSystem() {
  const pick = () => window.matchMedia("(max-width: 640px)").matches ? 3 : window.matchMedia("(max-width: 1024px)").matches ? 4 : 99;
  const [n, setN] = useState(pick);
  useEffect(() => {
    const onResize = () => setN(pick());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return n;
}
const BEAT_MS = {
  half: 900,
  quarter: 600,
  eighth: 380
};
function WhatIDo() {
  const perSystem = useNotesPerSystem();
  const sectRef = useRef(null);

  // Each part plays its own tune while it is on screen: a pencil playhead moves
  // from note to note, each note is struck, and its lyric (the skill) lights up.
  // Planning moves in half notes, building in quick eighths, design in quarters.
  useEffect(() => {
    const root = sectRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const players = [...root.querySelectorAll(".staves")].map(st => ({
      st,
      beat: +st.dataset.beat,
      notes: [...st.querySelectorAll(".staff-note")],
      cur: -1,
      visible: false,
      t0: 0
    }));
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      const p = players.find(x => x.st === e.target);
      if (!p) return;
      if (e.isIntersecting && !p.visible) p.t0 = performance.now() + 1400; // after the staves draw
      p.visible = e.isIntersecting;
    }), {
      threshold: 0.35
    });
    players.forEach(p => io.observe(p.st));
    let raf;
    const loop = now => {
      raf = requestAnimationFrame(loop);
      players.forEach(p => {
        if (!p.visible || !p.st.classList.contains("is-in") || !p.notes.length || now < p.t0) return;
        // one pass through the tune, then two beats of rest before it starts again
        const i = Math.floor((now - p.t0) / p.beat) % (p.notes.length + 2);
        if (i === p.cur) return;
        if (p.cur >= 0 && p.notes[p.cur]) p.notes[p.cur].classList.remove("is-playing");
        p.cur = i;
        const cell = p.notes[i];
        p.st.querySelectorAll(".row-head.on").forEach(h => h.classList.remove("on"));
        if (!cell) return;
        cell.classList.add("is-playing");
        const head = cell.parentElement.querySelector(".row-head");
        if (head) {
          head.style.transform = `translateX(${(cell.offsetLeft + cell.offsetWidth / 2).toFixed(1)}px)`;
          head.classList.add("on");
        }
      });
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [perSystem]);
  return /*#__PURE__*/React.createElement("section", {
    className: "sect practices",
    "aria-labelledby": "practices-title",
    ref: sectRef
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    id: "practices-title",
    "data-words": true
  }, /*#__PURE__*/React.createElement(Words, {
    text: "Three practices."
  })), /*#__PURE__*/React.createElement("div", {
    className: "parts"
  }, WHAT_I_DO.map((c, i) => {
    // Wrapped lines become new systems: each opens with a clef and closes with a barline
    const systems = [];
    for (let j = 0; j < c.tags.length; j += perSystem) systems.push(c.tags.slice(j, j + perSystem).map((t, k) => [t, j + k]));
    return /*#__PURE__*/React.createElement("article", {
      className: "part",
      key: c.title
    }, /*#__PURE__*/React.createElement("div", {
      className: "part-head",
      "data-play": true
    }, /*#__PURE__*/React.createElement("h3", {
      className: "part-name",
      "aria-label": c.title
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, [...c.title].map((ch, k) => /*#__PURE__*/React.createElement("span", {
      className: "ch",
      key: k,
      style: {
        "--l": k
      }
    }, ch)))), /*#__PURE__*/React.createElement("p", {
      className: "part-desc"
    }, c.desc)), /*#__PURE__*/React.createElement("ul", {
      className: "sr-only",
      "aria-label": `${c.title}: skills and tools`
    }, c.tags.map(t => /*#__PURE__*/React.createElement("li", {
      key: t
    }, t))), /*#__PURE__*/React.createElement("div", {
      className: "staves",
      "aria-hidden": "true",
      "data-play": true,
      "data-beat": BEAT_MS[c.rhythm]
    }, systems.map((sys, si) => /*#__PURE__*/React.createElement("div", {
      className: "staff-row",
      key: si
    }, /*#__PURE__*/React.createElement("span", {
      className: "row-head"
    }), /*#__PURE__*/React.createElement("div", {
      className: "staff-cell staff-clef",
      style: {
        "--c": 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: "72"
    }, /*#__PURE__*/React.createElement(StaffLines, null)), /*#__PURE__*/React.createElement("span", {
      className: "clef"
    }, "\u{1D11E}")), sys.map(([t, idx], ci) => /*#__PURE__*/React.createElement("div", {
      className: "staff-cell staff-note",
      key: t,
      style: {
        "--c": ci + 1
      }
    }, /*#__PURE__*/React.createElement(Note, {
      pos: c.pitches[idx % c.pitches.length],
      rhythm: c.rhythm
    }), /*#__PURE__*/React.createElement("span", {
      className: "lyric"
    }, t))), /*#__PURE__*/React.createElement("div", {
      className: "staff-cell staff-end",
      style: {
        "--c": sys.length + 1
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: "72"
    }, /*#__PURE__*/React.createElement(StaffLines, null), si === systems.length - 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      className: "st-bar",
      x1: "3",
      x2: "3",
      y1: "26",
      y2: "54"
    }), /*#__PURE__*/React.createElement("line", {
      className: "st-bar-final",
      x1: "9",
      x2: "9",
      y1: "26",
      y2: "54"
    })) : /*#__PURE__*/React.createElement("line", {
      className: "st-bar",
      x1: "11",
      x2: "11",
      y1: "26",
      y2: "54"
    })))))));
  })));
}

/* ─── Career: each role a rehearsal mark ────────────────── */
/* A short tune per role on its staff: about one note for every two months */
const MOTIFS = [[2, 4, 3], [1, 3, 2, 4, 3, 5], [4, 6], [2, 3, 5, 4], [3, 5, 4, 6, 5], [2, 4, 6, 8, 6, 4, 6, 8]];
function Career() {
  const itemsRef = useRef([]);
  const nowRef = useRef(null);
  const [cur, setCur] = useState(0);
  // hovering a role plays its tune again
  const replay = e => {
    const el = e.currentTarget;
    if (!el.classList.contains("is-in")) return;
    el.classList.remove("replay");
    void el.offsetWidth;
    el.classList.add("replay");
  };
  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    // The conductor's place: a rehearsal mark stamps in pencil once you reach it,
    // and the large mark on the stand turns to it
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 58%",
        onEnter: () => {
          el.classList.add("lit");
          setCur(i);
        },
        onLeaveBack: () => {
          el.classList.remove("lit");
          setCur(Math.max(0, i - 1));
        }
      });
    });
  }, []);

  // restart the page-turn on the large mark each time it changes
  useEffect(() => {
    const el = nowRef.current;
    if (!el) return;
    el.classList.remove("turn");
    void el.offsetWidth;
    el.classList.add("turn");
  }, [cur]);
  const now = CAREER[cur];
  return /*#__PURE__*/React.createElement("section", {
    className: "sect career",
    id: "career",
    "aria-labelledby": "career-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    id: "career-title",
    "data-words": true
  }, /*#__PURE__*/React.createElement(Words, {
    text: "Six roles, 2023 \u2013 2026."
  })), /*#__PURE__*/React.createElement("p", {
    className: "sect-sub",
    "data-reveal": true
  }, "From content internships to leading AI engineering, with two IEEE papers along the way.")), /*#__PURE__*/React.createElement("div", {
    className: "score"
  }, /*#__PURE__*/React.createElement("div", {
    className: "score-now",
    "aria-hidden": "true",
    ref: nowRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "sn-box"
  }, /*#__PURE__*/React.createElement("span", null, "ABCDEF"[cur]), /*#__PURE__*/React.createElement("svg", {
    className: "sn-ring",
    viewBox: "0 0 60 60",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M45 7C31 1 8 7 5 28s17 29 33 27 19-13 17-27S39 5 26 8",
    pathLength: "1"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "sn-year"
  }, now.year), /*#__PURE__*/React.createElement("p", {
    className: "sn-org"
  }, now.org), /*#__PURE__*/React.createElement("p", {
    className: "sn-count"
  }, cur + 1, " of ", CAREER.length)), /*#__PURE__*/React.createElement("ol", {
    className: "career-list"
  }, CAREER.map((c, i) => {
    const last = i === CAREER.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      className: `career-item${c.promoted ? " is-promoted" : ""}${last ? " is-last" : ""}`,
      key: i,
      ref: el => itemsRef.current[i] = el,
      "data-play": true,
      onMouseEnter: replay
    }, /*#__PURE__*/React.createElement("svg", {
      className: "ci-staff",
      viewBox: "0 0 100 17",
      preserveAspectRatio: "none",
      "aria-hidden": "true"
    }, [0.5, 4.5, 8.5, 12.5, 16.5].map(y => /*#__PURE__*/React.createElement("line", {
      key: y,
      pathLength: "1",
      x1: "0",
      x2: "100",
      y1: y,
      y2: y
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ci-motif",
      "aria-hidden": "true"
    }, MOTIFS[i].map((pitch, n) => {
      const t = (n + 1) / (MOTIFS[i].length + 1);
      const cls = `ci-n ${pitch < 4 ? "up" : "down"}${n === MOTIFS[i].length - 1 ? " half" : ""}`;
      return /*#__PURE__*/React.createElement("span", {
        key: n,
        className: cls,
        style: {
          left: `${(t * 100).toFixed(2)}%`,
          top: `${16.5 - pitch * 2}px`,
          "--t": t.toFixed(3)
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "h"
      }));
    }), /*#__PURE__*/React.createElement("span", {
      className: "ci-play"
    })), c.promoted && /*#__PURE__*/React.createElement("span", {
      className: "ci-double",
      "aria-hidden": "true"
    }), last && /*#__PURE__*/React.createElement("svg", {
      className: "ci-final",
      viewBox: "0 0 30 40",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(Fermata, {
      x: 20,
      y: 10,
      s: 0.7
    }), /*#__PURE__*/React.createElement("rect", {
      className: "thin",
      x: "14",
      y: "16.5",
      width: "1.2",
      height: "17"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.5",
      y: "16.5",
      width: "3.6",
      height: "17"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ci-mark",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ci-letter"
    }, "ABCDEF"[i], /*#__PURE__*/React.createElement("svg", {
      className: "ci-ring",
      viewBox: "0 0 60 60",
      preserveAspectRatio: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M45 7C31 1 8 7 5 28s17 29 33 27 19-13 17-27S39 5 26 8",
      pathLength: "1"
    }))), /*#__PURE__*/React.createElement("span", {
      className: "ci-year"
    }, c.year)), /*#__PURE__*/React.createElement("div", {
      className: "ci-meta"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "ci-role"
    }, /*#__PURE__*/React.createElement("span", null, c.role)), /*#__PURE__*/React.createElement("p", {
      className: "ci-period"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ci-org"
    }, c.org), " \xB7 ", c.period, c.promoted && /*#__PURE__*/React.createElement("span", {
      className: "ci-promo"
    }, "Promoted", /*#__PURE__*/React.createElement("svg", {
      className: "pen-line",
      viewBox: "0 0 100 10",
      preserveAspectRatio: "none",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: PEN_PATH,
      pathLength: "1"
    })))), c.hl && /*#__PURE__*/React.createElement("p", {
      className: "ci-highlight"
    }, /*#__PURE__*/React.createElement("b", {
      "data-count": c.hl.v
    }, c.hl.v), " ", /*#__PURE__*/React.createElement("i", null, c.hl.l)), c.clients && /*#__PURE__*/React.createElement("a", {
      className: "ci-clients",
      href: "#clients",
      "data-cursor": "see",
      onClick: e => {
        e.preventDefault();
        scrollToId("clients");
      }
    }, /*#__PURE__*/React.createElement("span", null, "Clients"), /*#__PURE__*/React.createElement("img", {
      src: "clients/volza-on-light.webp",
      alt: "Volza",
      width: "42",
      height: "15"
    }), /*#__PURE__*/React.createElement("img", {
      className: "ci-clients-tile",
      src: "clients/artium-academy.webp",
      alt: "Artium Academy",
      width: "18",
      height: "18"
    }))), /*#__PURE__*/React.createElement("p", {
      className: "ci-body"
    }, c.body));
  }))));
}

/* ─── Clients: two commissions, each lit in its own colour ── */
function Clients() {
  const listRef = useRef(null);
  useEffect(() => {
    const list = listRef.current;
    if (!list || !window.matchMedia("(hover: hover)").matches) return;
    const rows = [...list.querySelectorAll(".client-row")];
    const offs = rows.map(row => {
      const onMove = e => {
        const r = row.getBoundingClientRect();
        row.style.setProperty("--gx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
        row.style.setProperty("--gy", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
      };
      row.addEventListener("mousemove", onMove);
      return () => row.removeEventListener("mousemove", onMove);
    });
    return () => offs.forEach(off => off());
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "sect clients",
    id: "clients",
    "aria-labelledby": "clients-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    id: "clients-title",
    "data-words": true
  }, /*#__PURE__*/React.createElement(Words, {
    text: "Clients I've delivered for."
  })), /*#__PURE__*/React.createElement("p", {
    className: "sect-sub",
    "data-reveal": true
  }, "Two long-running engagements from my time at Inbotiq, one in data and one in voice.")), /*#__PURE__*/React.createElement("ul", {
    className: "client-list",
    ref: listRef
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement("li", {
    className: "client-row",
    key: c.id,
    style: {
      "--brand": c.brand
    },
    "data-cursor": "visit",
    "data-play": true
  }, /*#__PURE__*/React.createElement("div", {
    className: `client-logo${c.logo.tile ? " is-tile" : ""}`
  }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
    srcSet: c.logo.webp,
    type: "image/webp"
  }), /*#__PURE__*/React.createElement("img", {
    src: c.logo.png,
    alt: "",
    width: c.logo.w,
    height: c.logo.h,
    loading: "lazy",
    decoding: "async"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "client-about"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "client-name"
  }, /*#__PURE__*/React.createElement("a", {
    className: "client-link",
    href: c.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "client-name-t"
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, " (opens their website in a new tab)"))), /*#__PURE__*/React.createElement("p", {
    className: "client-what"
  }, c.what)), /*#__PURE__*/React.createElement("p", {
    className: "client-did"
  }, c.did), /*#__PURE__*/React.createElement("ul", {
    className: "client-facts"
  }, c.facts.map(([v, l]) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("b", {
    "data-count": v
  }, v), /*#__PURE__*/React.createElement("i", null, l)))), /*#__PURE__*/React.createElement("span", {
    className: "client-go",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(IconArrow, {
    size: 18
  }))))));
}

/* ─── Work: score pages on a pinned stand ──────────────── */
function Work() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const curRef = useRef(null);
  useEffect(() => {
    if (!outerRef.current || !trackRef.current) return;
    if (!window.gsap || !window.ScrollTrigger) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // The horizontal pin exists only at desktop widths; matchMedia tears it down
    // (and clears the track transform) when the viewport drops to <=1024px.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const track = trackRef.current;
      const pages = [...track.querySelectorAll(".work-page")];
      const imgs = pages.map(p => p.querySelector(".wp-figure img"));
      const distance = track.scrollWidth - window.innerWidth;
      // Pages turn on the stand: turned away as they come in from the right,
      // flat at the centre, turned the other way as they leave
      const staff = outerRef.current.querySelector(".work-staff");
      const turn = (prog = 0) => {
        const vw = window.innerWidth;
        let best = 0,
          bestD = Infinity;
        pages.forEach((page, i) => {
          const r = page.getBoundingClientRect();
          const c = Math.max(-1.2, Math.min(1.2, (r.left + r.width / 2 - vw / 2) / vw));
          if (Math.abs(c) < bestD) {
            bestD = Math.abs(c);
            best = i;
          }
          if (reduce) return;
          page.style.transform = `perspective(1600px) rotateY(${(-c * 14).toFixed(2)}deg) translateZ(${(-Math.abs(c) * 50).toFixed(1)}px)`;
          if (imgs[i]) imgs[i].style.transform = `translateX(${(-c * 7).toFixed(2)}%) scale(1.12)`;
        });
        pages.forEach((page, i) => page.classList.toggle("is-current", i === best));
        if (curRef.current) curRef.current.textContent = String(best + 1);
        if (staff && !reduce) staff.style.transform = `translate3d(${(-prog * distance * 0.35).toFixed(1)}px,0,0)`;
      };
      // the stand keeps gliding after the scroll stops (scrub), so the lift, the
      // counter and the ruler follow the stand's own frames, not the scroll events
      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        onUpdate: function () {
          const p = this.progress();
          if (progressRef.current) progressRef.current.style.setProperty("--p", (p * 100).toFixed(2) + "%");
          turn(p);
        },
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: () => "+=" + distance,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
      turn();
      return () => {
        tween.kill();
        pages.forEach(p => {
          p.style.transform = "";
          p.classList.remove("is-current");
        });
        imgs.forEach(im => {
          if (im) im.style.transform = "";
        });
      };
    });
    return () => mm.revert();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "work-sect",
    id: "work",
    ref: outerRef,
    "aria-labelledby": "work-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-pin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    id: "work-title",
    "data-words": true
  }, /*#__PURE__*/React.createElement(Words, {
    text: "Recent builds."
  })), /*#__PURE__*/React.createElement("p", {
    className: "sect-sub",
    "data-reveal": true
  }, "Selected projects, 2023 \u2013 2026.", /*#__PURE__*/React.createElement("span", {
    className: "desk-only"
  }, " Scroll to turn the pages."))), /*#__PURE__*/React.createElement("div", {
    className: "work-progress",
    ref: progressRef,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("p", {
    className: "work-counter"
  }, /*#__PURE__*/React.createElement("i", null, "page"), " ", /*#__PURE__*/React.createElement("span", {
    ref: curRef
  }, "1"), " ", /*#__PURE__*/React.createElement("i", null, "of"), " ", PROJECTS.length), /*#__PURE__*/React.createElement("div", {
    className: "work-ruler"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 17",
    preserveAspectRatio: "none"
  }, [0.5, 4.5, 8.5, 12.5, 16.5].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    x2: "100",
    y1: y,
    y2: y
  })), [0.5, 25, 50, 75, 99.5].map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    className: "bar",
    x1: x,
    x2: x,
    y1: "0.5",
    y2: "16.5"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "work-playhead"
  })))), /*#__PURE__*/React.createElement("svg", {
    className: "work-staff",
    viewBox: "0 0 3000 240",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, [40, 90, 140, 190, 240].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    x2: "3000",
    y1: y - 20,
    y2: y - 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "work-track",
    ref: trackRef
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement("article", {
    className: `work-page${p.stock ? " is-stock" : ""}`,
    key: p.n
  }, /*#__PURE__*/React.createElement("header", {
    className: "wp-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "wp-name"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "wp-cat"
  }, p.category)), /*#__PURE__*/React.createElement("div", {
    className: "wp-figure"
  }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
    srcSet: p.image.replace(/\.png$/, ".webp"),
    type: "image/webp"
  }), /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.alt,
    loading: "eager",
    decoding: "async"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wp-body"
  }, p.highlight && /*#__PURE__*/React.createElement("p", {
    className: "wp-stat"
  }, /*#__PURE__*/React.createElement("b", null, p.highlight.v), " ", /*#__PURE__*/React.createElement("i", null, p.highlight.l)), /*#__PURE__*/React.createElement("p", {
    className: "wp-desc"
  }, p.desc), /*#__PURE__*/React.createElement("p", {
    className: "wp-stack"
  }, /*#__PURE__*/React.createElement("i", null, "Scored for"), " ", p.stack), /*#__PURE__*/React.createElement("div", {
    className: "wp-actions"
  }, p.github && /*#__PURE__*/React.createElement("a", {
    className: "wp-action",
    href: p.github,
    target: "_blank",
    rel: "noreferrer",
    "data-cursor": "open"
  }, "GitHub ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 14
  })), p.demo && /*#__PURE__*/React.createElement("a", {
    className: "wp-action",
    href: p.demo,
    target: "_blank",
    rel: "noreferrer",
    "data-cursor": "open"
  }, "Live demo ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 14
  })), p.pub && /*#__PURE__*/React.createElement("a", {
    className: "wp-action",
    href: p.pub,
    target: "_blank",
    rel: "noreferrer",
    "data-cursor": "open"
  }, "IEEE paper ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 14
  })))), /*#__PURE__*/React.createElement("p", {
    className: "wp-folio",
    "aria-hidden": "true"
  }, i + 1))))));
}

/* ─── Certifications: a credit line that runs with your scroll ── */
function Certs() {
  const trackRef = useRef(null);
  const boxRef = useRef(null);
  useEffect(() => {
    const track = trackRef.current,
      box = boxRef.current;
    if (!track || !box || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf,
      x = 0,
      last = performance.now(),
      speed = 60,
      dir = 1,
      hover = false,
      visible = true;
    const set = track.firstElementChild;
    const io = new IntersectionObserver(e => {
      visible = e[0].isIntersecting;
    }, {
      threshold: 0
    });
    io.observe(box);
    const enter = () => {
        hover = true;
      },
      leave = () => {
        hover = false;
      };
    box.addEventListener("mouseenter", enter);
    box.addEventListener("mouseleave", leave);
    const loop = now => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!visible) return;
      // scrolling pushes the line along, and scrolling up turns it around
      const v = window.__lenis ? window.__lenis.velocity : 0;
      if (Math.abs(v) > 0.5) dir = v > 0 ? 1 : -1;
      const target = hover ? 0 : 60 + Math.min(900, Math.abs(v) * 40);
      speed += (target - speed) * Math.min(1, dt * 4);
      x -= dir * speed * dt;
      const wSet = set.offsetWidth;
      if (x <= -wSet) x += wSet;
      if (x > 0) x -= wSet;
      track.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      box.removeEventListener("mouseenter", enter);
      box.removeEventListener("mouseleave", leave);
    };
  }, []);
  const run = [...CERT_PROVIDERS, ...CERT_PROVIDERS];
  return /*#__PURE__*/React.createElement("section", {
    className: "certs",
    "aria-labelledby": "certs-title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "certs-title",
    id: "certs-title"
  }, "Certifications and training"), /*#__PURE__*/React.createElement("ul", {
    className: "sr-only"
  }, CERT_PROVIDERS.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "ticker",
    ref: boxRef,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-track",
    ref: trackRef
  }, [0, 1].map(copy => /*#__PURE__*/React.createElement("div", {
    className: "ticker-set",
    key: copy
  }, run.map((c, i) => /*#__PURE__*/React.createElement("span", {
    className: "tk",
    key: i
  }, /*#__PURE__*/React.createElement(IconCheck, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "tk-name"
  }, c), /*#__PURE__*/React.createElement("span", {
    className: "tk-bar"
  }))))))));
}

/* ─── Contact: the closing section ─────────────────────── */
/* The closing phrase: the headline sung as lyrics under a rising line that
   settles on a held last note, a fermata, and the final barline. */
const CADENCE = [[70, 3, "Let's"], [150, 5, "build"], [230, 4, "to -"], [310, 6, "geth -"], [410, 8, "er."]];
const cadY = p => 150 - p * 6;
function Cadence() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "cadence",
    viewBox: "0 0 520 250",
    "data-play": true,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("text", {
    className: "cad-mark",
    x: "30",
    y: "66"
  }, "broadening, then held"), [102, 114, 126, 138, 150].map((y, i) => /*#__PURE__*/React.createElement("line", {
    key: y,
    className: "cad-st",
    pathLength: "1",
    x1: "20",
    x2: "496",
    y1: y,
    y2: y,
    style: {
      "--k": i
    }
  })), /*#__PURE__*/React.createElement("line", {
    className: "cad-bar",
    x1: "20",
    x2: "20",
    y1: "102",
    y2: "150"
  }), CADENCE.map(([x, p, syl], k) => {
    const y = cadY(p),
      last = k === CADENCE.length - 1,
      up = p < 4;
    return /*#__PURE__*/React.createElement("g", {
      key: k,
      className: "cad-n",
      style: {
        "--k": k
      }
    }, p >= 10 && /*#__PURE__*/React.createElement("line", {
      className: "cad-ledger",
      x1: x - 11,
      x2: x + 11,
      y1: cadY(10),
      y2: cadY(10)
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: x,
      cy: y,
      rx: last ? 8 : 7,
      ry: last ? 5.4 : 4.9,
      transform: `rotate(-22 ${x} ${y})`,
      className: last ? "open" : ""
    }), !last && /*#__PURE__*/React.createElement("line", {
      className: "cad-stem",
      x1: up ? x + 6.4 : x - 6.4,
      x2: up ? x + 6.4 : x - 6.4,
      y1: y,
      y2: up ? y - 38 : y + 38
    }), /*#__PURE__*/React.createElement("text", {
      className: "cad-syl",
      x: x,
      y: "196",
      textAnchor: "middle"
    }, syl));
  }), /*#__PURE__*/React.createElement("g", {
    className: "cad-fermata"
  }, /*#__PURE__*/React.createElement(Fermata, {
    x: 410,
    y: cadY(8) - 20,
    s: 1.3
  })), /*#__PURE__*/React.createElement("rect", {
    className: "cad-thin",
    x: "480",
    y: "102",
    width: "2",
    height: "48"
  }), /*#__PURE__*/React.createElement("rect", {
    className: "cad-thick",
    x: "487",
    y: "102",
    width: "7",
    height: "48"
  }), /*#__PURE__*/React.createElement("text", {
    className: "cad-end",
    x: "490",
    y: "176",
    textAnchor: "middle"
  }, "End"), /*#__PURE__*/React.createElement("g", {
    className: "cad-head"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    x2: "20",
    y1: "94",
    y2: "158"
  })));
}
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    className: "coda",
    id: "contact",
    "aria-labelledby": "contact-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "coda-top",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "coda-staff",
    viewBox: "0 0 1000 60",
    preserveAspectRatio: "none"
  }, [20, 26, 32, 38, 44].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    x2: "1000",
    y1: y,
    y2: y
  }))), /*#__PURE__*/React.createElement("svg", {
    className: "coda-sign",
    viewBox: "0 0 40 40"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20",
    cy: "20",
    rx: "10",
    ry: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    x2: "20",
    y1: "1",
    y2: "39"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    x2: "37",
    y1: "20",
    y2: "20"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "coda-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "coda-copy"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "coda-headline",
    id: "contact-title",
    "data-words": true
  }, /*#__PURE__*/React.createElement(Words, {
    text: "Let's build together."
  })), /*#__PURE__*/React.createElement("p", {
    className: "coda-sub",
    "data-reveal": true
  }, "Say hello about AI, voice or product work."), /*#__PURE__*/React.createElement("div", {
    className: "coda-actions",
    "data-reveal": true
  }, /*#__PURE__*/React.createElement(Magnetic, {
    strength: 0.2
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn-pencil btn-xl",
    href: `mailto:${PROFILE.email}`,
    "data-cursor": "email"
  }, PROFILE.email, " ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "coda-links"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn-line",
    href: PROFILE.github,
    target: "_blank",
    rel: "noreferrer",
    "data-cursor": "open"
  }, "GitHub ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn-line",
    href: PROFILE.linkedin,
    target: "_blank",
    rel: "noreferrer",
    "data-cursor": "open"
  }, "LinkedIn ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement(Cadence, null)), /*#__PURE__*/React.createElement("footer", {
    className: "coda-footer"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2026 Sri Rahul Namana \xB7 Built with React, GSAP and Three.js"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ft-totop",
    "data-cursor": "back to top",
    "aria-label": "Back to top",
    onClick: () => {
      if (window.__lenis) window.__lenis.scrollTo(0, {
        duration: 1.6
      });else window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, "Back to top ", /*#__PURE__*/React.createElement(IconUp, null))));
}

/* ─── Lenis + GSAP setup ──────────────────────────────── */
function useLenisAndGSAP() {
  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger || !window.Lenis) {
      console.warn("[init] gsap/ScrollTrigger/Lenis missing — skipping smooth scroll setup");
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    // Drive Lenis with its own rAF loop — piping it through gsap.ticker leaves
    // ScrollTrigger tweens stuck at progress 0.
    let rafId;
    const raf = time => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

/* Reveals. [data-reveal] blocks are scanned in by the conductor's blue bar line;
   [data-play] elements only get .is-in, and their CSS plays their own entrance
   (staves drawing, notes struck, leaders ruled). Content is visible by default:
   the hidden start states only apply once this hook marks the page, and never
   under reduced motion. */
function useSweepReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("js-reveal");
    // A position check, not IntersectionObserver: Chromium clips the target by
    // its own clip-path, so a block that starts clipped never "intersects".
    let pending = [];
    const collect = () => {
      pending = [...document.querySelectorAll("[data-reveal]:not(.is-in), [data-play]:not(.is-in)")];
    };
    const check = () => {
      if (!pending.length) return;
      const line = window.innerHeight * 0.88;
      pending = pending.filter(el => {
        if (el.getBoundingClientRect().top < line) {
          el.classList.add("is-in");
          return false;
        }
        return true;
      });
    };
    collect();
    check();
    window.addEventListener("scroll", check, {
      passive: true
    });
    window.addEventListener("resize", check);
    const mo = new MutationObserver(() => {
      collect();
      check();
    });
    mo.observe(document.getElementById("root"), {
      childList: true,
      subtree: true
    });
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      mo.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}

/* Scroll-linked motion that needs GSAP: headings ink in word by word, and the
   clients' numbers count up the first time their row arrives. */
function useScoreMotion(ready) {
  useEffect(() => {
    if (!ready || !window.gsap || !window.ScrollTrigger) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      document.querySelectorAll("[data-words]").forEach(el => {
        gsap.fromTo(el.querySelectorAll(".wi"), {
          opacity: 0.12,
          yPercent: 42,
          rotate: 4
        }, {
          opacity: 1,
          yPercent: 0,
          rotate: 0,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 94%",
            end: "top 58%",
            scrub: 0.6
          }
        });
      });
      const mm = gsap.matchMedia();
      // About: the three words are pinned and played one at a time as you scroll
      mm.add("(min-width: 1025px)", () => {
        const traits = document.querySelector(".traits");
        if (!traits) return;
        const rows = [...traits.querySelectorAll(".trait")];
        let last = -1;
        const setStep = idx => {
          if (idx === last) return;
          last = idx;
          traits.classList.toggle("is-stepping", idx >= 0 && idx < rows.length);
          rows.forEach((r, i) => r.classList.toggle("is-active", i === idx));
          const row = rows[idx];
          if (row) {
            row.classList.remove("replay");
            void row.offsetWidth;
            row.classList.add("replay");
          }
        };
        const st = ScrollTrigger.create({
          // this pin sits above the Career and Work triggers but is created after them,
          // so it must be measured first or everything below it starts too early
          trigger: traits,
          start: "top 16%",
          end: "+=140%",
          pin: true,
          scrub: true,
          refreshPriority: 2,
          onUpdate: self => setStep(self.progress >= 0.96 ? rows.length : Math.min(rows.length - 1, Math.floor(self.progress * rows.length))),
          onLeaveBack: () => setStep(-1)
        });
        return () => {
          st.kill();
          setStep(-1);
        };
      });
      // Practices: each staff slides in from the right, like score paper advancing
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wide = window.innerWidth > 1024;
        document.querySelectorAll(".practices .staves").forEach(st => {
          gsap.fromTo(st, {
            x: wide ? 160 : 60
          }, {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: st,
              start: "top bottom",
              end: "top 78%",
              scrub: 0.4
            }
          });
        });
      });
      // Clients (desktop): the commissions stack like pages laid on a stand. Each
      // sheet pins, the next slides up over it, and the one beneath settles back.
      mm.add("(min-width: 1025px)", () => {
        const rows = [...document.querySelectorAll(".client-row")];
        if (!rows.length) return;
        rows[0].classList.add("is-top");
        const tweens = rows.slice(1).map((next, k) => {
          const prev = rows[k];
          return gsap.fromTo(prev, {
            scale: 1,
            "--dim": 0
          }, {
            scale: 0.94,
            "--dim": 1,
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: "top 130px",
              scrub: true,
              onUpdate: self => {
                const over = self.progress > 0.55;
                prev.classList.toggle("is-top", !over);
                next.classList.toggle("is-top", over);
              }
            }
          });
        });
        return () => {
          tweens.forEach(t => {
            t.scrollTrigger && t.scrollTrigger.kill();
            t.kill();
          });
          rows.forEach(r => {
            r.classList.remove("is-top");
            r.style.transform = "";
            r.style.removeProperty("--dim");
          });
        };
      });
      // Clients (phones and tablets): each row's own colour rises as it passes the middle
      mm.add("(max-width: 1024px)", () => {
        const sts = [...document.querySelectorAll(".client-row")].map(row => ScrollTrigger.create({
          trigger: row,
          start: "top bottom",
          end: "bottom top",
          onUpdate: self => row.style.setProperty("--lit", (1 - Math.min(1, Math.abs(self.progress - 0.5) * 2.4)).toFixed(3)),
          onLeave: () => row.style.setProperty("--lit", "0"),
          onLeaveBack: () => row.style.setProperty("--lit", "0")
        }));
        return () => sts.forEach(t => t.kill());
      });
      // Contact: the dark page opens like a curtain as you arrive
      const coda = document.querySelector(".coda");
      if (coda) {
        gsap.fromTo(coda, {
          clipPath: "inset(26% 0% 26% 0%)"
        }, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: coda,
            start: "top bottom",
            end: "top 30%",
            scrub: 0.6
          }
        });
      }
      // re-measure every trigger in page order now that the pins exist
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
      document.querySelectorAll("b[data-count]").forEach(b => {
        const m = b.dataset.count.match(/^(\+?)(\d+)(.*)$/);
        if (!m) return;
        const pre = m[1],
          target = +m[2],
          suffix = m[3],
          obj = {
            v: 0
          };
        b.textContent = pre + "0" + suffix;
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power3.out",
          onUpdate: () => {
            b.textContent = pre + Math.round(obj.v) + suffix;
          },
          scrollTrigger: {
            trigger: b.closest(".client-row, .career-item"),
            start: "top 80%",
            once: true
          }
        });
      });
    });
    return () => {
      ctx.revert();
      const mm = gsap.matchMedia();
      // About: the three words are pinned and played one at a time as you scroll
      mm.add("(min-width: 1025px)", () => {
        const traits = document.querySelector(".traits");
        if (!traits) return;
        const rows = [...traits.querySelectorAll(".trait")];
        let last = -1;
        const setStep = idx => {
          if (idx === last) return;
          last = idx;
          traits.classList.toggle("is-stepping", idx >= 0 && idx < rows.length);
          rows.forEach((r, i) => r.classList.toggle("is-active", i === idx));
          const row = rows[idx];
          if (row) {
            row.classList.remove("replay");
            void row.offsetWidth;
            row.classList.add("replay");
          }
        };
        const st = ScrollTrigger.create({
          // this pin sits above the Career and Work triggers but is created after them,
          // so it must be measured first or everything below it starts too early
          trigger: traits,
          start: "top 16%",
          end: "+=140%",
          pin: true,
          scrub: true,
          refreshPriority: 2,
          onUpdate: self => setStep(self.progress >= 0.96 ? rows.length : Math.min(rows.length - 1, Math.floor(self.progress * rows.length))),
          onLeaveBack: () => setStep(-1)
        });
        return () => {
          st.kill();
          setStep(-1);
        };
      });
      // Practices: each staff slides in from the right, like score paper advancing
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wide = window.innerWidth > 1024;
        document.querySelectorAll(".practices .staves").forEach(st => {
          gsap.fromTo(st, {
            x: wide ? 160 : 60
          }, {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: st,
              start: "top bottom",
              end: "top 78%",
              scrub: 0.4
            }
          });
        });
      });
      // Clients (desktop): the commissions stack like pages laid on a stand. Each
      // sheet pins, the next slides up over it, and the one beneath settles back.
      mm.add("(min-width: 1025px)", () => {
        const rows = [...document.querySelectorAll(".client-row")];
        if (!rows.length) return;
        rows[0].classList.add("is-top");
        const tweens = rows.slice(1).map((next, k) => {
          const prev = rows[k];
          return gsap.fromTo(prev, {
            scale: 1,
            "--dim": 0
          }, {
            scale: 0.94,
            "--dim": 1,
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: "top 130px",
              scrub: true,
              onUpdate: self => {
                const over = self.progress > 0.55;
                prev.classList.toggle("is-top", !over);
                next.classList.toggle("is-top", over);
              }
            }
          });
        });
        return () => {
          tweens.forEach(t => {
            t.scrollTrigger && t.scrollTrigger.kill();
            t.kill();
          });
          rows.forEach(r => {
            r.classList.remove("is-top");
            r.style.transform = "";
            r.style.removeProperty("--dim");
          });
        };
      });
      // Clients (phones and tablets): each row's own colour rises as it passes the middle
      mm.add("(max-width: 1024px)", () => {
        const sts = [...document.querySelectorAll(".client-row")].map(row => ScrollTrigger.create({
          trigger: row,
          start: "top bottom",
          end: "bottom top",
          onUpdate: self => row.style.setProperty("--lit", (1 - Math.min(1, Math.abs(self.progress - 0.5) * 2.4)).toFixed(3)),
          onLeave: () => row.style.setProperty("--lit", "0"),
          onLeaveBack: () => row.style.setProperty("--lit", "0")
        }));
        return () => sts.forEach(t => t.kill());
      });
      // Contact: the dark page opens like a curtain as you arrive
      const coda = document.querySelector(".coda");
      if (coda) {
        gsap.fromTo(coda, {
          clipPath: "inset(26% 0% 26% 0%)"
        }, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: coda,
            start: "top bottom",
            end: "top 30%",
            scrub: 0.6
          }
        });
      }
      document.querySelectorAll("b[data-count]").forEach(b => {
        b.textContent = b.dataset.count;
      });
    };
  }, [ready]);
}

/* ─── Magnetic link helper ─────────────────────────────── */
function Magnetic({
  children,
  strength = 0.35
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    let tx = 0,
      ty = 0,
      targetX = 0,
      targetY = 0,
      raf = null;
    const loop = () => {
      tx += (targetX - tx) * 0.15;
      ty += (targetY - ty) * 0.15;
      el.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
      raf = Math.abs(targetX - tx) + Math.abs(targetY - ty) > 0.05 ? requestAnimationFrame(loop) : null;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onMove = e => {
      const r = el.getBoundingClientRect();
      targetX = (e.clientX - (r.left + r.width / 2)) * strength;
      targetY = (e.clientY - (r.top + r.height / 2)) * strength;
      kick();
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      kick();
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);
  return /*#__PURE__*/React.createElement("span", {
    className: "magnetic",
    ref: ref
  }, children);
}

/* ─── Page progress: the conductor's place in the whole score ── */
function PageProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p.toFixed(4)})`;
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-progress",
    ref: ref,
    "aria-hidden": "true"
  });
}

/* ─── App ─────────────────────────────────────────────── */
function App() {
  const [ready, setReady] = useState(false);
  useLenisAndGSAP();
  useSweepReveal();
  useScoreMotion(ready);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.add("is-ready");
    setTimeout(() => window.ScrollTrigger && ScrollTrigger.refresh(), 200);
  }, [ready]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader, {
    onDone: () => setReady(true)
  }), /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(PageProgress, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Landing, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(WhatIDo, null), /*#__PURE__*/React.createElement(Career, null), /*#__PURE__*/React.createElement(Clients, null), /*#__PURE__*/React.createElement(Work, null), /*#__PURE__*/React.createElement(Certs, null), /*#__PURE__*/React.createElement(Contact, null)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
