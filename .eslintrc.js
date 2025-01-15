module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-console": ["warn", { allow: ["warn", "error", "log"] }],
    "import/no-commonjs": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "import/extensions": ["error", "always", { ignorePackages: true }],
    "consistent-return": "off",
    "import/no-unresolved": "off",
  },
};
