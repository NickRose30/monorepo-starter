module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 2,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'prefer-arrow-callback': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'no-unused-vars': [
      2,
      { argsIgnorePattern: '_' },
    ],
    'arrow-parens': 0,
    'no-use-before-define': 1,
    'import/prefer-default-export': 0,
  },
};
