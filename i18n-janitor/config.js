
// Instructions:
// 1. Modify the defaultLocaleTokensFilepath and locationsToLookForTokens property values as needed
//      Paths should be relative to the project root
// 2. Once you're done, run i18n-janitor find from the project root
module.exports = {
	defaultLocaleTokensFilepath: '_locales/en/messages.json',
	locationsToLookForTokens: [
		{
			dir: 'app',
			extensions: [
				'.jsx',
				'.js'
			]
		},
		{
			dir: 'src',
			extensions: [
				'.js'
			]
		},
	],
	locales: {
		root: '_locales',
		filename: 'messages.json',
	}
};
