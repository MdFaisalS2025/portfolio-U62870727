# AI Usage Log — Mohamed Faisal Sindhi
**Course Assignment:** Assignment 2 — GitHub Portfolio Page (Programming with AI)  
**Student:** Mohamed Faisal Sindhi (GitHub: @MdFaisalS2025)  

This log documents *exactly* where and how I used AI tools (ChatGPT, and optionally Copilot) to plan, design, implement, and polish my GitHub Pages portfolio. For each entry, I list the **prompt/intent**, **what the AI produced**, **what I kept/edited**, and **how I verified** the output. I also include links to final files and integrity notes.

---

## Summary of AI Tools Used
- **ChatGPT (primary):** ideation, HTML/CSS/JS scaffolding, copy refinement, accessibility checks, debugging help, packaging the project as uploadable ZIPs.
- **GitHub Copilot ** repetitive HTML snippets (duplicating card markup), small hints.
- **No code was blindly copied.** I edited and verified all AI outputs to reflect my own work and resume content.

---

## Detailed Entries

### 1) Project Plan + Step-by-Step Strategy
- **Prompt/Intent:** “Give me step by step how I can do this, with every detail possible. I need to get full marks.”  
- **AI Output:** A rubric-aligned plan covering repo creation, GitHub Pages setup, required sections, CSS experiments, AI documentation, and reflection deliverables.  
- **Kept/Edited:** Kept the overall structure; edited filenames/links to my own (e.g., `portfolio-<my_net_id>`).  
- **Verification:** Cross-checked assignment requirements to ensure each rubric item is covered.

### 2) Initial Portfolio Starter (HTML/CSS/JS)
- **Prompt/Intent:** “For the GitHub portfolio you made for me… make it more attractive, advanced and interactive. I uploaded my resume; add necassary info.”  
- **AI Output:** An advanced portfolio with dark/light theme, animated progress bar, filterable projects, modals, experience timeline, education/certs, skills meters, GitHub activity widget, and a **Resume** link (PDF included).  
- **Kept/Edited:** Kept sections and layout; edited project titles and experience to match my resume.  
- **Verification:** Opened locally; checked accessibility landmarks and alt text.

### 3) Debugging JS (Projects empty; theme toggle issues)
- **Prompt/Intent:** “The projects section is empty. The dark light mode doesn’t work. Add advanced features and make sure they work.”  
- **AI Output:** A fixed build with **pre-rendered project cards** (so content shows even if JS is blocked), a robust **theme toggle** (prefers-color-scheme + localStorage), and added search/sort/filter with fallbacks.  
- **Kept/Edited:** Kept pre-rendered cards and reliable theme logic; kept search/sort but ensured cards always render without JS.  
- **Verification:** Tested via `file://` and a local server; confirmed cards visible and theme persists.

### 4) Simplifying for Reliability
- **Prompt/Intent:** “How do I run this with JS?” and “Project section is still empty… keep it simple so it works.”  
- **AI Output:** A **simple** version: hard-coded academic projects (no JS dependency), tiny JS for theme + year only.  
- **Kept/Edited:** Adopted the simple version to guarantee visibility across browsers and `file://`.  
- **Verification:** Opened `index.html` directly; projects always visible.

### 5) Futuristic/AI Visual Style + Skills Section
- **Prompt/Intent:** “Add some colours and skills section and make it futuristic AI-looking.”  
- **AI Output:** A **futuristic** theme with neon gradients, animated background grid, glassmorphism cards, and a dedicated **Skills** section (chips + meters).  
- **Kept/Edited:** Kept the neon/glass look; adjusted color variables for readability; updated chips and meter values to match my strengths.  
- **Verification:** Checked dark/light contrast; validated mobile layout.
  
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
