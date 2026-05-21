## My Installation Notes

Using Vite to create a new React Application

 - Creating the project: <code>npm create vite@latest</code>
   - Project name: vite-project
   - Framework: React
   - Variant: JavaScript
   - Use rolldown-vite: no
   - Install w/ npm and start now: yes
 - <code>npm install react-router --save</code>
 - <code>npm install react-datepicker --save</code>
 - <code>npm install @uswds/uswds@latest --save</code>

Application-modification

  - The entry point is <code>main.jsx</code>.
    - <code>BrowserRouter basename="/application-context"</code>
  - Add react router logic in <code>App.jsp</code>.
  - Vite configuration (port, etc) <code>vite.config.js</code>
    - <code>open</code> (DEV-mode only): auto-open browser tab to this location.
    - <code>proxy</code> (DEV-mode only): maps to RESTful APIs
    - <code>base</code> specifies the application's context. This needs to match the basename used by the ReactRouter.
  - Build application structure from there...

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
