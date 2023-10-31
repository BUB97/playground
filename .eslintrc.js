module.exports = {
  env: { browser: true, es2020: true, node: true, es6: true },
  extends: [
    "eslint:recommended",
    "tencent",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    // 启用额外规则
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],

    // 禁用基础配置汇总的规则
    "for-direction": "off",
  },
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
    },
  ],
};
