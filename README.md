# Portfolio Site (v2 — "One Continuous Line")

Static portfolio site for GitHub Pages. No build step — plain HTML/CSS/JS.

**Signature element:** a single copper wire runs the full height of the page's left
rail, drawing itself in as you scroll — twisted-pair telecom schematic at the top,
junction nodes at each section, branching into a teal transmission-grid pattern at
the bottom. It hides automatically on mobile widths.

## Deploy to GitHub Pages

1. Create a repo named `GianiMichael.github.io` (this exact name = root profile site).
2. Upload `index.html`, `css/`, `js/`, and `assets/` to the repo root, keeping structure.
3. **Settings → Pages → Source: Deploy from a branch → main → / (root) → Save.**
4. Live in 1–2 minutes at `https://gianimichael.github.io`.

## Placeholder checklist (search code for `PLACEHOLDER`)

- [ ] Resume: add `assets/resume.pdf`, update `#resumeLink` href in `index.html`
- [ ] Dashboard screenshot: add `assets/dashboard-preview.png`, swap in for the placeholder box in project card A
- [ ] ASTRA screenshot (redacted): add `assets/astra-preview.png`, swap into card B
- [ ] Confirm final ASTRA case-study repo URL in card B
- [ ] LinkedIn URL (Connect section)
- [ ] Email address (Connect section, `mailto:`)
- [ ] Writeups: replace the "IN DRAFT" note card when the first post publishes

## Structure

```
portfolio-v2/
├── index.html
├── css/style.css
├── js/main.js
├── assets/          (add resume.pdf + screenshots)
└── README.md
```

## Accessibility & polish included

- Responsive to mobile (wire rail hides below 760px)
- `prefers-reduced-motion` respected (no draw/count animations)
- Visible keyboard focus states (teal outline)
