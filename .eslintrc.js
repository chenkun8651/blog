module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
  plugins: [],
  rules: {
    "quotes": [0, "single"],
    "quote-props": [0, "always"]
  }
};
