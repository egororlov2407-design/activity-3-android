const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('www/index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/i);
if (!match) throw new Error('No inline script found');
new vm.Script(match[1], { filename: 'www/index.html:inline-script' });
const required = ['function startGame()', 'function newWord()', 'function explainCurrentWord()', 'function exportData()', 'function importDataText()', 'function lookupDictionaryWord()'];
for (const part of required) if (!html.includes(part)) throw new Error('Missing feature: ' + part);
console.log('OK: inline JavaScript parses; core gameplay, import/export and dictionary functions found.');
