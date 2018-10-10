'use strict'
/*
 * A program that takes an argument
 * for file to watch for changes for
 * it and spawns a process in the command
 * line
 *
 * This program will spawn a java process
 *
 * */

const fs = require('fs');
const spawn = require('child_process').spawn;
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

fs.watch(filename, () => {
	const ls = spawn('ls', ['-l', '-h', filename]);
	ls.stdout.pipe(process.stdout);
	
	const toJava = spawn('java', ['testJavaJSConnection', 'Joe', 'Lo']);
	toJava.stdout.pipe(process.stdout);

	const newPerson = spawn('java', ['TestPerson', "Joe", 'M', '19']);
	newPerson.stdout.pipe(process.stdout);
});


console.log(`Now watching ${filename} for changes... `);

