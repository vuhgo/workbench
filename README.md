# Workbench

A monorepo for vuhgo's projects, managed with [Turborepo](https://turbo.build/) and [pnpm](https://pnpm.io).

## Structure

### Projects

- **`site`** — Personal website built with [Astro](https://astro.build/)
- **`breaches`** — Password breach checker (React + Express) using the Have I Been Pwned API
- **`tali`** — Sub-monorepo with its own apps, packages, and services
- **`terminal-otap`** — CLI tool for generating OTAP QR codes in the terminal

### Packages

- **`config`** — Shared ESLint presets, dotfiles, and editor configurations
- **`i18n`** — Internationalization setup using i18next + React
- **`tools`** — CLI toolkit (`hugios`) with sitemap building, Todoist/Cloudflare integrations, and other utilities

### Other

- **`adguard`** — Custom AdGuard DNS filtering rules
- **`docs`** — Reference docs (plugins, deployment)
- **`workspaces`** — VS Code workspace files

## Setup

```sh
pnpm install
```

### Develop

```sh
pnpm run dev
```

### Build

```sh
pnpm run build
```

### Lint & Format

```sh
pnpm run lint
pnpm run format
```
