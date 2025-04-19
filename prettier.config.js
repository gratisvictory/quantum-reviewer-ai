/** @type {import('prettier').Config} */
const config = {
	plugins: [
		'prettier-plugin-packagejson',
		'prettier-plugin-sort-json',
		'prettier-plugin-multiline-arrays',
		'prettier-plugin-tailwindcss',
	],
	experimentalOperatorPosition: 'start',
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'lf',
	experimentalTernaries: true,
	jsxSingleQuote: true,
	printWidth: 120,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	objectWrap: 'preserve',
	trailingComma: 'all',
	useTabs: true,
	multilineArraysWrapThreshold: 1,
	overrides: [
		{
			files: ['*.json'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};

export default config;
