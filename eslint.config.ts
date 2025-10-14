import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Bazowa konfiguracja TypeScript
  ...tseslint.configs.recommended,

  // Konfiguracja Astro
  ...eslintPluginAstro.configs.recommended,

  // Twoje custom reguły
  {
    files: ['**/*.{ts,tsx,astro}'],
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', '4'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Ignorowanie plików
  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  }
);
