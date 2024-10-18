module.exports = {
  ignores: ["node_modules/**"],
  files: ["**/*.ts", "**/*.tsx"],
  plugins: ["@typescript-eslint"],
  rules: {
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
  }
};