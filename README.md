# ScholarScope website (exact Toolify clone)

This folder serves an **exact structural clone** of [Toolify](https://toolify.webflow.io/) (`toolify_webflow_io.html`):

- Same Webflow CSS CDN  
- Same classes / layout / scripts  
- **Content replaced** with ScholarScope (APC, OA, OpenAlex, SCImago)

## Run

```bash
cd site
npm run dev
```

Opens the cloned landing page. Rebuild from source HTML anytime:

```bash
npm run clone
```

## How content is applied

`scripts/build-clone.mjs` reads `../toolify_webflow_io.html` and writes `index.html`.

## Extension

Chrome: load unpacked → `../scholarscope-ext`

## Note

The previous React redesign remains under `src/` for reference; the **live site is the Toolify HTML clone**.
