module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/base', 'airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {},
};
