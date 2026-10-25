# Portfolio Web

Frontend application for the Portfolio Platform, built with Next.js, React, and TypeScript.

This repository contains the independently executable web application. It is being developed incrementally as the user-facing component of the Portfolio Platform.

## 1. Current Implementation

The application currently includes:

- Next.js App Router with TypeScript.
- React and Tailwind CSS.
- A starter homepage.
- Automated homepage tests using Vitest and React Testing Library.
- ESLint for static analysis.
- Production build support through Next.js.
- Reproducible dependency installation using npm and a committed lockfile.

**Not implemented yet:** Portfolio-specific UI features, backend API integration, authentication, or deployment configuration.

## 2. Prerequisites

| Tool | Requirement | Purpose |
|---|---|---|
| Git | Recent supported version | Clone the repository |
| Node.js | 24.21.0 | JavaScript runtime specified in `.nvmrc` |
| npm | Version supplied with the compatible Node.js installation | Dependency management |
| nvm | Recommended | Manage Node.js versions |
| curl | Optional | Verify HTTP responses |

### Installing prerequisites

**macOS and Linux**

Install Git using your preferred package manager.

Install nvm using the [official nvm installation instructions](https://github.com/nvm-sh/nvm#install--update-script).

Once nvm is available, the project's `.nvmrc` file can be used to install the required Node.js version.

**Windows**

Install Git using the [official Git installation instructions](https://git-scm.com/install/).

Install Node.js using the [official Node.js downloads](https://nodejs.org/en/download) or a Windows-compatible version manager.

The `nvm-sh/nvm` project is intended for Unix-like shells. Windows developers should use an appropriate Windows version manager or install the required Node.js version directly.

### Verify prerequisites

```bash
git --version
node --version
npm --version
```

The expected Node.js version is `v24.21.0`.

## 3. Clone and Install

Clone the repository:

```bash
git clone https://github.com/Abishek2905/portfolio-web.git
cd portfolio-web
```

If using nvm:

```bash
nvm install
nvm use
```

Install dependencies:

```bash
npm ci
```

`npm ci` installs dependencies using the committed `package-lock.json`, providing a reproducible dependency tree.

Unlike `npm install`, it requires the manifest and lockfile to be consistent and does not update them.

## 4. Environment Configuration

The current application does not require any custom environment variables.

No `.env` file is necessary to run the existing frontend.

Environment variables will be documented when functionality requiring them is introduced.

Next.js distinguishes between server-side environment variables and variables intentionally exposed to browser code using the `NEXT_PUBLIC_` prefix.

Do not commit secrets, tokens, or credentials. Never place sensitive credentials in public browser environment variables.

## 5. Run the Development Server

Start the application:

```bash
npm run dev
```

Open:

http://localhost:3000/

The application currently displays the Next.js starter homepage.

To verify the HTTP response from another terminal:

```bash
curl -I http://localhost:3000/
```

Expected status:

```text
HTTP/1.1 200 OK
```

Stop the development server using `Ctrl+C`.

## 6. Code Quality and Testing

Run ESLint:

```bash
npm run lint
```

Run automated tests:

```bash
npm test
```

The current tests verify that the starter homepage renders its expected heading and provides a documentation link.

These are bootstrap tests; additional component and integration tests will be added alongside portfolio-specific functionality.

## 7. Production Build

Generate an optimized production build:

```bash
npm run build
```

The build includes Next.js compilation and TypeScript validation.

To run the production build locally:

```bash
npm run start
```

Open http://localhost:3000/ to verify the application.

`npm run start` requires a successful production build beforehand. Stop any development server using the same port before starting the production server.

These commands validate local build and execution behavior; they do not constitute a production deployment.

## 8. Dependency Security

Audit the complete dependency tree:

```bash
npm audit
```

Audit production dependencies:

```bash
npm audit --omit=dev
```

Security findings should be reviewed before applying dependency changes.

Do not automatically use `npm audit fix --force`, as it can introduce incompatible dependency updates.

Dependency remediation should be tracked separately from unrelated application or documentation changes.

## 9. Troubleshooting

### Incorrect Node.js version

Verify:

```bash
node --version
```

If using nvm, run `nvm install` followed by `nvm use` from the repository root.

### Dependency installation fails

Verify that Node.js and npm are installed and that `package.json` and `package-lock.json` are present.

Review the reported error before modifying the lockfile.

### Port 3000 is already in use

Stop the existing server, or start the application on another port:

```bash
npm run dev -- -p 3001
```

### Production server fails to start

Ensure the production build completed successfully:

```bash
npm run build
npm run start
```

### Tests or linting fail

Run the relevant command independently to inspect the failure:

```bash
npm run lint
npm test
```

Resolve the underlying issue rather than bypassing validation.

## 10. Repository Responsibilities

| Repository | Responsibility |
|---|---|
| `portfolio-web` | Frontend application |
| `portfolio-api` | Backend APIs and application logic |
| `portfolio-worker` | Background-processing component |
| `portfolio-platform` | Cross-repository orchestration and integration setup |

Each application repository owns its component-specific dependencies, configuration, tests, and executable entry points.

## 11. Development Roadmap

The frontend will evolve incrementally as portfolio functionality is introduced.

Planned capabilities include portfolio-specific pages and components, backend API integration, and appropriate application-level testing.

Implementation work, technical decisions, and validation are tracked through GitHub, Jira, and the Portfolio Platform Confluence roadmap.

This README describes the currently supported setup and behavior.