'use strict'
/*Program uses fs module to watch for changes
 * to target file (target.txt) and displays a 
 * message displayed by a callback function that
 * gets called every time the file is opened/closed/changed
 */
const fs = require('fs');
fs.watch('target.txt', () => console.log('file changed!'));
console.log('Now watching target.txt for changes... ');
