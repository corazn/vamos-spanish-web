# VAMOS website

A static website (plain HTML/CSS/JS, no build step), ready for GitHub Pages.

```
index.html        page structure (no need to edit)
content.js        ← ALL text, links, schedule, image paths — edit this
assets/style.css  colors, fonts, layout
assets/main.js    builds the page from content.js
images/           put your photos here
```

## Editing content

Open `content.js` in any text editor and change the text inside the quotes.
Keep the quotes and the commas between items.

- **Schedule**: `schedule.courses` → add/remove `{ code, days, time, start }` rows.
- **Photos**: copy images into `images/` and list them in `classes.photos`,
  `feedback.images` or `workshop.images`. Any missing file shows a striped
  placeholder that says which file name it expects.
- **Teachers**: `teachers.profiles` — one `{ name, role, bio, photo }` per teacher (portrait photos, ~4:5).
  `teachers.items` are the team-strength chips above them.
- **Hero photo columns**: `hero.photos` (leave `[]` to reuse the class + workshop photos).
- **Buttons**: `navCta`, `hero.ctaPrimary`, `hero.ctaSecondary` — use `url` for a link or `target` for a section.
- **Scrolling words band**: `ticker`.
- **Logo**: set `logoImage: "images/logo.png"` to use your own logo file instead
  of the built-in text logo.
- **Colors**: change the values at the top of `assets/style.css` (`--red`, `--yellow`, …).

## Preview on your computer

Double-clicking `index.html` works in most browsers. If something doesn't load,
run a local server in this folder:

```bash
python3 -m http.server 8000
```

then open http://localhost:8000

## Publish free on GitHub Pages

1. Create a new public repository on github.com (e.g. `vamos`).
2. Upload all files in this folder (drag & drop on the repo page → "Commit changes"),
   or from a terminal:
   ```bash
   git init && git add . && git commit -m "VAMOS website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/vamos.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. After ~1 minute the site is live at `https://<your-username>.github.io/vamos/`.

To update the site later, edit `content.js` (you can even edit it directly on
github.com with the pencil icon) and commit — it redeploys automatically.

Tip: name the repository `<your-username>.github.io` to get the shorter URL
`https://<your-username>.github.io/`. A custom domain can be added under Settings → Pages.
