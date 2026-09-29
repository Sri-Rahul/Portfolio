---
name: Sri Rahul Namana, Portfolio
description: A conductor's full score on cool manuscript paper; every part is one of his systems or his team.
colors:
  pencil: "#2b46d9"
  pencil-deep: "#1f36b3"
  pencil-light: "#8fa0ff"
  pencil-wash: "rgba(43, 70, 217, 0.08)"
  paper: "#eef0ec"
  paper-shade: "#e4e7e1"
  sheet: "#f8f9f6"
  ink: "#121317"
  ink-2: "#3d4149"
  ink-3: "#5b606a"
  rule: "rgba(18, 19, 23, 0.14)"
  rule-strong: "rgba(18, 19, 23, 0.28)"
  staff: "rgba(18, 19, 23, 0.4)"
  on-ink: "#eef0ec"
  on-ink-2: "rgba(238, 240, 236, 0.74)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(48px, min(7.4vw, 10.4vh), 96px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(46px, 6.6vw, 96px)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(38px, 4.8vw, 72px)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(24px, 2.2vw, 30px)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-long:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.75
  score:
    fontFamily: "Old Standard TT, Times New Roman, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.3
  score-lead:
    fontFamily: "Old Standard TT, Times New Roman, serif"
    fontSize: "clamp(19px, 1.65vw, 24px)"
    fontWeight: 400
    lineHeight: 1.35
  tempo:
    fontFamily: "Old Standard TT, Times New Roman, serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
rounded:
  plate: "3px"
  round: "50%"
spacing:
  gutter: "32px"
  gutter-narrow: "16px"
  container: "1320px"
  section-top: "150px"
  section-top-narrow: "110px"
  head-gap: "64px"
  column-gap: "40px"
  column-gap-wide: "56px"
components:
  button-primary:
    backgroundColor: "{colors.pencil}"
    textColor: "#ffffff"
    rounded: "{rounded.plate}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.pencil-deep}"
    textColor: "#ffffff"
  button-primary-xl:
    backgroundColor: "{colors.pencil}"
    textColor: "#ffffff"
    rounded: "{rounded.plate}"
    padding: "20px 26px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "12px 2px 10px"
  button-line-hover:
    textColor: "{colors.pencil}"
  action-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "9px 12px"
  action-chip-hover:
    backgroundColor: "{colors.pencil-wash}"
    textColor: "{colors.pencil}"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    padding: "8px 0"
  nav-link-active:
    textColor: "{colors.ink}"
  score-page:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.plate}"
    padding: "26px 26px 18px"
    width: "min(470px, 78vw)"
  rehearsal-letter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "30px"
    padding: "0 6px"
  rehearsal-letter-lit:
    backgroundColor: "{colors.pencil}"
    textColor: "#ffffff"
  rehearsal-box:
    textColor: "{colors.ink}"
    size: "124px"
  row-go:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.round}"
    size: "48px"
  coda:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
---

# Design System: Sri Rahul Namana, Portfolio

## Overview

**Creative North Star: "The Conductor's Full Score"**

The page is a printed orchestral score on cool manuscript paper, and the man it describes is the conductor. Every structural device is borrowed from engraved notation rather than from web UI: five-line staves are the dividers, barlines and a final double bar close a passage, rehearsal letters in square boxes mark the roles, a fermata holds the ending, and the score's own voice (tempo marks, part names, expression, lyrics) is set in an italic nineteenth-century serif beside a heavy modern grotesque. The one colour that does not belong to the printing is the conductor's blue pencil, laid over the score for cues, the current place, actions and facts.

Density is that of a score, not a brochure: generous vertical air between sections (150px on desktop), then tight, information-bearing systems inside them. Each section is built as its own scroll instrument (a pinned stepper, a slide-in staff that plays itself, a pinned rehearsal mark, a scrubbed spotlight, a pinned page-turning stand, a velocity ticker, a curtain with a sung cadence), and all of them speak one motion vocabulary taken from the score: staves draw, notes are struck, marks stamp, a playhead reads.

The world rejects, by thesis, the gradient hero, the card grid and the tech-logo wall. Project pages are single printed sheets on a stand, not tiles; client proof is a ruled list, not a wall of logos.

**Key Characteristics:**
- Cool manuscript paper, near-black engraving ink, one blue pencil.
- Heavy Schibsted Grotesk (800-900, tight negative tracking) for everything engraved; Old Standard TT italic for everything the score says.
- Staves, barlines, rehearsal boxes, a fermata and a treble clef drawn as line-work SVG; the 3D hero is ruled from straight lines only.
- Flat printed surfaces with hairline rules; the only lifted object is a score page on the stand.
- English only, including every musical marking.

## Colors

A near-monochrome engraving (warm-cool greys over a faintly green paper) with a single saturated blue that belongs to the conductor's hand, not to the print.

### Primary
- **Conductor's Blue Pencil** (pencil): the only accent. Primary buttons, the active nav underline, the page-progress line, playheads on every staff, a struck note, a cued orchestra section, a lit rehearsal letter and its ring, and the hand-drawn underline under facts in running copy.
- **Pressed Pencil** (pencil-deep): the hover state of the pencil button only.
- **Pencil on Ink** (pencil-light): the pencil's stand-in on the dark coda surface (links, playhead, cursor, focus ring), where the base pencil lacks contrast.
- **Pencil Wash** (pencil-wash): an 8% tint behind an action chip on hover; never a surface fill.

### Neutral
- **Manuscript Paper** (paper): the page ground everywhere except the Work stand and the coda. Also the text colour on the ink coda (on-ink).
- **Stand Grey** (paper-shade): the one tonal step, used as the ground of the Work section so the sheets read as placed on a stand.
- **Fresh Sheet** (sheet): the face of a score page and the hover fill of a client-link chip.
- **Engraving Ink** (ink): headings, noteheads, barlines, rehearsal boxes, and the full-bleed coda surface.
- **Second Ink** (ink-2): body copy, part names, glosses, nav links at rest.
- **Third Ink** (ink-3): dates, bar numbers, periods, folios; the quietest legible text.
- **Hairline** (rule) and **Strong Hairline** (rule-strong): row dividers, card borders, chip borders.
- **Staff Line** (staff): the five lines of every staff; lighter than ink so the notes sit on top.
- **Faded Ink on Dark** (on-ink-2): secondary text in the coda.

### Named Rules
**The One Pencil Rule.** Blue marks only actions, the current place, cues and facts. It is never decoration, never a heading underline, never a background panel. If a blue mark cannot answer "click me", "you are here", "this is cued" or "this is a fact", it is ink.

**The Client's Own Colour Rule.** A client row may borrow that client's brand colour for its pointer wash, its sweep line, its figures on hover and its arrow disc. That colour stays inside its row and never enters the page's own system.

## Typography

**Display Font:** Schibsted Grotesk (with Helvetica Neue, Arial)
**Score Font:** Old Standard TT (with Times New Roman)
**Notation Font:** Noto Music, subset to the treble clef glyph only

**Character:** a heavy, compressed-tracking modern grotesque engraves the headings like a publisher's title page, while a Didone-era italic serif carries the score's own voice: instrumentation, expression, lyrics, years and page numbers. The contrast is the contrast between the print and the performance marks.

### Hierarchy
- **Display** (900, clamp 48-96px, line-height 0.9, -0.035em, uppercase): the name on the title page only; drops to clamp(44px, 13.2vw, 64px) under 640px.
- **Statement** (900, clamp 46-96px, 0.98, -0.04em): the About trait words and the coda headline (coda runs clamp 48-96px at 0.96); a sentence set as large as the name.
- **Headline** (900, clamp 38-72px, 1.02, -0.035em, balanced wrap): section titles, in sentence case and ending with a full stop ("Recent builds.").
- **Title** (800, clamp 24-30px, 1.12, -0.02em): role names, client names (up to 34px), score-page names (24px), practice part names (900, 32-46px).
- **Figure** (800, 20-30px, -0.02em): numbers that are facts (+20%, 94%, 0.98), always followed by an Old Standard italic gloss on the same baseline.
- **Body** (400, 17px, 1.6; 16px under 640px): section subs (max 46ch), part descriptions (66ch), card copy at 15.5-16.5px. **Body Long** (400, 18px, 1.75, 62ch) for About copy.
- **Score** (Old Standard italic 400, 12.5-17px): part names, bar numbers, years, lyrics, glosses, folios, the cursor label. **Score Lead** (italic, clamp 19-24px) for the instrumentation line and coda sub. Large score numerals: the rehearsal year at 44px, career years at 24px, the certification ticker at clamp 26-40px.
- **Tempo** (Old Standard 700 roman, 17px): the score's tempo marking at the head of a system ("With purpose"), and multi-bar rest counts (14px).
- **Label** (500-600, 13-16px, line-height 1): nav links (15px/500), buttons (16px/600), action chips (13.5px/600).

### Named Rules
**The Print and the Performance Rule.** Schibsted Grotesk is the engraving; Old Standard italic is what the score says. A gloss beside a figure, a year, a part name or an expression mark is always Old Standard; a heading or a number is always Schibsted. Never set a heading in the serif or a lyric in the grotesque roman.

**The English Markings Rule.** Every musical marking is written in plain English ("With purpose", "broadening, then held", "End", "Back to top"). No Italian tempo or expression terms.

**The One Home Rule.** Each fact has one place on the page. A number that lives in Clients (99%, 55M+, client-validated) is not restated elsewhere; the title page's score ends on its peak note without the figure.

## Layout

A single centred column of `min(1320px, 100vw - 2 x gutter)` with a 32px gutter (16px under 640px); the fixed running header aligns to the same edges. Sections open with 150px of top air (110px under 640px) and a head of title plus sub: stacked with an 18px gap, and from 1025px a 1.4fr / 1fr grid with the sub aligned to the title's baseline, followed by 64px before content.

Inside sections the grid is asymmetric and ruled: title page 0.95fr / 1.15fr (copy, then the 3D stage); About 1.35fr / 1fr (copy, then a programme list with dotted leaders); Career a 220px sticky rehearsal box beside the systems; Clients a five-column sheet (196px logo, name, account, 230px figures, 48px arrow disc) that stacks to one column under 1025px. Column gaps run 40-56px, rising to 88px in About.

Breakpoints are two: 1024px (two-column grids collapse, the hero score becomes a horizontally scrolling 1100px sheet with a masked right edge, the Work stand unpins into a vertical stack of pages at 16:10 figures) and 640px (narrow gutter, 56px header, the programme list loses its leaders, career rows go single-column).

Each section owns a distinct scroll structure: About pinned stepper, Practices staff slide-in with self-playing tunes, Career pinned rehearsal mark, Clients stacked commissions (each client a sheet that pins while the next slides over it and the one beneath settles back; a scrubbed brand spotlight below 1025px), Work pinned page-turning stand, Certifications velocity ticker, Contact curtain and sung cadence. Pinning is desktop-only; below 1025px every section reads as a plain vertical flow.

### Named Rules
**The Staff Is the Divider Rule.** Sections and entries are separated by what a score uses: a five-line staff, a hairline, a double rule (3px double under the programme head), a barline, a final double bar. Never a card edge or a coloured band.

## Elevation & Depth

The score is flat print. Depth comes from tonal layering (paper, stand grey, fresh sheet, full ink) and from line weight, not from shadow. Soft, long, negatively spread shadows exist only on objects that physically sit on the paper: the pencil button, a client's app tile, and the score pages on the Work stand, where the current page sits higher than the others. The running header gains a 1px hairline (not a shadow) once the page scrolls.

### Shadow Vocabulary
- **Pencil lift** (`box-shadow: 0 10px 20px -14px rgba(18, 19, 23, 0.5)`; hover `0 16px 26px -16px rgba(18, 19, 23, 0.55)`): the primary button at rest and lifted 2px on hover. On the coda: `0 16px 30px -18px rgba(0, 0, 0, 0.7)`.
- **Sheet on stand** (`box-shadow: 0 30px 60px -40px rgba(18, 19, 23, 0.5)`): a score page on the Work stand.
- **Current sheet** (`box-shadow: 0 44px 80px -44px rgba(18, 19, 23, 0.6)`): the page being read.
- **Running header rule** (`box-shadow: 0 1px 0 rgba(18, 19, 23, 0.14)`): the scrolled nav's bottom hairline.

### Named Rules
**The Only Paper Lifts Rule.** A shadow means "a physical sheet or a pressable pencil mark lying on the paper". Text blocks, rows, rules and sections never cast one.

## Shapes

Corners are nearly square: a 3px plate radius on buttons, chips, score pages, the client-link chip and the scene labels, like the slightly softened corner of a printed card. Rehearsal letters and the rehearsal box are sharp, heavy-bordered squares (2px and 3px ink). The only circles are notation or pointers: noteheads (tilted ellipses), the 48px arrow disc on a client row, the cursor ring, and the pencil's hand-drawn rings around the rehearsal letters and the current rehearsal box. Pencil marks are open, round-capped strokes (2.2-2.4 wide) drawn along a slightly wavering path, never geometric.

## Components

### Buttons
Printed and pressable: one blue pencil button per context, the rest are ruled text.
- **Shape:** plate corners (3px).
- **Primary (pencil):** pencil fill, white 16px/600 label, 15px 22px padding, pencil-lift shadow. An XL variant (20px 26px, clamp 16-20px label) carries the email in the coda.
- **Hover / Focus:** fill deepens to pressed pencil and the button rises 2px with an exponential ease-out; press returns it to rest. Focus is a 2px pencil outline at 3px offset (pencil-light on the coda).
- **Line (secondary):** ink text on a 1.5px ink underline, no fill; on hover text and rule turn pencil. On the coda the rule is 55% paper and hovers to pencil-light.

### Chips
- **Style (action chip):** transparent, 1px strong hairline border, 3px corners, 13.5px/600 ink label with an authored 1.5-stroke arrow icon; used for GitHub / Live demo / IEEE paper on a score page.
- **State:** hover turns border and label pencil over the 8% pencil wash.
- **Client-link chip:** 13px/500 third-ink label with the client's logo at 15px, 1px hairline border; hover darkens the border to ink over a fresh-sheet fill.

### Cards / Containers
The only card is a **score page** on the Work stand.
- **Corner Style:** plate (3px).
- **Background:** fresh sheet on the stand-grey section ground.
- **Shadow Strategy:** sheet on stand, current sheet when read (see Elevation).
- **Border:** 1px hairline; a hairline also closes the centred title block and frames the figure.
- **Internal Padding:** 26px 26px 18px (18px 16px 14px under 640px).
- **Anatomy:** centred name (800, 24px) and an Old Standard italic category line; a figure; a figure-plus-gloss stat; description; a "Scored for" stack line; action chips; a centred italic folio set as "— 2 —".
- **Imagery:** stock art is a grayscale printed plate (`grayscale(1) contrast(1.06)`, multiply blend); a real screenshot shows in colour when its page is current or hovered.

### Navigation
- **Running header:** fixed, 64px (56px under 640px), transparent over the title page, 96% paper with a hairline once scrolled. Logo mark plus name at 16px/700 (the name hides under 640px).
- **Links:** 15px/500 second ink, 28px apart; hover and active turn ink. The active section gets a hand-drawn pencil underline that draws in; hover previews it at half opacity.
- **Page progress:** a 2px pencil line across the very top, scaled from the left with scroll.

### Rehearsal Marks (signature)
Career roles are lettered A to F. Each role's **rehearsal letter** is a 30px square with a 2px ink border on paper, 800 16px; when its role is reached it stamps in (scale 1.7 and -12deg to rest) and fills pencil with a white letter. On desktop a sticky **rehearsal box** (124px square, 3px ink border, 900 88px letter) turns over to the current letter, is ringed by the pencil, and states the year in 44px Old Standard italic, the organisation, and "n of 6".

### Staves and Playheads (signature)
Every staff is five 1px staff-colour lines drawn in with a stroke-dash reveal from the left; barlines are 1px ink, final bars 3.5-4px ink. Notes land from above (translateY -12px, scale 0.5) and are struck with a small dip-and-swell; a struck note, its stem and its lyric turn pencil and open a pencil ripple ring. A playhead is always a 2px pencil vertical that reads left to right. The title-page score is a six-part system from 2022 to 2026 with a bracket, part names, bar numbers, multi-bar rests, a tempo mark and a fermata over the final bar; its playhead performs the whole score once on load, writing each note as it is reached, then keeps reading it at a calm pace.

### Conductor's View (signature)
The title page's right half is a Three.js scene ruled from straight lines only: music stands in arcs around a podium, in ink and paper tones with one section in pencil. Each orchestra section is one of his systems; the pointer cues the nearest section, the stands lift on the beat, and its Old Standard italic name turns pencil while a detail line appears under the podium. With no pointer it conducts itself. It pauses off screen and on hidden tabs, and holds still under reduced motion.

### Coda (signature)
The closing section is a full-bleed ink surface opened by a coda sign over a faint staff. Left: a statement headline, a Score Lead sub, the XL pencil button carrying the email, and line links. Right: a sung cadence, five notes with English lyric syllables, "broadening, then held", a fermata and a final double bar marked "End"; every few bars a pencil-light playhead reads the phrase again.

## Do's and Don'ts

### Do:
- **Do** keep blue to the pencil's four jobs: actions, the current place, cues and facts.
- **Do** set every musical marking in English, in Old Standard (italic for expression and lyrics, 700 roman for tempo).
- **Do** give each fact one home; the 99% lives in Clients only.
- **Do** draw motion from the score: staves draw (stroke-dashoffset), notes are struck, rehearsal marks stamp, a 2px pencil playhead reads, headings ink in word by word.
- **Do** ease every transition with the exponential ease-out `cubic-bezier(.16, 1, .3, 1)`; linear timing only for playheads and scrubbed scroll.
- **Do** animate transform, opacity and clip-path (stroke-dashoffset for line drawing); pause every loop off screen and on hidden tabs.
- **Do** honour `prefers-reduced-motion` everywhere: transitions collapse, loops stop, the 3D scene holds, pinned sequences fall back to plain reveals, and rings and staves are shown drawn.
- **Do** give each new section its own scroll structure, built from a score device.
- **Do** show stock project art as a grayscale printed plate and a real screenshot in colour when its page is current.

### Don't:
- **Don't** put a pencil underline under a section heading; headings are ink only.
- **Don't** use Italian score terms (no "con brio", "tutti", "fine", "D.C."), or any non-English text.
- **Don't** repeat a number across sections (99%, 55M+, client-validated live in Clients).
- **Don't** use bounce, elastic or overshoot easing.
- **Don't** build a gradient hero, a card grid or a tech-logo wall; project pages are sheets on a stand, clients are ruled rows.
- **Don't** add shadows to text, rows or sections; only a sheet on the stand or the pencil button lifts.
- **Don't** add a second accent colour; a client's brand colour stays inside its own row.
- **Don't** add small labels above section titles; a section opens with its headline.
