function solve (start,end){
    'use strict';
    let message='';
    let sum = 0;
    for(let index=start;index<=end;index+=1){
        sum+=index;
        message+=`${index} `
    }
    console.log(message.trimEnd());
    console.log(`Sum: ${sum}`);
}
solve(5,10);