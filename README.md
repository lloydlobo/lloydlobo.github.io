# lloydlobo.github.io

[![Deploy to GitHub Pages](https://github.com/lloydlobo/lloydlobo.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/lloydlobo/lloydlobo.github.io/actions/workflows/deploy.yml)

[![Playwright Tests](https://github.com/lloydlobo/lloydlobo.github.io/actions/workflows/playwright.yml/badge.svg)](https://github.com/lloydlobo/lloydlobo.github.io/actions/workflows/playwright.yml)

## Acknowledgements

### Inspiration

- Design based on [hoangvu12](https://github.com/hoangvu12)'s portfolio site

### Assets

- [Lucide - Icons](https://lucide.dev)

### Schema

- [JSON Resume - Schema](https://jsonresume.org/schema)

### Mockups

- [MacOS Frame Template - Gautham](https://www.figma.com/community/file/814930057611704664)
- [Big Sur Safari Mockup - Sasha Lazarev](https://www.figma.com/community/file/912816288448729178)

### Stack

<details>

<summary>About Astro</summary>

## Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file
name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact
components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into
our [Discord server](https://astro.build/chat).

</details>

## Testing

<details>

<summary>### Playwright</summary>

Update Playwright and download new browser binaries and their dependencies:

```
  npx playwright install --with-deps
```

Inside that directory, you can run several commands:

```
  npx playwright test
  # Runs the end-to-end tests.

  npx playwright test --ui
  # Starts the interactive UI mode.

  npx playwright test --project=chromium
  # Runs the tests only on Desktop Chrome.

  npx playwright test example
  # Runs the tests in a specific file.

  npx playwright test --debug
  # Runs the tests in debug mode.

  npx playwright codegen
  # Auto generate tests with Codegen.
```

We suggest that you begin by typing:

```
    npx playwright test
```

And check out the following files:

- ./tests/example.spec.ts - Example end-to-end test
- ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

</details>
