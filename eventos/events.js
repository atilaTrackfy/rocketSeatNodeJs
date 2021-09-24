const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')
