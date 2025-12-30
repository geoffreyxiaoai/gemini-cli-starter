# FoodSmash - Gemini CLI Starter

## Project Overview
FoodSmash is a Nuxt 3/4 application designed as a starter project for demonstrating the Gemini CLI. It is a web application for discovering and sharing unique food combinations.

**Tech Stack:**
*   **Framework:** Nuxt 4 (Vue 3)
*   **Language:** TypeScript
*   **Testing:** Vitest (with `@nuxt/test-utils`)
*   **Icons:** `lucide-vue-next`
*   **Package Manager:** `npm`

## Architecture & Directory Structure
The project follows a standard Nuxt 4 directory structure:

*   **`app/`**: Contains the main application source code.
    *   **`pages/`**: Application routes (e.g., `index.vue`, `create.vue`).
    *   **`layouts/`**: Layout components (`default.vue`).
    *   **`assets/css/`**: Global styles (`main.css`).
    *   **`app.vue`**: The root Vue component.
*   **`test/`**: Contains test files.
    *   **`nuxt/`**: Nuxt-environment tests.
*   **`public/`**: Static assets (favicon, robots.txt).
*   **`nuxt.config.ts`**: Nuxt configuration file.
*   **`vitest.config.ts`**: Test runner configuration.

## Building and Running

### Prerequisites
*   Node.js installed.

### Commands

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Run Development Server:**
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:3000`.

*   **Build for Production:**
    ```bash
    npm run build
    ```

*   **Run Tests:**
    ```bash
    npm test
    ```
    Runs Vitest for unit and component testing.

## Development Conventions

*   **Vue Style:** Uses Vue Composition API with `<script setup lang="ts">`.
*   **Styling:** Global CSS is imported in `nuxt.config.ts` from `~/assets/css/main.css`.
*   **Testing:** Tests are separated into projects in `vitest.config.ts` (e.g., `unit`, `nuxt`). New tests should be placed in the `test/` directory.
*   **Configuration:** Nuxt configuration is managed in `nuxt.config.ts`. The compatibility date is currently pinned to `2025-07-15`.

## Additional Coding Preferences
- Do not use semicolons for any JavaScript/TypeScript code
- Do not use Tailwind classes in component templates.
- Keep project dependencies minimal.
- Use relative imports and Not a path alias.
