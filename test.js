const {Langbase} = require('langbase');
const unhandledError = require('./index.js');

(async () => {

	unhandledError();

	const langbase = new Langbase({
		apiKey: process.env.LANGBASE_API_KEY
	});

	await langbase.pipe.run({
		name: 'ai-agent',
		messages: [
			{
				role: 'user',
				content: 'Who is an AI Engineer?',
			},
		],
	});

	// Should show an unhandled error: 400 Invalid 'Authorization' header or token.

})();
