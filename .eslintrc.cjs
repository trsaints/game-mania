module.exports = {
  ignores: ["node_modules/**"],
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    "@typescript-eslint": require("@typescript-eslint/eslint-plugin")
  },
  rules: {
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
  }
};