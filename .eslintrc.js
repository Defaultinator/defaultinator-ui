module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': [0],
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off', // TODO: Add all prop types in a refactor
    'react/require-default-props': 'off', // TODO: Same as above
    'react/default-props-match-prop-types': 'off', // TODO: Same as above
    'react/forbid-prop-types': 'off', // TODO: Same as above
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.stories.js', 'src/setupTests.js'] }],
  },
};
