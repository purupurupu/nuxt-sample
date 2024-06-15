import stylistic from "@stylistic/eslint-plugin";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    files: ["**/*.vue"],
    rules: {
      "vue/require-v-for-key": "error",
      "vue/no-use-v-if-with-v-for": "error",
    },
  },
  {
    files: ["**/*.vue", "**/*.ts"],
    rules: {
      // "no-console": "error",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    // NOTE: false だとIDEのスタイルに合わないため、true にしている
    semi: true,
  }),
);
