/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const manifest = JSON.parse(fs.readFileSync('./dist/manifest.json'));
const filename = manifest['main.js'].replace(/^auto/, '');
fs.writeFileSync('../templates/js_bundle_filename.mustache', filename);
