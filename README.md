# Janavi Kolpekwar — Portfolio

A static, single-page portfolio site (no build step, no dependencies) — plain HTML/CSS/JS. Deploys straight to GitHub Pages.

## Files in this folder

```
portfolio/
├── index.html      ← the whole site
├── style.css        ← design system + layout
├── script.js         ← tiny scroll-highlight nicety (optional)
└── README.md         ← this file
```

That's it — 3 files actually needed (`index.html`, `style.css`, `script.js`). No `npm install`, no framework.

## Deploy to GitHub Pages (do this once)

1. **Create a new repo on GitHub.**
   - If you want it at `https://<username>.github.io` (your root profile site), name the repo exactly `<your-github-username>.github.io`.
   - If you want it at `https://<username>.github.io/portfolio`, name the repo anything, e.g. `portfolio`.

2. **Open this folder in VS Code**, then in the VS Code terminal (`` Ctrl+` ``) run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on Pages:**
   - Go to your repo on GitHub → **Settings** → **Pages** (left sidebar).
   - Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
   - Branch: `main`, folder: `/ (root)`. Click **Save**.

4. **Wait ~1 minute**, then your site is live at:
   - `https://<your-username>.github.io` (if repo is named `<username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>` (otherwise).

GitHub shows the live URL directly on the Pages settings screen once it's built.

## Editing content later

Everything is in `index.html` — text, section order, and links all live there. Colors, fonts, and spacing are all controlled from `style.css` via the CSS variables at the top of the file (`:root { --bg, --teal, --amber, --violet, ... }`), so you can restyle the whole site by changing a handful of values.

## A note on privacy

Your phone number from the resume was intentionally left off the public site — email + LinkedIn + GitHub are enough for anyone reaching out, and it keeps your number out of search engines. Add it back into `index.html`/footer if you'd rather have it visible.
