# Janavi Kolpekwar — Portfolio (Editorial Redesign)

Static single-page site — plain HTML/CSS, no build step, no dependencies.

## Files
- `index.html` — all content (text, links, section order)
- `style.css` — all styling; colors/fonts are CSS variables at the top of the file (`--accent`, `--paper`, `--ink`, …)
- `photo.jpg` — headshot

## Deploy to Vercel
1. Go to vercel.com → Add New → Project.
2. Either drag-and-drop this folder, or push it to a GitHub repo and import that repo.
3. Framework preset: **Other** (static). No build command, output directory: root. Deploy.

## Deploy to GitHub Pages
Same as before: push these three files to your repo (`<username>.github.io` or any repo with Pages enabled, branch `main`, folder `/ (root)`).

```bash
git add .
git commit -m "Editorial redesign"
git push
```

## Notes
- The date line under "Vol. I" is static ("Est. 2026") — edit in `index.html`.
- The scrolling ticker pauses on hover; it's pure CSS (`@keyframes tickerScroll`).
- To change the accent red site-wide, edit `--accent` in `style.css`.
