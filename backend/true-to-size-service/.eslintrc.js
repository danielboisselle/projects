module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
  },
  overrides: [
    {
      files: "*.test.js",
      rules: {
        "no-undef": "off",
        "import/no-extraneous-dependencies": "off"
      }
    }
  ]
};
