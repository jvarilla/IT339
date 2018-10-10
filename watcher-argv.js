'use strict'
/*
 * A program that takes an argument
 * for file to watch for changes for
 *
 * */

const fs = require('fs');
const filename = process.argv[2];
/*
 * process.argv is an array that has the
 * terms typed into the terminal
 * EX: IN: node watcher-argv.js target.txt
 * OUT: process.argv = [node, watcher-argv.js, target.txt]
 */

if (!filename) { //check if no target file has been specified and return error
	throw Error('A file to watch must be specified');
}

fs.watch(filename, () => console.log(`File ${filename} changed!`));

console.log(`Now watching ${filename} for changes... `);

