const fs = require('fs');
const color = require('cli-color')
const hypesquad = require("hypesquad-changer");
const tokens = (fs.readFileSync('./tokens.txt')).toString().replace(/[\r]/g,'').split('\n');

tokens.forEach(token => {
        console.log(hypesquad.changer("Random", token))
        console.log(color.magentaBright("Your house has been changed to random!"))
})
