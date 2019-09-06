const pug = require('pug');
const fs = require('fs');
const data = require('./data.json');

const compiledFunction = pug.compileFile('index.pug');

fs.writeFile("./index.html", compiledFunction({data: data}), (e) => {
    if(e) {
        return console.log(e);
    }
    console.log("The file was saved!");
});


console.log();
