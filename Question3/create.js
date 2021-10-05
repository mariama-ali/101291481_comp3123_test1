const fs = require('fs');

if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

process.chdir("Logs");

let i = 0
do{
    i++;
    const filename = `log${i}.txt`;
    fs.appendFile(filename, 'some text', (err) => {
    });
    console.log(filename);
}while(i < 10)