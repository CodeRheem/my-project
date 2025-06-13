# Todo App with Search, Filter, Pagination, and CRUD

## Project Description

This is a React-based Todo application that allows users to manage a list of tasks efficiently. The app supports:

* Searching todos by title
* Filtering by status (all, completed, incomplete)
* Pagination (10 items per page)
* Creating new todos via a modal form
* Editing existing todos
* Deleting todos with a confirmation prompt

## Features

* Search todos by title
* Filter todos by status (completed/incomplete)
* Paginated view with navigation
* Add new todo using a modal form
* Edit existing todos inline or via modal
* Confirm before deletion of a todo
* Accessible and responsive UI using Tailwind CSS

## Installation and Setup

```bash
# Clone the repo
git clone https://github.com/your-username/todo-app.git

# Change into the project directory
cd todo-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

## Available Scripts

* `npm run dev` – Runs the app in development mode
* `npm run build` – Builds the app for production
* `npm run preview` – Previews the production build

## Technology Stack & Architecture

* **React 19** – Core UI framework
* **React Router v7** – For navigation
* **Tailwind CSS** – Styling and layout
* **ShadCN/UI** – UI component library for modals, forms, and buttons
* **TanStack Form** – For form handling
* **React Icons** – For icons

## API Documentation

The app uses `https://jsonplaceholder.typicode.com/todos` as a mock API.
Each todo object contains:

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

Note: CRUD operations are done client-side only and are not persisted on the API.

## Known Issues / Limitations

* No real API persistence for Create/Update/Delete (mock API only)
* Basic error handling
* No user authentication or role-based access

## Future Improvements

* Integrate a real backend for persistent CRUD
* Add user login and registration
* Support drag-and-drop todo reordering
* Add due dates and reminders
* Improve accessibility with ARIA roles and screen reader testing

<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
