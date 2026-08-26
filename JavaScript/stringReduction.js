const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'stringReduction' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function stringReduction(s) {
    // Write your code here
    let a = 0;
    let b = 0;
    let c = 0;
    
    for (let ch of s) {
        if(ch === 'a') a++;
        else if (ch === 'b') b++;
        else if (ch === 'c') c++;
    }
    
    if (a === s.length || b === s.length || c === s.length) {
        return s.length;
    }
    
    if (a > 0 && b > 0 && c > 0) {
        if ((a%2 === b%2) && (b%2 === c%2)){
            return 2;
        } else {
            return 1;
        }
    }
    
    if (a > 0 && b > 0){
        return (a % 2 === b % 2) ? 2 : 1;
    }
    
    if (a > 0 && c > 0) {
        return(a % 2 === c % 2) ? 2: 1;
    }
    
    if (b > 0 && c > 0) {
        return(b % 2 === c % 2) ? 2 : 1;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = stringReduction(s);

        ws.write(result + '\n');
    }

    ws.end();
}
