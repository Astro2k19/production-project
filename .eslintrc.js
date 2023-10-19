module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'i18next',
		'react-hooks',
		'authoring-project-plugin',
		'unused-imports',
	],
	ignorePatterns: ['**/*.stories.{ts,tsx}'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'no-unused-vars': 'off',
		'no-duplicate-case': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/prefer-ts-expect-error': 'off',
		'react/display-name': 'off',
		// only Text in react files
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				onlyAttribute: [''],
				ignoreFiles: ['**/*.stories.{ts,tsx}'],
				exclude: ['"**/*.stories.{ts,tsx}"'],
			},
		],
		'@typescript-eslint/consistent-type-assertions': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'authoring-project-plugin/relative-path-checker': [
			'error',
			{ alias: '@' },
		],
		'authoring-project-plugin/public-api-import-checker': [
			'error',
			{
				alias: '@',
				testFilePatterns: [
					'**/*.stories.*',
					'**/*.mock.*',
					'**/*.test.*',
					'**/StoreDecorator.tsx',
				],
			},
		],
		'authoring-project-plugin/import-layer-checker': [
			'error',
			{
				alias: '@',
				ignoreImportPatterns: [
					'**/storeProvider',
					'**/testing',
					'**/index.scss',
				],
			},
		],
		'unused-imports/no-unused-imports': 'error',
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: './**.module.*',
						group: 'internal',
						position: 'after',
					},
				],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: false,
				},
			},
		],
	},
};
