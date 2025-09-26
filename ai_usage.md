# AI Usage Log — Mohamed Faisal Sindhi
**Course Assignment:** Assignment 2 — GitHub Portfolio Page (Programming with AI)  
**Student:** Mohamed Faisal Sindhi (GitHub: @MdFaisalS2025)  
**Date:** 2025-09-25 20:06

This log documents *exactly* where and how I used AI tools (ChatGPT, and optionally Copilot) to plan, design, implement, and polish my GitHub Pages portfolio. For each entry, I list the **prompt/intent**, **what the AI produced**, **what I kept/edited**, and **how I verified** the output. I also include links to final files and integrity notes.

---

## Summary of AI Tools Used
- **ChatGPT (primary):** ideation, HTML/CSS/JS scaffolding, copy refinement, accessibility checks, debugging help, packaging the project as uploadable ZIPs.
- **GitHub Copilot (optional, light use):** repetitive HTML snippets (duplicating card markup), small JS hints.
- **No code was blindly copied.** I edited and verified all AI outputs to reflect my own work and resume content.

---

## Detailed Entries

### 1) Project Plan + Step-by-Step Strategy
- **Prompt/Intent:** “Give me step by step how I can do this, with every detail possible. I need to get full marks.”  
- **AI Output:** A rubric-aligned plan covering repo creation, GitHub Pages setup, required sections, CSS experiments, AI documentation, and reflection deliverables.  
- **Kept/Edited:** Kept the overall structure; edited filenames/links to my own (e.g., `portfolio-<my_net_id>`).  
- **Verification:** Cross-checked assignment requirements to ensure each rubric item is covered.

### 2) Repository Description & README Intro
- **Prompt/Intent:** “What should I give in description of repo?”  
- **AI Output:** Short About description options (<=100 chars) for GitHub About box, and 2–3 sentence README intros.  
- **Kept/Edited:** Used a concise variant and tailored the README to my voice and portfolio URL.  
- **Verification:** Confirmed the link format and rendered correctly on GitHub.

### 3) GitHub UI Help (“Add file” on empty repo)
- **Prompt/Intent:** “Where is Add file?”  
- **AI Output:** Steps to use **‘uploading an existing file’**, or create a first file so **Add file ▾** appears, and alternatives (web editor / Live Server).  
- **Kept/Edited:** Followed Option A (upload existing files).  
- **Verification:** Upload succeeded; files appeared on `main` branch.

### 4) Initial Portfolio Starter (HTML/CSS/JS)
- **Prompt/Intent:** “For the GitHub portfolio you made for me… make it more beautiful, advanced and interactive. I uploaded my resume; add info.”  
- **AI Output:** An advanced portfolio with dark/light theme, animated progress bar, filterable projects, modals, experience timeline, education/certs, skills meters, GitHub activity widget, and a **Resume** link (PDF included).  
- **Kept/Edited:** Kept sections and layout; edited project titles and experience to match my resume.  
- **Verification:** Opened locally; checked accessibility landmarks and alt text.

### 5) Debugging JS (Projects empty; theme toggle issues)
- **Prompt/Intent:** “The projects section is empty. The dark light mode doesn’t work. Add advanced features and make them work.”  
- **AI Output:** A fixed build with **pre-rendered project cards** (so content shows even if JS is blocked), a robust **theme toggle** (prefers-color-scheme + localStorage), and added search/sort/filter with fallbacks.  
- **Kept/Edited:** Kept pre-rendered cards and reliable theme logic; kept search/sort but ensured cards always render without JS.  
- **Verification:** Tested via `file://` and a local server; confirmed cards visible and theme persists.

### 6) Simplifying for Reliability
- **Prompt/Intent:** “How do I run this with JS?” and “Project section is still empty… keep it simple so it works.”  
- **AI Output:** A **simple** version: hard-coded academic projects (no JS dependency), tiny JS for theme + year only.  
- **Kept/Edited:** Adopted the simple version to guarantee visibility across browsers and `file://`.  
- **Verification:** Opened `index.html` directly; projects always visible.

### 7) Futuristic/AI Visual Style + Skills Section
- **Prompt/Intent:** “Add some colours and skills section and make it futuristic AI-looking.”  
- **AI Output:** A **futuristic** theme with neon gradients, animated background grid, glassmorphism cards, and a dedicated **Skills** section (chips + meters).  
- **Kept/Edited:** Kept the neon/glass look; adjusted color variables for readability; updated chips and meter values to match my strengths.  
- **Verification:** Checked dark/light contrast; validated mobile layout.

### 8) Final Polish + Grading Strategy
- **Prompt/Intent:** “Now give me step by step exactly how I can get full marks.”  
- **AI Output:** A short checklist mapping each action to the rubric: setup (1.0), content/design (1.0), AI docs (1.5), reflection PDF (0.5), plus a QA checklist.  
- **Kept/Edited:** Kept the checklist, inserted my links and screenshots plan.  
- **Verification:** Prepared submission artifacts accordingly.

---

## Concrete Prompts I Used (Representative)
> 1. “Give me step by step how I can do this, with every detail possible. I need to get full marks.”  
> 2. “What should I give in description of repo?”  
> 3. “Where is Add file?” (empty GitHub repo UI)  
> 4. “Make my GitHub portfolio more beautiful, advanced and interactive. I uploaded my resume; add the info.”  
> 5. “The projects section is empty and dark-light mode doesn’t work—fix it and add advanced features that actually work.”  
> 6. “How do I run this with JS?”  
> 7. “Add colours and skills section and make it futuristic AI-looking.”  
> 8. “Give me steps to get full marks / map to the rubric.”

*(I also asked smaller follow-ups such as tweaking CSS variables, clarifying Pages settings, and confirming upload steps.)*

---

## Files Produced / Affected with AI Assistance
- `index.html` — structure (About, Projects, Skills, Experience, Education, Contact), simplified and pre-rendered projects
- `styles.css` — neon/glass theme, color variables, meters, responsive layout
- `script.js` — minimal: dark/light toggle (localStorage), current year
- `assets/Mohamed_Faisal_Sindhi_Resume.pdf` — resume link (not AI-produced)
- `ai-usage.md` — this log
- **(earlier advanced versions were iterated, then simplified for reliability)**

---

## Verification & Testing
- **Local:** opened `index.html` via `file://` and via local server (`python -m http.server 5500`).  
- **GitHub Pages:** uploaded to `portfolio-<my_net_id>`, set Pages to “Deploy from a branch: main / (root)”.  
- **Cross-checks:** verified project cards visible without JS, theme toggle persists, links open (Resume, LinkedIn, GitHub).  
- **Accessibility:** semantic landmarks, readable contrast, mobile responsiveness.

---

## Academic Integrity
- All content about my background, experience, and projects comes from **my resume** and my own work.  
- AI helped with **styling ideas, layout scaffolding, and copy refinement**, which I **reviewed, edited, and verified**.  
- I did **not** submit generated text verbatim where it would misrepresent authorship or work.  
- Any third-party references or tutorials were used only for learning patterns; I wrote and adapted the final code myself.

---

## Links (to include in PDF submission)
- **Repository:** `https://github.com/MdFaisalS2025/portfolio-<your_net_id>`  
- **Live Site:** `https://MdFaisalS2025.github.io/portfolio-<your_net_id>/`

> Replace `<your_net_id>` with your actual NetID in both links.
