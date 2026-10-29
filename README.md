# The Name Prestige Commission

“Please enter your name,” elevated to an entirely unnecessary ceremony. A tiny
Bad UX competition app and Node publishing fixture for Badux. All interactions
stay in the browser; there is no backend, storage, remote API, or external asset.
Use an imaginary name.

## Run locally

Use Node 22.12 or newer (Node 22 recommended).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build and preview the static bundle:

```sh
npm run build
npm run preview
```

The production entry point is `dist/index.html`. The generated `dist/` directory
and local `node_modules/` are ignored by Git.

## Publish with Badux

Connect this repository in Badux and choose:

| Setting | Value |
| --- | --- |
| Build setup | npm build |
| Build command | `npm run build` |
| Output directory | `dist` |

Use Badux’s generated publishing workflow for your selected branch and commit
that file yourself. This fixture deliberately includes no workflow files, so it
can exercise the generated setup from the beginning. No platform secrets or
installation-specific domains belong in this repository.
