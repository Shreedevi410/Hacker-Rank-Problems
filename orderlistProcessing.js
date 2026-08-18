'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}


function processOrderList(orderList, orderId, state) {
    // Write your code here
    for (let i =0; i < orderList.length; i++) {
        if (orderList[i].id === orderId) {
            if (state === 'Processing') {
                orderList[i].state = 'Processing';
            }
            else if (state === 'Delivered') {
                orderList.splice(i, 1);
            }
            break;
        }
    }
    return orderList;
}
