const { EventEmitter } = require('events')

const ev = new EventEmitter()

//ev.on('saySomething', (message) => {
    //console.log('Eu ouvir você: ', message)
//})
ev.once('saySomething', (message) => {
    console.log('Eu ouvir você: ', message)
})

ev.emit('saySomething', "Átila")
ev.emit('saySomething', "João")
