import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      // "no-console": "error",
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'error',
      // "vue/multi-word-component-names": "error",
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    // NOTE: false だとIDEのスタイルに合わないため、true にしている
    semi: true,
  }),
);
