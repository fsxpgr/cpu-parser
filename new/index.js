//скрипт мерджив вручну введені дані з даними з сайту www.techpowerup.com


const entry = require('./convertcsv.json');
const origin = require('./CPU.json');
const fs = require('fs');

var iter = 0;
origin.forEach((item, i) => {
    // console.log(i)
    //console.log(item[1], item[8])
    //  console.log(item.title)
    if(item.sss){
        console.log(item.title)
    }
    entry.forEach(el => {
        
        if (item.title === el[7]) {
            item.sss = el[8];
        }
    });
});
var ss = 0
origin.forEach(el => {
   // console.log(el.sss)
    if(el.sss){
        ss++
    }
});

console.log(ss);
console.log(Math.ceil(ss / origin.length * 100) + ' %');
// console.log('entry ' + entry.length);
// console.log('dist ' + dist.length);
// fs.writeFile('distGPU.json', JSON.stringify(dist), function(err) {
//     console.log('complete');
// });

var kk = 0;
// dist.forEach(element => {
//     if (element.HashRateManually) kk++;
// });
// console.log('With Hashrate ' + kk);
// console.log(Math.ceil(kk / dist.length * 100) + ' %');

