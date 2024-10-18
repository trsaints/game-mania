module.exports = {
  ignores: ["node_modules/**"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {
        semi: "off",
        "@typescript-eslint/semi": ["error", "never"],
      },
    },
  ],
};