#!/usr/bin/env node

const add = require('../src/command/add');
const done = require('../src/command/do');
const ls = require('../src/command/ls');

let args = process.argv.slice(2);

let command = args.shift();
command = command ? command : 'ls';
const commandActions = {
  add: add,
  ls: ls,
  do: done,
};

commandActions[command]
  ? commandActions[command](...args)
  : console.log('命令错误');
