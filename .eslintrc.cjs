module.exports = {
  ignores: ["node_modules/**"],
  files: ["**/*.ts", "**/*.tsx"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
  }
};