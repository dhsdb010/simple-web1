# My Personal Website

A simple, clean personal site to show who I am, my photos, and the things I've made.
Built with plain HTML, CSS, and JavaScript — no build step, no frameworks.

## Sections

- **About** — who you are and what you do
- **Gallery** — your photos
- **Projects** — stuff you've built
- **Contact** — how people can reach you

Plus a light/dark theme toggle that remembers your choice.

## How to make it yours

1. **Your info** — open `index.html` and replace `Your Name`, the role text,
   email, location, and the social links in the sidebar.
2. **Your photo** — drop a square photo named `avatar.jpg` into
   `assets/images/`. (If it's missing, a friendly emoji shows instead.)
3. **Your pictures** — put image files in `assets/images/`, then list them in
   the `photos` array at the top of `main.js`:
   ```js
   const photos = [
     { src: "assets/images/beach.jpg", caption: "Summer trip" },
     { src: "assets/images/cat.jpg",   caption: "My cat" },
   ];
   ```
4. **Your projects** — edit the project cards in the Projects section of
   `index.html`.

## Running it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
