/* eslint-disable @typescript-eslint/no-var-requires */
const FormData = require('form-data');
const accessToken = require('./rollbarToken.js');
const fetch = require('node-fetch');
const fs = require('fs');

const endpoint = 'https://api.rollbar.com/api/1/sourcemap/download';

const publicPath = 'https://academy.cnn.com/theme/academy/js/dist/';
const version = '1.0.0';

const pattern = /bundle\.js$/;
const distDir = './dist/';
const distDirList = fs.readdirSync(distDir);

const sourceMapContents = fs.readFileSync(distDir + 'bundle.js.map', { encoding: 'utf-8' });
const form = new FormData();
form.append('access_token', accessToken);
form.append('version', version);
form.append('minified_url', '//academy.cnn.com/theme/academy/js/dist/bundle.js');
form.append('source_map', sourceMapContents, {
	contentType: 'application/json',
	filename: 'bundle.js.map',
});

const run = async () => {
	const res = await (0, fetch)(endpoint, {
		body: form,
		method: 'POST',
	});
	const text = await res.text();
	console.log(text);
};
run();
