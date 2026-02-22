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

## Images / Attribution

- Images are fetched from Unsplash Source (https://source.unsplash.com). This is a public image endpoint that does not require an API key but follows Unsplash's terms — please add attribution in your site or repo if you curate specific images.

## Contributing

- To add or edit quotes, update `js/app.js` and submit a PR. Keep entries short and attribute the author.

## License

MIT
