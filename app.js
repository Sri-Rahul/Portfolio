/* AUTO-GENERATED from app.jsx by build.js — do not edit directly. */
/* global React, ReactDOM, gsap, ScrollTrigger, Lenis */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ─── Data ─────────────────────────────────────────────── */
const PROFILE = {
  first: "SRI RAHUL",
  last: "NAMANA",
  greet: "Hello, I'm",
  email: "srirahul0301@gmail.com",
  github: "https://github.com/Sri-Rahul",
  linkedin: "https://www.linkedin.com/in/sri-rahul-n/"
};
const WHAT_I_DO = [{
  no: "01",
  title: "Plan",
  desc: "Mapping out the build before any code lands. Researching the approaches, weighing the tradeoffs, picking the right stack, and shaping an architecture that keeps everything downstream simpler.",
  tags: ["Research", "Stack decisions", "Architecture", "Tradeoffs", "Constraints", "Scope", "Prior art"]
}, {
  no: "02",
  title: "Develop",
  desc: "Building production AI products from end to end. Voice agents, full-stack platforms, payment integrations, and the API layer that ties it all together.",
  tags: ["Full-stack", "Next.js", "React", "Node.js", "FastAPI", "Voice agents", "Integrations"]
}, {
  no: "03",
  title: "Design",
  desc: "Interface and conversation design. Voice flows, platform UI, and content systems, plus the wireframes, prototypes, and visual language that turn features into experiences people remember.",
  tags: ["Figma", "UI Design", "Voice / conversation", "Platform UX", "Prototyping", "Content systems"]
}];
const CAREER = [{
  year: "2023",
  role: "Content Writer & PM Intern",
  org: "Thaya Jewels",
  period: "Mar – May 2023",
  hl: {
    v: "+20%",
    l: "Organic search"
  },
  body: "Developed SEO-optimized content and managed product listings. Ran digital marketing campaigns that lifted organic search rankings by 20%."
}, {
  year: "2023",
  role: "Content Editor",
  org: "CSI VITAP Chapter",
  period: "Jan – Dec 2023",
  hl: {
    v: "Reels",
    l: "Video editing"
  },
  body: "Edited videos and Instagram reels for the chapter and produced multimedia in Wondershare Filmora, working with teams across departments through a year of programming."
}, {
  year: "2025",
  role: "AI Intern",
  org: "Edunet Foundation",
  period: "Jan 2025",
  hl: {
    v: "Diffusion",
    l: "ComfyUI · image gen"
  },
  body: "Explored image generation with Stable Diffusion and ComfyUI, fine-tuning diffusion models and refining the prompt engineering to produce high-quality outputs."
}, {
  year: "2025",
  role: "Web Developer Intern",
  org: "Texvo Developers",
  period: "Feb – May 2025",
  hl: {
    v: "Ordering",
    l: "Restaurant system"
  },
  body: "Built a restaurant digital ordering system with kitchen, customer, and waiter dashboards plus order automation, working remotely across PHP, JS, MySQL, and Spring Boot."
}, {
  year: "2025",
  role: "AI Intern",
  org: "Inbotiq",
  period: "May – Nov 2025",
  hl: {
    v: "RAG",
    l: "SEO automation"
  },
  body: "Built the main platform with subscriptions and agent management and designed its database schema from scratch. Shipped a RAG-based SEO workflow on n8n that runs keyword research and auto-publishes blog posts with CTAs to WordPress."
}, {
  year: "NOW",
  role: "Associate Technical Lead",
  org: "Inbotiq",
  period: "Nov 2025 – Present",
  hl: {
    v: "96%+",
    l: "Client-reported accuracy"
  },
  body: "Leading AI and voice products from research to deployment. Delivered Vanee, a node-graph voice agent with author-controlled phases. Deployed a trainable voice model, built and finetuned an LLM from scratch for structured-data extraction at Volza that reached 96%+ client-reported accuracy, and led the Razorpay payment integration on the main platform."
}];
const PROJECTS = [{
  n: "01",
  name: "Retail Automation",
  category: "Computer Vision · 2024",
  desc: "A retail solution that reimagines checkout using face recognition and object detection.",
  stack: "OpenCV, InsightFace, TensorFlow, Python, Flask",
  placeholder: "RETAIL · CV PIPELINE",
  image: "projects/automated-shopping.png",
  highlight: {
    v: "CV",
    l: "Pipeline"
  },
  github: null,
  demo: null,
  pub: null
}, {
  n: "02",
  name: "Accident Severity Prediction",
  category: "Machine Learning · IEEE",
  desc: "Random Forest beat HGB, SVM, and KNN with 94% accuracy on road accident severity classification.",
  stack: "Python, scikit-learn, pandas, numpy",
  placeholder: "RF · 94% ACCURACY",
  image: "projects/road-accident-severity.png",
  highlight: {
    v: "94%",
    l: "Best accuracy"
  },
  github: "https://github.com/Sri-Rahul/Road-Accident-Severity-Prediction",
  pub: "https://ieeexplore.ieee.org/document/10962895"
}, {
  n: "03",
  name: "Salary Predictor",
  category: "Full-stack ML · 2024",
  desc: "Predicts starting salary from academics and skills using CatBoost + XGBoost. R² of 98.21%.",
  stack: "React, TypeScript, Next.js, Flask, Python, scikit-learn",
  placeholder: "CATBOOST · R²=0.98",
  image: "projects/salaryprd.png",
  highlight: {
    v: "0.98",
    l: "R² score"
  },
  github: "https://github.com/Sri-Rahul/Salary_Predictor",
  demo: "https://salarypredictor.netlify.app/"
}, {
  n: "04",
  name: "Link Analytics Dashboard",
  category: "Full-stack · MERN",
  desc: "URL shortener with custom aliases, QR codes, JWT auth, and a click-through analytics dashboard.",
  stack: "Next.js, MongoDB, Tailwind, Node.js, Express",
  placeholder: "ANALYTICS · MERN",
  image: "projects/linksht.png",
  highlight: {
    v: "MERN",
    l: "Full stack"
  },
  github: "https://github.com/Sri-Rahul/linkanalysis",
  demo: "https://advanced-url-shortner.netlify.app/home"
}];
const TECH = {
  "Languages & Frameworks": ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3", "React", "Next.js", "Node.js", "Flask"],
  "Machine Learning": ["TensorFlow", "scikit-learn", "OpenCV", "pandas", "numpy", "XGBoost", "CatBoost"],
  "Cloud, Data & Tools": ["AWS", "Google Cloud", "MongoDB", "MySQL", "Git", "Figma", "Adobe Suite", "WordPress"]
};
const CERTS = ["Google", "Coursera", "AWS", "Google Cloud", "Cisco Networking Academy", "FutureLearn"];

/* ─── Loader (pure CSS animations + JS counter — no GSAP) ─ */
function Loader({
  onDone
}) {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const pctRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Counter + bar fill via vanilla rAF
    const startCount = 400; // ms — start after name reveal begins
    const countDur = 2200; // ms
    const startReveal = startCount + countDur + 400; // ms — begin fade
    const total = startReveal + 1100; // ms — full reveal done

    let raf;
    const t0 = performance.now();
    const tick = now => {
      const t = now - t0 - startCount;
      const p = Math.max(0, Math.min(1, t / countDur));
      const v = Math.floor(p * 100);
      if (barRef.current) barRef.current.style.width = p * 100 + "%";
      if (pctRef.current) pctRef.current.textContent = String(v).padStart(3, "0") + "%";
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Trigger fade-out and curtain
    const t1 = setTimeout(() => {
      if (rootRef.current) rootRef.current.classList.add("fade-out");
    }, startReveal);

    // Finally hide and notify
    const t2 = setTimeout(() => {
      if (rootRef.current) rootRef.current.style.display = "none";
      document.body.style.overflow = "";
      onDone && onDone();
    }, total);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Stagger char delays via inline CSS variable
  const renderRow = (text, baseDelay = 0) => /*#__PURE__*/React.createElement("div", {
    className: "ln-row"
  }, [...text].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ln-char",
    style: {
      "--d": `${baseDelay + i * 0.05}s`
    }
  }, c)));
  return /*#__PURE__*/React.createElement("div", {
    className: "loader",
    ref: rootRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-orb"
  }), /*#__PURE__*/React.createElement("div", {
    className: "loader-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-eyebrow"
  }, "Portfolio \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    className: "loader-name"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-line"
  }, renderRow("SRI RAHUL", 0.2))), /*#__PURE__*/React.createElement("div", {
    className: "loader-mid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ring-1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ring-2"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ring-3"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cross-h"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cross-v"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "loader-name"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-line"
  }, renderRow("NAMANA", 0.5))), /*#__PURE__*/React.createElement("div", {
    className: "loader-marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-marquee-track"
  }, /*#__PURE__*/React.createElement("span", null, "DEVELOPER"), /*#__PURE__*/React.createElement("span", null, "DESIGNER"), /*#__PURE__*/React.createElement("span", null, "ML ENGINEER"), /*#__PURE__*/React.createElement("span", null, "FULL-STACK"), /*#__PURE__*/React.createElement("span", null, "COMPUTER VISION"), /*#__PURE__*/React.createElement("span", null, "DEVELOPER"), /*#__PURE__*/React.createElement("span", null, "DESIGNER"), /*#__PURE__*/React.createElement("span", null, "ML ENGINEER"), /*#__PURE__*/React.createElement("span", null, "FULL-STACK"), /*#__PURE__*/React.createElement("span", null, "COMPUTER VISION"))), /*#__PURE__*/React.createElement("div", {
    className: "loader-tag"
  }, "Initialising experience")), /*#__PURE__*/React.createElement("div", {
    className: "loader-pct",
    ref: pctRef
  }, "000%"), /*#__PURE__*/React.createElement("div", {
    className: "loader-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Loading assets"), /*#__PURE__*/React.createElement("div", {
    className: "loader-bar",
    ref: barRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "loader-curtain"
  }));
}

/* ─── Cursor ─────────────────────────────────────────── */
function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const c = ref.current;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let cx = mx,
      cy = my,
      raf;
    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      c.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onMove = e => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    const hoverables = "a, button, .wcard, .work-link, .tech-chip, [data-hover]";
    const enter = () => c.classList.add("cursor-hover");
    const leave = () => c.classList.remove("cursor-hover");
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
      mo.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "cursor"
  });
}

/* ─── Nav (glass pill with active section indicator) ─── */
function Nav() {
  const [active, setActive] = useState("top");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const sections = ["top", "about", "career", "work", "contact"];
    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) current = id;
      }
      setActive(current);
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = id => e => {
    e.preventDefault();
    const t = document.getElementById(id);
    if (t && window.__lenis) window.__lenis.scrollTo(t, {
      offset: 0,
      duration: 1.6
    });else if (t) t.scrollIntoView({
      behavior: "smooth"
    });
  };
  const links = [{
    id: "about",
    n: "01",
    label: "About"
  }, {
    id: "career",
    n: "02",
    label: "Career"
  }, {
    id: "work",
    n: "03",
    label: "Work"
  }, {
    id: "contact",
    n: "04",
    label: "Contact"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? "is-scrolled" : ""}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav-logo",
    onClick: scrollTo("top")
  }, /*#__PURE__*/React.createElement("span", {
    className: "glyph",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", null, "Sri Rahul")), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.id
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${l.id}`,
    onClick: scrollTo(l.id),
    className: active === l.id ? "active" : ""
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, l.n), /*#__PURE__*/React.createElement("span", null, l.label))))));
}
function HovLink({
  text
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "hov"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hov-in"
  }, /*#__PURE__*/React.createElement("span", null, text), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0
    }
  }, text)));
}

/* ─── Landing (pure-CSS intro + Three.js scene) ───────── */
function Landing() {
  const sceneRef = useRef(null);
  const greetRef = useRef(null);
  const name1Ref = useRef(null);
  const name2Ref = useRef(null);
  const roleRef = useRef(null);
  useEffect(() => {
    // Init Three.js scene
    let cleanup;
    if (window.__initLandingScene && sceneRef.current) {
      cleanup = window.__initLandingScene(sceneRef.current);
    }

    // ScrollTrigger drives 3D scene as user scrolls past landing
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

  // Stagger first + last name chars (CSS variable delays)
  const splitToChars = (text, baseDelay) => [...text].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ch",
    style: {
      "--d": `${baseDelay + i * 0.04}s`
    }
  }, c));
  return /*#__PURE__*/React.createElement("section", {
    className: "landing",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scene",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    ref: sceneRef,
    style: {
      width: "100%",
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "landing-mark br"
  }, /*#__PURE__*/React.createElement("span", null, "India \xB7 ", new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })), /*#__PURE__*/React.createElement("span", {
    className: "dash"
  })), /*#__PURE__*/React.createElement("div", {
    className: "landing-content"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "landing-greet",
    ref: greetRef
  }, PROFILE.greet), /*#__PURE__*/React.createElement("h1", {
    className: "landing-name",
    ref: name1Ref
  }, PROFILE.first), /*#__PURE__*/React.createElement("div", {
    className: "landing-name",
    ref: name2Ref
  }, PROFILE.last)), /*#__PURE__*/React.createElement("div", {
    className: "landing-right",
    ref: roleRef
  }, /*#__PURE__*/React.createElement("p", {
    className: "landing-role-label"
  }, "A versatile"), /*#__PURE__*/React.createElement("h2", {
    className: "landing-role"
  }, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Developer")), /*#__PURE__*/React.createElement("h3", {
    className: "landing-role-sub"
  }, "+ Strategist"))), /*#__PURE__*/React.createElement("div", {
    className: "scroll-hint"
  }, "SCROLL"));
}

/* ─── About ─────────────────────────────────────────────── */
function About() {
  const titleRef = useRef(null);
  const copyRef = useRef(null);
  const sideRef = useRef(null);
  const statRefs = useRef([]);
  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    // Title: cinematic word reveal + signature underline flourish on italic words
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".aw > *");
      const ems = titleRef.current.querySelectorAll(".aw em");
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%"
        }
      });

      // 1) Words slide up
      titleTl.from(words, {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15
      });

      // 2) Glowing underline draws across each italic word
      if (ems.length) {
        titleTl.to(ems, {
          "--lit": 1,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.18
        }, "-=0.4");
      }

      // 3) Subtle brightness pulse on italic words as the underline lands
      if (ems.length) {
        titleTl.fromTo(ems, {
          filter: "drop-shadow(0 0 0 transparent)"
        }, {
          filter: "drop-shadow(0 0 28px rgba(251, 141, 255, 0.55))",
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.18,
          yoyo: true,
          repeat: 1
        }, "<");
      }
    }

    // Copy: subtle reveal
    gsap.from(copyRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: copyRef.current,
        start: "top 85%"
      }
    });

    // Side panel: SINGLE timeline so stats, count-ups, and meta rows all
    // sequence reliably under one ScrollTrigger (avoids delay-on-trigger fragility)
    if (sideRef.current) {
      const stats = sideRef.current.querySelectorAll(".about-stat");
      const metaRows = sideRef.current.querySelectorAll(".about-meta-row");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sideRef.current,
          start: "top 85%"
        }
      });

      // 1) Stats slide up + fade in
      tl.from(stats, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1
      });

      // 2) Count-up values, in parallel with stats appearing
      statRefs.current.forEach(el => {
        if (!el) return;
        const targetText = el.dataset.target;
        const target = parseInt(targetText, 10);
        if (isNaN(target)) return;
        const suffix = targetText.replace(/[\d]/g, "");
        const obj = {
          v: 0
        };
        el.textContent = "0" + suffix;
        tl.to(obj, {
          v: target,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.floor(obj.v) + suffix;
          }
        }, "<0.1");
      });

      // 3) Meta rows stagger in
      tl.from(metaRows, {
        x: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08
      }, "-=0.6");
    }
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "sect about-hero",
    id: "about"
  }, /*#__PURE__*/React.createElement(SectionIndex, {
    idx: "02"
  }), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    className: "about-mega",
    ref: titleRef
  }, /*#__PURE__*/React.createElement("span", {
    className: "aw"
  }, /*#__PURE__*/React.createElement("span", null, "Versatile,")), " ", /*#__PURE__*/React.createElement("span", {
    className: "aw"
  }, /*#__PURE__*/React.createElement("em", null, "thoughtful"), ","), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "aw"
  }, /*#__PURE__*/React.createElement("em", null, "relentless."))), /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-copy",
    ref: copyRef
  }, "I'm a ", /*#__PURE__*/React.createElement("strong", null, "Computer Science"), " professional from Vellore Institute of Technology, now ", /*#__PURE__*/React.createElement("strong", null, "Associate Technical Lead at Inbotiq"), ", where I lead AI and voice products from research through deployment. I've shipped a node-graph voice agent (", /*#__PURE__*/React.createElement("strong", null, "Vanee"), "), finetuned LLMs for structured data extraction, and built the platform that ties our agents together.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "My work covers the full ML lifecycle, from research and dataset curation to fine-tuning, optimised deployment, and the API layer that makes it usable. I also lead conversation and interface design, from voice flows and platform UX to the visual language across our surfaces."), /*#__PURE__*/React.createElement("div", {
    className: "about-side",
    ref: sideRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v",
    "data-target": "6",
    ref: el => statRefs.current[0] = el
  }, "6"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Roles")), /*#__PURE__*/React.createElement("div", {
    className: "about-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v",
    "data-target": "2",
    ref: el => statRefs.current[1] = el
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "IEEE Papers"))), /*#__PURE__*/React.createElement("div", {
    className: "about-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-meta-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Role"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Associate Tech Lead")), /*#__PURE__*/React.createElement("div", {
    className: "about-meta-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Company"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://inbotiq.com",
    target: "_blank",
    rel: "noreferrer"
  }, "Inbotiq"))), /*#__PURE__*/React.createElement("div", {
    className: "about-meta-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "School"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Vellore Institute of Technology")), /*#__PURE__*/React.createElement("div", {
    className: "about-meta-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Location"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "India"))))));
}

/* ─── What I Do (cinematic redesign) ────────────────────── */
function WhatIDo() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]); // reveal wrappers — GSAP animates these
  const tiltRef = useRef([]); // inner cards — mouse tilt + glow live here
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 1
        }
      });
      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      // Whole-card cinematic blend-in: rise + fade + scale-up + de-blur, staggered.
      // Scrubbed so it tracks scroll and can never get stuck invisible.
      tl.from(cardsRef.current, {
        y: 90,
        opacity: 0,
        scale: 0.9,
        filter: "blur(14px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.18
      }, "-=0.5");
    }

    // Mouse-follow glow + 3D tilt on each inner card (kept off the GSAP wrapper
    // so the reveal transform and the tilt transform never fight each other)
    const handlers = [];
    tiltRef.current.forEach(card => {
      if (!card) return;
      const onMove = e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", x * 100 + "%");
        card.style.setProperty("--my", y * 100 + "%");
        card.style.setProperty("--rx", -(y - 0.5) * 6 + "deg");
        card.style.setProperty("--ry", (x - 0.5) * 6 + "deg");
      };
      const onLeave = () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      handlers.push({
        card,
        onMove,
        onLeave
      });
    });
    return () => {
      handlers.forEach(({
        card,
        onMove,
        onLeave
      }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "sect"
  }, /*#__PURE__*/React.createElement(SectionIndex, {
    idx: "03",
    side: "left"
  }), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "What I do"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    ref: titleRef
  }, "Three ", /*#__PURE__*/React.createElement("em", null, "Practices"), "."), /*#__PURE__*/React.createElement("div", {
    className: "whatido"
  }, WHAT_I_DO.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "wcard-reveal",
    key: c.no,
    ref: el => cardsRef.current[i] = el
  }, /*#__PURE__*/React.createElement("div", {
    className: "wcard",
    ref: el => tiltRef.current[i] = el
  }, /*#__PURE__*/React.createElement("div", {
    className: "wcard-big-num"
  }, c.no, /*#__PURE__*/React.createElement("span", {
    className: "wcard-num-sub"
  }, "/ 03")), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", {
    className: "wcard-desc",
    dangerouslySetInnerHTML: {
      __html: c.desc
    }
  }), /*#__PURE__*/React.createElement("h5", null, "Skillset & tools"), /*#__PURE__*/React.createElement("div", {
    className: "wcard-tags"
  }, c.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "wcard-tag"
  }, t))))))));
}

/* ─── Career (cinematic redesign) ──────────────────────── */
function Career() {
  const sectionRef = useRef(null);
  const dotRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);
  const yearRefs = useRef([]);
  const titleRef = useRef(null);
  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    // Title splits into chars and reveals
    if (titleRef.current) {
      const text = titleRef.current.dataset.text || titleRef.current.textContent;
      titleRef.current.textContent = "";
      const chars = [...text].map(c => {
        const s = document.createElement("span");
        s.textContent = c;
        s.style.display = "inline-block";
        s.style.whiteSpace = "pre";
        titleRef.current.appendChild(s);
        return s;
      });
      gsap.from(chars, {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.025,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%"
        }
      });
    }
    gsap.fromTo(lineRef.current, {
      scaleY: 0,
      transformOrigin: "top"
    }, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 75%",
        scrub: 0.5
      }
    });
    gsap.fromTo(dotRef.current, {
      top: "0%"
    }, {
      top: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 75%",
        scrub: 0.5
      }
    });
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      const isEven = i % 2 === 1;
      gsap.from(el, {
        x: isEven ? 80 : -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%"
        }
      });
      const role = el.querySelector(".ci-role");
      if (role) {
        const txt = role.textContent;
        role.textContent = "";
        const chars = [...txt].map(c => {
          const s = document.createElement("span");
          s.textContent = c;
          s.style.display = "inline-block";
          s.style.whiteSpace = "pre";
          role.appendChild(s);
          return s;
        });
        gsap.from(chars, {
          yPercent: 100,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.018,
          scrollTrigger: {
            trigger: el,
            start: "top 80%"
          }
        });
      }
      const yearEl = yearRefs.current[i];
      if (yearEl && /^\d+$/.test(yearEl.textContent)) {
        const target = parseInt(yearEl.textContent, 10);
        const start = target - 8;
        const obj = {
          v: start
        };
        yearEl.textContent = start;
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            yearEl.textContent = Math.floor(obj.v);
          },
          scrollTrigger: {
            trigger: el,
            start: "top 75%"
          }
        });
      }
      // Highlight chip pops in as the role settles — eye-candy per role
      const hl = el.querySelector(".ci-highlight");
      if (hl) {
        gsap.from(hl, {
          scale: 0.6,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: el,
            start: "top 76%"
          }
        });
      }
    });
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "career",
    id: "career",
    ref: sectionRef
  }, /*#__PURE__*/React.createElement(SectionIndex, {
    idx: "04"
  }), /*#__PURE__*/React.createElement("div", {
    className: "career-eyebrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "career-eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "career-eyebrow-glyph",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", null, "Journey so far"), /*#__PURE__*/React.createElement("span", {
    className: "career-eyebrow-glyph",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "career-eyebrow-meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "06"), "\xA0Roles"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "3"), "\xA0Years"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "2"), "\xA0IEEE Papers"))), /*#__PURE__*/React.createElement("h2", {
    className: "career-title",
    ref: titleRef,
    "data-text": "My career & experience."
  }, "My career & experience."), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-line",
    ref: lineRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "timeline-dot",
    ref: dotRef
  }), CAREER.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "career-item",
    key: i,
    ref: el => itemsRef.current[i] = el
  }, /*#__PURE__*/React.createElement("div", {
    className: "career-item-num"
  }, String(i + 1).padStart(2, "0"), " / ", String(CAREER.length).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "ci-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ci-org-tag"
  }, c.org), /*#__PURE__*/React.createElement("h4", {
    className: "ci-role"
  }, c.role), /*#__PURE__*/React.createElement("p", {
    className: "ci-period"
  }, c.period), c.hl && /*#__PURE__*/React.createElement("div", {
    className: "ci-highlight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ci-hl-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ci-hl-v"
  }, c.hl.v), /*#__PURE__*/React.createElement("span", {
    className: "ci-hl-l"
  }, c.hl.l))), /*#__PURE__*/React.createElement("div", {
    className: "ci-body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ci-year",
    ref: el => yearRefs.current[i] = el
  }, c.year), /*#__PURE__*/React.createElement("p", null, c.body))))));
}

/* ─── Work (pinned horizontal scroll) ────────────────── */
function Work() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const curRef = useRef(null);
  const headerRef = useRef(null);
  useEffect(() => {
    if (!outerRef.current || !trackRef.current) return;
    if (!window.gsap || !window.ScrollTrigger) return;

    // gsap.matchMedia sets up the horizontal pin only at desktop widths and
    // automatically tears it down (killing the tween + clearing the track's
    // transform) when the viewport drops to <=1024px. Without this, a pin built
    // at a wide width stays stuck after a resize/orientation change, leaving the
    // mobile vertical card list broken.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const track = trackRef.current;
      const distance = track.scrollWidth - window.innerWidth + 40;
      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: () => "+=" + distance,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            if (progressRef.current) {
              progressRef.current.style.setProperty("--p", self.progress * 100 + "%");
            }
            if (curRef.current) {
              const count = PROJECTS.length;
              const idx = Math.min(count, Math.floor(self.progress * count) + 1);
              curRef.current.textContent = String(idx).padStart(2, "0");
            }
          }
        }
      });
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%"
        }
      });
      return () => tween.kill();
    });
    return () => mm.revert();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "work-sect",
    id: "work",
    ref: outerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-pin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-pin-header",
    ref: headerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "heading-stack"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Selected work / 2023 \u2013 2026"), /*#__PURE__*/React.createElement("h2", null, "Recent ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "builds"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "work-progress",
    ref: progressRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-progress-counter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cur",
    "data-current": true,
    ref: curRef
  }, "01"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "tot"
  }, "04")), /*#__PURE__*/React.createElement("div", {
    className: "work-progress-bar"
  }), /*#__PURE__*/React.createElement("span", null, "SCROLL TO EXPLORE"))), /*#__PURE__*/React.createElement("div", {
    className: "work-track",
    ref: trackRef
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: `work-box wv-${i % 4 + 1}`,
    key: p.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-info-top"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "work-num"
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "work-meta"
  }, /*#__PURE__*/React.createElement("h4", null, p.name), /*#__PURE__*/React.createElement("p", null, p.category))), p.highlight && /*#__PURE__*/React.createElement("div", {
    className: "work-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-stat-v"
  }, p.highlight.v), /*#__PURE__*/React.createElement("div", {
    className: "work-stat-l"
  }, p.highlight.l)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "work-desc"
  }, p.desc), /*#__PURE__*/React.createElement("h5", null, "Tools & features"), /*#__PURE__*/React.createElement("p", {
    className: "work-stack"
  }, p.stack), /*#__PURE__*/React.createElement("div", {
    className: "work-actions"
  }, p.github && /*#__PURE__*/React.createElement("a", {
    className: "work-action",
    href: p.github,
    target: "_blank",
    rel: "noreferrer"
  }, "\u2197 GitHub"), p.demo && /*#__PURE__*/React.createElement("a", {
    className: "work-action",
    href: p.demo,
    target: "_blank",
    rel: "noreferrer"
  }, "\u2197 Live demo"), p.pub && /*#__PURE__*/React.createElement("a", {
    className: "work-action is-pub",
    href: p.pub,
    target: "_blank",
    rel: "noreferrer"
  }, "\u2197 IEEE publication")))), /*#__PURE__*/React.createElement("div", {
    className: "work-image"
  }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
    srcSet: p.image.replace(/\.png$/, ".webp"),
    type: "image/webp"
  }), /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.name,
    loading: "lazy",
    decoding: "async"
  }))))))));
}

/* ─── Tech Stack ───────────────────────────────────────── */
function TechStack() {
  const titleRef = useRef(null);
  const eyebrowRef = useRef(null);
  const gridsRef = useRef([]);
  const catsRef = useRef([]);
  const bgRef = useRef(null);
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      // Title cinematic split reveal — but content is visible by default
      // (if GSAP fails, the title still reads as the static text)
      if (titleRef.current) {
        const text = titleRef.current.dataset.text || titleRef.current.textContent;
        titleRef.current.innerHTML = "";
        const chars = [...text].map(c => {
          const s = document.createElement("span");
          s.textContent = c;
          s.style.display = "inline-block";
          s.style.whiteSpace = "pre";
          if (c === "T") s.classList.add("accent");
          titleRef.current.appendChild(s);
          return s;
        });
        gsap.from(chars, {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.018,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%"
          }
        });
      }
      // Category titles, eyebrow, chips — all visible by default
      // (the title split-reveal is the one cinematic moment; the rest ships ready)
    }

    // NOTE: chips and eyebrow are visible by default (no .pre, no gsap.from).
    // The constellation bg + 3D tilt on hover provide the visual interest.

    let cleanupBg;
    if (window.__initTechBg && bgRef.current) {
      cleanupBg = window.__initTechBg(bgRef.current);
    }

    // 3D tilt for tech chips
    const chips = document.querySelectorAll(".tech-chip");
    const tiltHandlers = [];
    chips.forEach(chip => {
      const onEnter = () => {
        chip.style.transition = "transform 0.2s cubic-bezier(.2,.8,.2,1)";
      };
      const onMove = e => {
        const r = chip.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        const ry = (x - 0.5) * 18;
        const rx = -(y - 0.5) * 18;
        chip.style.setProperty("--rx", rx + "deg");
        chip.style.setProperty("--ry", ry + "deg");
      };
      const onLeave = () => {
        chip.style.transition = "transform 0.6s cubic-bezier(.2,.8,.2,1)";
        chip.style.setProperty("--rx", "0deg");
        chip.style.setProperty("--ry", "0deg");
      };
      chip.addEventListener("mouseenter", onEnter);
      chip.addEventListener("mousemove", onMove);
      chip.addEventListener("mouseleave", onLeave);
      tiltHandlers.push({
        chip,
        onEnter,
        onMove,
        onLeave
      });
    });
    return () => {
      cleanupBg && cleanupBg();
      tiltHandlers.forEach(({
        chip,
        onEnter,
        onMove,
        onLeave
      }) => {
        chip.removeEventListener("mouseenter", onEnter);
        chip.removeEventListener("mousemove", onMove);
        chip.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
  let chipIdx = 0;
  let gridIdx = 0;
  return /*#__PURE__*/React.createElement("section", {
    className: "tech-sect",
    id: "tech",
    "data-comment-anchor": "e9a217dcab-section-719-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tech-bg",
    ref: bgRef,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "tech-eyebrow",
    ref: eyebrowRef
  }, "Toolset"), /*#__PURE__*/React.createElement("h2", {
    ref: titleRef,
    "data-text": "Techstack."
  }, "Techstack."), Object.entries(TECH).map(([cat, items]) => {
    const gi = gridIdx++;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: cat
    }, /*#__PURE__*/React.createElement("h4", {
      className: "tech-cat-title",
      ref: el => catsRef.current[gi] = el
    }, cat), /*#__PURE__*/React.createElement("div", {
      className: "tech-grid",
      ref: el => gridsRef.current[gi] = el
    }, items.map(t => {
      const i = chipIdx++;
      return /*#__PURE__*/React.createElement("div", {
        className: "tech-chip",
        key: t,
        style: {
          "--cd": `${0.05 + i % 10 * 0.04}s`
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "icon"
      }, techGlyph(t)), /*#__PURE__*/React.createElement("div", {
        className: "label"
      }, t));
    })));
  }), /*#__PURE__*/React.createElement("div", {
    className: "certs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "certs-label"
  }, "Certifications from"), /*#__PURE__*/React.createElement("div", {
    className: "certs-track"
  }, [...CERTS, ...CERTS, ...CERTS].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "cert-item"
  }, c)))));
}
/* ─── Certs marquee (cinematic dual-row badge band) ─── */
const CERT_PROVIDERS = [{
  name: "Google",
  mono: "G"
}, {
  name: "Coursera",
  mono: "C"
}, {
  name: "AWS",
  mono: "AWS"
}, {
  name: "Google Cloud",
  mono: "GC"
}, {
  name: "Cisco Networking Academy",
  mono: "C"
}, {
  name: "FutureLearn",
  mono: "FL"
}];
function CertsBand() {
  const reversed = [...CERT_PROVIDERS].reverse();
  const row1 = [...CERT_PROVIDERS, ...CERT_PROVIDERS, ...CERT_PROVIDERS];
  const row2 = [...reversed, ...reversed, ...reversed];
  const Badge = ({
    c,
    i
  }) => /*#__PURE__*/React.createElement("div", {
    className: "cert-badge",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "cert-mono"
  }, c.mono), /*#__PURE__*/React.createElement("span", {
    className: "cert-name"
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "cert-check"
  }, "Verified \u2713"));
  return /*#__PURE__*/React.createElement("div", {
    className: "certs-band",
    "aria-label": "Certifications and training from"
  }, /*#__PURE__*/React.createElement("p", {
    className: "certs-band-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "glyph",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", null, "Certifications & training from"), /*#__PURE__*/React.createElement("span", {
    className: "glyph",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "certs-rows"
  }, /*#__PURE__*/React.createElement("div", {
    className: "certs-row row-1"
  }, row1.map((c, i) => /*#__PURE__*/React.createElement(Badge, {
    c: c,
    i: i,
    key: i
  }))), /*#__PURE__*/React.createElement("div", {
    className: "certs-row row-2"
  }, row2.map((c, i) => /*#__PURE__*/React.createElement(Badge, {
    c: c,
    i: i,
    key: i
  })))));
}
function techGlyph(name) {
  const initials = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 40",
    width: "38",
    height: "38",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "38",
    height: "38",
    rx: "2",
    ry: "2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "25",
    textAnchor: "middle",
    fontFamily: "Geist Mono, ui-monospace, monospace",
    fontSize: "13",
    fontWeight: "600",
    fill: "currentColor"
  }, initials));
}

/* ─── Contact (cinematic redesign) ─────────────────────── */
function Contact() {
  const titleRef = useRef(null);
  const linksRef = useRef([]);
  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    if (linksRef.current.length) {
      gsap.from(linksRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: linksRef.current[0],
          start: "top 90%"
        }
      });
    }
  }, []);

  // Headline reveal: pure CSS-driven, IntersectionObserver toggles .pre class
  useEffect(() => {
    const h = titleRef.current;
    if (!h) return;
    const rect = h.getBoundingClientRect();
    // Only add .pre if headline is still below viewport — otherwise ship visible
    if (rect.top < window.innerHeight - 100) return;
    h.classList.add("pre");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          h.classList.remove("pre");
          obs.unobserve(h);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px"
    });
    obs.observe(h);
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement(SectionIndex, {
    idx: "06",
    side: "left"
  }), /*#__PURE__*/React.createElement("p", {
    className: "contact-eyebrow"
  }, "Let's connect"), /*#__PURE__*/React.createElement("h2", {
    className: "contact-headline",
    ref: titleRef
  }, /*#__PURE__*/React.createElement("span", {
    className: "word",
    style: {
      "--wd": "0s"
    }
  }, "Let's"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "word",
    style: {
      "--wd": "0.15s"
    }
  }, /*#__PURE__*/React.createElement("em", null, "build")), " ", /*#__PURE__*/React.createElement("span", {
    className: "word",
    style: {
      "--wd": "0.3s"
    }
  }, "together.")), /*#__PURE__*/React.createElement("div", {
    className: "contact-channels"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, "Email \xB7 drop a line"), /*#__PURE__*/React.createElement(Magnetic, {
    strength: 0.25
  }, /*#__PURE__*/React.createElement("a", {
    className: "cc-link",
    ref: el => linksRef.current[0] = el,
    href: `mailto:${PROFILE.email}`,
    "data-hover": PROFILE.email
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-text"
  }, PROFILE.email), /*#__PURE__*/React.createElement("span", {
    className: "cc-arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "cc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, "Social \xB7 find me on"), /*#__PURE__*/React.createElement(Magnetic, {
    strength: 0.25
  }, /*#__PURE__*/React.createElement("a", {
    className: "cc-link",
    ref: el => linksRef.current[1] = el,
    href: PROFILE.github,
    target: "_blank",
    rel: "noreferrer",
    "data-hover": "View work \u2192"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-text"
  }, "GitHub"), /*#__PURE__*/React.createElement("span", {
    className: "cc-arrow"
  }, "\u2197"))), /*#__PURE__*/React.createElement(Magnetic, {
    strength: 0.25
  }, /*#__PURE__*/React.createElement("a", {
    className: "cc-link",
    ref: el => linksRef.current[2] = el,
    href: PROFILE.linkedin,
    target: "_blank",
    rel: "noreferrer",
    "data-hover": "Connect \u2192"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cc-text"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("span", {
    className: "cc-arrow"
  }, "\u2197"))))), /*#__PURE__*/React.createElement("div", {
    className: "contact-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-logo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "glyph",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", null, "Sri Rahul")), /*#__PURE__*/React.createElement("p", {
    className: "ft-tagline"
  }, "Open to ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "SDE"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "ML"), ", and product-minded teams that ship.", /*#__PURE__*/React.createElement("br", null), "Built with React, GSAP, and Three.js. Drop a line anytime.")), /*#__PURE__*/React.createElement("div", {
    className: "ft-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-row"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026"), /*#__PURE__*/React.createElement("span", {
    className: "ft-sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Sri Rahul Namana"), /*#__PURE__*/React.createElement("span", {
    className: "ft-sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "All wrongs reserved")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ft-totop",
    onClick: () => {
      if (window.__lenis) window.__lenis.scrollTo(0, {
        duration: 1.8
      });else window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, /*#__PURE__*/React.createElement("span", null, "Back to top"), /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2191")))));
}

/* ─── Section HUD (current section indicator) ─────────── */
function SectionHUD() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const sections = ["top", "about", "career", "work", "contact"];
    const onScroll = () => {
      const mid = window.innerHeight * 0.45;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [["top", "Home"], ["about", "About"], ["career", "Career"], ["work", "Work"], ["contact", "Contact"]];
  const go = id => () => {
    const t = document.getElementById(id);
    if (t && window.__lenis) window.__lenis.scrollTo(t);else if (t) t.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hud",
    "aria-hidden": "true"
  }, items.map(([id, label], i) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: `hud-dot ${active === id ? "active" : ""}`,
    onClick: go(id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, String(i).padStart(2, "0"), " \xB7 ", label), /*#__PURE__*/React.createElement("span", {
    className: "d"
  }))));
}

/* ─── Side Rail ───────────────────────────────────────── */
function SideRail() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, /*#__PURE__*/React.createElement("a", {
    href: PROFILE.github,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "GitHub"
  }, "\u2325"), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.linkedin,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "LinkedIn"
  }, "in"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PROFILE.email}`,
    "aria-label": "Email"
  }, "\u2709")), /*#__PURE__*/React.createElement("a", {
    className: "resume-pill",
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      const t = document.getElementById("contact");
      if (t && window.__lenis) window.__lenis.scrollTo(t);else if (t) t.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, "RESUME \u2192"));
}

/* ─── Tweaks ──────────────────────────────────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#c2a4ff", "#fb8dff", "#7f40ff"],
  "showOrbs": true,
  "showCursor": true,
  "background": "#0b080c"
} /*EDITMODE-END*/;
const PALETTES = [["#c2a4ff", "#fb8dff", "#7f40ff"], ["#9fdcff", "#5ab9ff", "#0a6cff"], ["#ffce6b", "#ff9d6b", "#ff5a36"], ["#a6f0c6", "#5dd39e", "#1e8c5a"]];
function TweaksRoot() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.palette[0]);
    root.style.setProperty("--accent-2", t.palette[1]);
    root.style.setProperty("--accent-3", t.palette[2]);
    root.style.setProperty("--bg", t.background);
  }, [t.palette, t.background]);
  useEffect(() => {
    document.querySelectorAll(".orb").forEach(el => {
      el.style.display = t.showOrbs ? "block" : "none";
    });
  }, [t.showOrbs]);
  useEffect(() => {
    const c = document.querySelector(".cursor");
    if (c) c.style.display = t.showCursor ? "block" : "none";
  }, [t.showCursor]);
  return /*#__PURE__*/React.createElement(window.TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(window.TweakSection, {
    title: "Accent palette"
  }, /*#__PURE__*/React.createElement(window.TweakColor, {
    label: "Palette",
    value: t.palette,
    onChange: v => setTweak("palette", v),
    options: PALETTES
  })), /*#__PURE__*/React.createElement(window.TweakSection, {
    title: "Background"
  }, /*#__PURE__*/React.createElement(window.TweakColor, {
    label: "Page bg",
    value: t.background,
    onChange: v => setTweak("background", v),
    options: ["#0b080c", "#0a0d14", "#10100e", "#0e0a1a", "#ffffff"]
  })), /*#__PURE__*/React.createElement(window.TweakSection, {
    title: "Motion"
  }, /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Glow orbs",
    value: t.showOrbs,
    onChange: v => setTweak("showOrbs", v)
  }), /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Blob cursor",
    value: t.showCursor,
    onChange: v => setTweak("showCursor", v)
  })));
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

    // Keep ScrollTrigger in sync with Lenis (so it advances on smooth-scroll wheels)
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis with its own rAF loop — DO NOT pipe through gsap.ticker.
    // Piping through gsap.ticker breaks ScrollTrigger's ability to play tweens
    // on enter, leaving them stuck at progress 0.
    let rafId;
    const raf = time => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Refresh after init in case content height changed
    setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

/* ─── Magnetic link helper ─────────────────────────────── */
function Magnetic({
  children,
  strength = 0.35
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    let tx = 0,
      ty = 0,
      targetX = 0,
      targetY = 0,
      raf;
    const loop = () => {
      tx += (targetX - tx) * 0.15;
      ty += (targetY - ty) * 0.15;
      el.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onMove = e => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      targetX = (e.clientX - cx) * strength;
      targetY = (e.clientY - cy) * strength;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
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

/* ─── Section index decoration ─── */
function SectionIndex({
  idx,
  side = "right",
  bottom = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `section-idx ${side === "left" ? "left" : ""} ${bottom ? "bottom" : ""}`,
    "aria-hidden": "true"
  }, "/", idx);
}

/* ─── Page Progress (thin top bar) ───────────────────── */
function PageProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.width = p * 100 + "%";
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "page-progress",
    ref: ref
  });
}

/* ─── App ─────────────────────────────────────────────── */
function App() {
  const [ready, setReady] = useState(false);
  useLenisAndGSAP();

  // Refresh ScrollTrigger once content/loader is done
  useEffect(() => {
    if (ready) {
      setTimeout(() => ScrollTrigger.refresh(), 200);
    }
  }, [ready]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader, {
    onDone: () => setReady(true)
  }), /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement("div", {
    className: "grain"
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb orb-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb orb-2"
  }), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(SectionHUD, null), /*#__PURE__*/React.createElement(PageProgress, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Landing, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(WhatIDo, null), /*#__PURE__*/React.createElement(Career, null), /*#__PURE__*/React.createElement(Work, null), /*#__PURE__*/React.createElement(CertsBand, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(TweaksRoot, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
