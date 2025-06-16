# DSA Visualizer

A web application to visualize Data Structures and Algorithms (DSA) including Sorting, Searching, Trees, and Graphs. Built with React, Vite, Tailwind CSS, and React Flow.

## Features

- **Sorting Visualizer:** Step-by-step bubble sort animation.
- **Searching Visualizer:** Linear search visualization with color-coded steps.
- **Tree Visualizer:** Animated binary tree construction from level-order input.
- **Graph Visualizer:** Interactive graph creation and edge management.
- **Authentication:** Simple signup/login using local storage.
- **Progress Tracking:** Tracks user progress for each DSA topic.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Flow](https://reactflow.dev/)
- [React Router](https://reactrouter.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/dsa-visualizer.git
   cd dsa-visualizer
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
dsa-visualizer/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Graphs.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Searching.jsx
│   │   ├── Signup.jsx
│   │   ├── Sorting.jsx
│   │   └── Trees.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── ...
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint

## License

MIT

---

Made with ❤️ for learning and teaching DSA visually.