'use strict';

function fillArrays (nums) {
    let arr = [];
    if (nums <= 0) {
        arr.push("This is not a valid number.")
        return arr;
    }
    for (let i = 0; i < nums; i++) {
        arr[i] = i+1;
    }
    return arr;
}

function randParts (givers, receivers) {
    let data = [];
    for (let i = 0; i < participants; i++) {
        let send = i;
        let rec = Math.floor((Math.random() * receivers.length) + 1) - 1;
        if (givers[send] == receivers[rec]) {
            let rec = Math.floor((Math.random() * receivers.length) + 1) - 1;
            data[i] = givers[send] + '@' + receivers[rec];
            receivers.splice(receivers.indexOf(receivers[rec]), 1); 
        } else {
            data[i] = givers[send] + '@' + receivers[rec];
            receivers.splice(receivers.indexOf(receivers[rec]), 1);       
        }
    }
    return data;
}

function splitReturn (arr) {
        let randGivers = arr.map(x => x.split('@')[0]);
        let randReceivers = arr.map(x => x.split('@')[1]);
        return [randGivers, randReceivers];
}