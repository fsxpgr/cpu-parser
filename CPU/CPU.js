//скрипт ітерується по урлах з файлу urls.json і дістає дані про всі процесори на сайті www.techpowerup.com
//пише в файл CPU.json
//

var cheerio = require('cheerio');
var request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const urls = require('./urls.json');
var fs = require('fs');

const waitFor = ms => new Promise(r => setTimeout(r, ms));
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

let iteration = 0;
let result = [];

async () =>{
    
}
    urls.forEach(url => {
        iteration++;
        console.log(iteration);
        request(
            {
                method: 'GET',
                url: url
            },
            function(err, response, body) {
                if (err) return console.error(err);

                $ = cheerio.load(body);
                var title = $('.cpuname').text();

                var text = $('.sectioncontainer .details table tbody tr')
                    .map(function() {
                        return $(this)
                            .text()
                            .trim()
                            .replace(/\s\s+/g, ' ');
                    })
                    .get();

                var obj = {};
                obj.title = title.trim();
                obj.url = url;
                text.forEach((el, i) => {
                    let [label, value] = el.split(':');
                    if (value) {
                        obj[label] = value.trim();
                    }
                });
                result.push(obj);
            }
        );
    });
console.log(result);

const ss = () =>
    fs.writeFile('CPU.json', JSON.stringify(result), function(err) {
        console.log('complete');
    });
setTimeout(ss, 50000);
