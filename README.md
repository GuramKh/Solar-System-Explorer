A stunning interactive web application that brings the solar system to life, crafted with React and TypeScript. Explore detailed information about each planet with smooth animations and seamless transitions.

✨ Key Features
  🚀 Interactive planet exploration
  📚 Rich, detailed planetary information
  🎯 Smooth animations and transitions
  🌓 Elegant Dark/Light theme
  🌐 Bilingual support (English/Georgian)
  📱 Responsive design across all devices
🛠️ Technologies & Tools
  ### Core Foundation
    ⚛️ React 18.2.0
    📘 TypeScript 4.9.5
    ⚡ Vite (Build Tooling)
  ### Navigation & State
    🧭 React Router DOM v6
    🔄 React Context API
  ### Visual Experience
    🎨 Tailwind CSS 3.3.2
    🖌️ PostCSS
    ✨ Framer Motion 10.12.4
  ### Global Reach
    🌍 i18next
    🔄 react-i18next
  ### Development Arsenal
    🔍 ESLint
    ✨ Prettier
    🔄 Git
    📦 npm

🚀 Getting Started
  ### Prerequisites
    Node.js (v16 or higher)
    npm (v7 or higher)

  ### Installation Steps
    Clone the Repository
    git clone https://github.com/yourusername/solar-system-explorer.git

  ### Install Dependencies
    cd solar-system-explorer
    npm install
  ### Dependencies
    All project dependencies including Tailwind CSS, TypeScript, and other tools are managed through package.json and will be installed automatically when running `npm install`. No additional installation steps are needed.


  ### Environment Configuration
    Copy .env.example to .env
    Update environment variables as needed

  ### Launch Development Server
    npm run dev
    Access at http://localhost:5173

  ### Production Commands
    npm run build     # Create production build
    npm run preview   # Preview production build

  📜 Available Scripts
    npm run dev → Launch development server
    npm run build → Generate production build
    npm run preview → Preview production build
    npm run lint → Run ESLint checks
    npm run format → Format code with Prettier

📁 Project Architecture
public/
└── assets/         # SVG Assets & Images

src/
├── components/           # UI Components
│   ├── ErrorBoundary     # Error Handling Component
│   ├── Header            # Main Navigation & Header
│   ├── InfoTabs          # Planet Information Tabs
│   ├── LanguageSwitch    # Language Toggle Component
│   ├── PlanetView        # Planet Display Components
│   │   └── PlanetInfo    # Planet Details Display
│   ├── Statistics        # Planet Statistics Display
│   └── ThemeToggle       # Theme Switch Component
├── context/        # React Context Providers
├── hooks/          # Custom React Hooks
├── i18n/           # Internationalization Config
├── layouts/        # Layout Templates
├── pages/          # Route Pages
├── services/       # API Services
│   └── api         # API Endpoints
├── types/          # TypeScript Definitions
├── utils/          # Utility Functions
└── App.tsx         # Root Component





<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
``` -->
