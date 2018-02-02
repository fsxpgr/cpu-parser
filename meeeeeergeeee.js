//скрипт намагався злити то, шо зробилось вручну, зараз юзелес


const _ = require('lodash');
const merged = require('./merged.json');
const db = require('./CPU.json');
const fs = require('fs');

let dist = [];
function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}
dist = [];
let obj = Object.assign([], db);
obj.forEach((el,i) => {
    merged.forEach(mer => {
        if (el.title === mer.title) {
            obj[i].HashRateBench = mer.HashRateBench;
        }
    });
});

console.log(obj);

// console.log(benchedd.length);
// let benched = benchedd; //removeDuplicates(benchedd, [0]);
// console.log(benched.length);
// let used = [];
// db.forEach(item => {
//     benched.forEach(bench => {
//         if (bench[0].toLowerCase().indexOf(item.title.toLowerCase()) !== -1 && used.indexOf(bench[0].toLowerCase()) === -1) {
//             if (
//                 (bench[0].toLowerCase().indexOf('x2') !== -1 || bench[0].toLowerCase().indexOf('x 2') !== -1 || bench[0].toLowerCase().indexOf('x4') !== -1) &&
//                 used.indexOf(bench[0].toLowerCase()) === -1
//             ) {
//             //    console.log(bench[1]);
//             }
//             let obj = Object.assign({}, item);
//             obj.HashRateBench = [bench[1]];
//             dist.push(obj);
//             used.push(bench[0].toLowerCase());
//         } else if (bench[0].toLowerCase().indexOf(item.title.toLowerCase()) !== -1 && used.indexOf(bench[0].toLowerCase()) !== -1) {
//             dist.forEach((el, i) => {
//                 if (bench[0].toLowerCase().indexOf(el.title.toLowerCase()) !== -1) {
//                     dist[i].HashRateBench.push(bench[1]);
//                     dist[i].HashRateBench = _.uniq(dist[i].HashRateBench);
//                 }
//             });
//         }
//         //   console.log(bench[0])
//     });
// });

// console.log(dist);
// console.log(benchedd.length);
// console.log(db.length);
fs.writeFile('result.json', JSON.stringify(obj), function(err) {
    console.log('complete');
});
// if(bench[0].toLowerCase().indexOf('x2')!==-1 || bench[0].toLowerCase().indexOf('x 2')!==-1){
//     console.log(bench[0])
// }
