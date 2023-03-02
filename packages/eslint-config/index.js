// module.exports = {
//   overrides: [
//     {
//       env: {
//         browser: true,
//         es2021: true,
//       },
//       extends: ['plugin:react/recommended', 'airbnb'],
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//       plugins: ['react'],
//       rules: {
//         'no-console': 'off',
//         semi: 0,
//         'import/prefer-default-export': 0,
//         'react/react-in-jsx-scope': 0,
//       },
//     },
//   ],
// }
// console.log(123);
// export function App() {
//   return <div>sf12</div>
// }

module.exports = {

  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    semi: 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
  },
}
