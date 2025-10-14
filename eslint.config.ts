import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
	// Bazowa konfiguracja TypeScript
	...tseslint.configs.recommended,

	// Konfiguracja Astro
	...eslintPluginAstro.configs.recommended,

	// Wyłączenie reguł ESLint konfliktujących z Prettier
	eslintConfigPrettier,

	// Twoje custom reguły
	{
		files: ['**/*.{ts,tsx,astro,js}'],
		rules: {
			// Usuwamy reguły formatowania - zostawiamy je Prettierowi
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'off',
			// Prettier sam zadba o te reguły
			// 'quotes': 'off',
			// 'semi': 'off',
			// 'indent': 'off',
		},
	},

	// Ignorowanie plików
	{
		ignores: ['dist/', 'node_modules/', '.astro/'],
	}
);
