test

# Random Image

A minimal static site that shows a random image each time you click **Random**. No backend or API keys — images come from [Picsum Photos](https://picsum.photos).

Live site: [jaytjo.github.io/image-test](https://jaytjo.github.io/image-test/)

## Highlights

- Zero dependencies (pure HTML/CSS/JS)
- Seeded image URLs for consistent per-click randomness
- Clean, responsive layout with subtle transitions

## Structure

- `index.html` — Page structure and Random button
- `css/styles.css` — Layout and theme
- `js/app.js` — Loads a new seeded image on each click

## How it works

Each click generates a new random seed. The app requests a seeded image from Picsum (`/seed/{seed}/900/600`), so every click returns a different image.

## Customization

- Image size: edit `IMAGE_WIDTH` and `IMAGE_HEIGHT` in `js/app.js`
- Styling: tweak colors and spacing in `css/styles.css`
- Copy: update text in `index.html`

## Local preview

From the project root:

```bash
python3 -m http.server 8000
# or
npx serve . -p 8000
```

Then open [localhost:8000](http://localhost:8000)

## Deploy (e.g. GitHub Pages)

1. Push this repo to GitHub.
2. **Settings → Pages** → set source to the `main` branch (root `/`).
3. An empty `.nojekyll` at the repo root is included so Pages serves files as-is.

Your site will be at `https://<username>.github.io/image-test/`.

## Credits

- Photos by [Picsum Photos](https://picsum.photos)

## License

MIT
