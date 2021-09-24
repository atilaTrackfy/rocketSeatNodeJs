const myModule = require('./flag.js');

const name = myModule.getFlag('--name');
const greeting = myModule.getFlag('--greeting');

console.log(greeting,name);
