const fs = require('fs');
const path = require('path');


if(fs.existsSync("Logs")) {
    fs.readdirSync("Logs").forEach(file => {
        const filepath = path.join("Logs", file);
        fs.unlink(filepath, err => {
            if (err) throw err;
        });
        console.log(`delete files...${file}`);
    });
        fs.rmdirSync("Logs");
}