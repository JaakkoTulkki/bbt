#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2), {
  boolean: ['help'],
  object: ['webpack'],
});

function printHelp() {
  console.log('');
  console.log('--help                     print this help');
  console.log('--webpack.someValue        add to the argument that is passed into the webpack,config.js');
  console.log('');
}

if(args.help) {
  printHelp();
}

let command = args['_'][0];
command = require(`./commands/${command}`);

command.run(args);
