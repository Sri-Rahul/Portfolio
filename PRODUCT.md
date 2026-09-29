# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Recruiters and hiring managers** screening Sri Rahul for AI/ML and software roles — usually 30–90 seconds, arriving from a LinkedIn link or a CV, on a laptop or a phone.
- **Clients and collaborators** deciding whether to bring him onto a project — they need to see what he has delivered for real clients and how to reach him.

## Product Purpose

A personal portfolio for Sri Rahul Namana. Success is a visitor leaving convinced he is **a technical lead who delivers** — trusted with people and outcomes, not just code — and knowing how to contact him.

## Positioning

A 2026 Computer Science graduate of VIT who, while still studying, became Associate Technical Lead at Inbotiq (Nov 2025 – Sep 2026): led a team of four, owned releases and incidents, pitched a client in person, and shipped AI to real clients — an LLM data-extraction system for Volza (99% client-validated field accuracy, 55M+ records) and the v2 engine of Vaanee, a voice agent (Artium Academy onboarding). Few candidates at his stage can show delivery to named clients at production scale.

## Operating Context

- Visitors skim first (name, role, proof), then dig into a role, a client, or a project.
- The contact path (email, GitHub, LinkedIn) must be reachable from anywhere.
- Deployed as a static site on Netlify.

## Capabilities and Constraints

- Stack stays as it is (confirmed 2026-09-29): static files, React 18 from a CDN with JSX precompiled by `build.js`, GSAP + ScrollTrigger, Lenis smooth scroll, Three.js, plain CSS. No Tailwind, no framer-motion, no bundler.
- Sections: Landing · About · Practices · Career · Clients · Work · Certifications · Contact.
- September 2026 is his last month at Inbotiq; the next role is private — do not mention it.

## Brand Commitments

- Name as shown: **Sri Rahul Namana**.
- Voice: plain, human, first person; no marketing superlatives.
- The user found the old glossy purple look "AI-generated" and turned down a dark Spectrogram world; they chose **Orchestration** (a conductor's score on manuscript paper) as a world that says AI, leadership, architecture and design. A pasted About-section reference (near-black, bold uppercase headings, floating 3D objects) was inspiration only.

## Evidence on Hand

- Career timeline, practices, projects and certifications: `app.jsx` data (`CAREER`, `WHAT_I_DO`, `PROJECTS`, `CERT_PROVIDERS`). Certifications are known by issuer only.
- Project images: `projects/*.webp` + `.png` (two are illustrations, two are screenshots; real screenshots or diagrams would be stronger).
- Client logos: `clients/volza-on-light.*` (from volza.com with the user's approval, wordmark recoloured to ink for the paper ground; `volza-on-dark.*` kept for dark grounds) and `clients/artium-academy.*` (official file from the Inbotiq site's brand folder).
- Verified client facts: Volza extraction returns 14 structured fields (vault: Volza Extraction overview); Artium requirements came from 18 recorded onboarding calls (vault: Artium Academy engagement); Volza describes itself as trade data for 200 countries (volza.com title).
- Two IEEE papers (one linked from the Accident Severity project).
- **Absent — never fabricate:** testimonials, quotes from clients, client counts beyond Volza and Artium, salary/revenue figures, or the next employer.

## Product Principles

1. Proof over adjectives — every claim is backed by a number, a named client, or a shipped artifact.
2. Delivery and leadership first; tools and stacks are supporting detail.
3. A recruiter gets the story in one viewport; depth is there for anyone who scrolls.
4. Craft must feel authored by a person — nothing that reads as a template or generated.

## Accessibility & Inclusion

Readable contrast on dark surfaces, keyboard-reachable links, reduced-motion support for every scroll effect, text selectable and copyable.
