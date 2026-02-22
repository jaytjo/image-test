# Daily Inspiration

A simple, lightweight static site that displays an inspirational quote and a matching image. Designed to run entirely in the browser (no backend) and deployable to GitHub Pages.

## Features

- Small, static assets: `index.html`, `css/styles.css`, `js/app.js`
- 100 curated quotes
- Quote image provided by Unsplash Source (no API key required)
- Keyboard navigation, copy-to-clipboard, accessible markup and ARIA

## Live Site

https://jaytjo.github.io/inspirational-quotes-website/

## Usage / Deploy

1. Push to this repository's `main` branch and enable GitHub Pages (Settings → Pages) if not already enabled.
2. If you want Pages to serve raw files without Jekyll processing, add an empty `.nojekyll` file at the repository root.

## Development

- Quotes live in `js/app.js` as an array named `q`. Each entry is an object with `t` (text) and `a` (author):

```js
{ t: "The only way to do great work is to love what you do.", a: "Steve Jobs" }
```

- The image selection logic is in `js/app.js` (`getImageQuery` / `setImageForEntry`). To use local deterministic images, add an `images/` folder and update `setImageForEntry` to point to local files instead of Unsplash.

- Styles are in `css/styles.css`.

- Preview locally with a small static server:

```bash
python3 -m http.server 8000
# or, if you have Node.js:
npx serve . -p 8000

# then open http://localhost:8000
```

# Random Image (Static Site)

This is a minimal static website that displays a random image each time you click the "Random" button.

Files
- `index.html` — markup and button
- `css/styles.css` — styles
- `js/app.js` — tiny client-side logic that loads a new image on click

How it works
- The site requests seeded images from Picsum (https://picsum.photos). Each click generates a new random seed, so the returned image is different.

Deploy to GitHub Pages

1. Commit and push the `image-test` folder to a repository on GitHub.
2. In the repository Settings → Pages, set the source to the `main` branch (or `gh-pages` branch) and the root folder `/`.
3. Wait a minute and your site will be available at `https://<your-username>.github.io/<repo-name>/`.

Preview locally

```bash
# from the `image-test` folder
python3 -m http.server 8000
# or with Node.js
npx serve . -p 8000

# then open http://localhost:8000
```

Notes
- No backend or API keys required — images are fetched from an external image service.
- This repository is intentionally small and ready for Pages hosting.

License: MIT
