const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '/input');

let result = [];

for (let i = 1; i <= 10; i++) {

    const textIn = fs.readFileSync(`${dirPath}/a${i}.txt`, 'utf-8');

    let lines = textIn.split(/\r?\n/);

    if (lines[lines.length - 1] === '') {
        lines.pop();
    }

    for (let j = 0; j < i && j < lines.length; j++) {
        result.push(lines[j]);
    }
}
fs.writeFileSync(`${__dirname}/ex4result.txt`, result.join('\n'), 'utf-8');

console.log('File created successfully!');