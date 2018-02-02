//юзелес скрипт


const entry = require('./entry.json');
const fs = require('fs');
dist = [];
var ss = 799;
while (ss--) {
    dist.push({});
}
entry.forEach((item, i) => {
    dist[i]['title'] = item['title'];
    dist[i]['url'] = item['url'];
    dist[i]['Socket'] = item['Socket'];
    dist[i]['Process Size'] = item['Process Size'];
    dist[i]['Transistors'] = item['Transistors'];
    dist[i]['Die Size'] = item['Die Size'];
    dist[i]['Package'] = item['Package'];
    dist[i]['tCaseMax'] = item['tCaseMax'];
    dist[i]['Frequency'] = item['Frequency'];
    dist[i]['Turbo Clock'] = item['Turbo Clock'];
    dist[i]['Base Clock'] = item['Base Clock'];
    dist[i]['Multiplier'] = item['Multiplier'];
    dist[i]['Voltage'] = item['Voltage'];
    dist[i]['TDP'] = item['TDP'];
    dist[i]['Market'] = item['Market'];
    dist[i]['Production Status'] = item['Production Status'];
    dist[i]['Released'] = item['Released'];
    dist[i]['Codename'] = item['Codename'];
    dist[i]['Part#'] = item['Part#'];
    dist[i]['Memory Support'] = item['Memory Support'];
    dist[i]['# of Cores'] = item['# of Cores'];
    dist[i]['# of Threads'] = item['# of Threads'];
    dist[i]['SMP # CPUs'] = item['SMP # CPUs'];
    dist[i]['Integrated Graphics'] = item['Integrated Graphics'];
    dist[i]['Cache L1'] = item['Cache L1'];
    dist[i]['Cache L2'] = item['Cache L2'];
    dist[i]['Cache L3'] = item['Cache L3'];
    dist[i]['Cache L4'] = item['Cache L4'];
    dist[i]['Radeon HD 7310 frequency'] = item['Radeon HD 7310 frequency'];
    dist[i]['Radeon HD 7340 frequency'] = item['Radeon HD 7340 frequency'];
    dist[i]['Intel HD frequency'] = item['Intel HD frequency'];
    dist[i]['Spec Code of E0 Stepping'] = item['Spec Code of E0 Stepping'];
    dist[i]['Also available with R0 Stepping, Part #'] = item['Also available with R0 Stepping, Part #'];
    dist[i]['Also available with E0 Stepping, Part #'] = item['Also available with E0 Stepping, Part #'];
    dist[i]['Intel HD 2500 frequency'] = item['Intel HD 2500 frequency'];
    dist[i]['Intel HD 4000 frequency'] = item['Intel HD 4000 frequency'];
    dist[i]['Intel HD P4000 frequency'] = item['Intel HD P4000 frequency'];
    dist[i]['C1 Stepping'] = item['C1 Stepping'];
    dist[i]['SR0H0'] = item['SR0H0'];
    dist[i]['HashRateManually'] = item['HashRateManually'];
});
console.log('entry ' + entry.length);
console.log('dist ' + dist.length);
// fs.writeFile('distCPU.json', JSON.stringify(dist), function(err) {
//     console.log('complete');
// });

var kk = 0;
dist.forEach(element => {
    if (element.HashRateManually) kk++;
});
console.log('With Hashrate ' + kk);
console.log(Math.ceil(kk / dist.length * 100) + ' %');

