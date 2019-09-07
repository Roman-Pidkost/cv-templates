const pug = require('pug');
const fs = require('fs');
const data = require('./data.json');

const compiledFunction1 = pug.compileFile('index.pug');
const compiledFunction2 = pug.compileFile('index2.pug');

fs.writeFile("./index.html", compiledFunction1({data: data}), (e) => {
    if(e) {
        console.log(e);
    }
    console.log("index was saved!");
});
fs.writeFile("./index2.html", compiledFunction2({data: data}), (e) => {
    if(e) {
        console.log(e);
    }
    console.log("index2 was saved!");
});

