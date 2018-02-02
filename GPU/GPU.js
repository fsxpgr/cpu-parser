//скрипт ітерується по урлах з файлу urls.json і дістає дані про всі відяхи на сайті www.techpowerup.com
//пише в файл CPU.json
//

var cheerio = require('cheerio');
var request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const urls = require('./GPU-urls.json');
var fs = require('fs');

const waitFor = ms => new Promise(r => setTimeout(r, ms));
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

let iteration = 0;
const start = async () => {
    await asyncForEach(urls, async url => {
        await waitFor(2000);
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
                var title = $('.gpuname').text();

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

                fs.readFile('GPU.json', 'utf8', function(err, data) {
                    if (err) throw err;
                    let rawData = JSON.parse(data);
                    rawData.push(obj);
                    fs.writeFile('GPU.json', JSON.stringify(rawData), function(err) {
                        console.log('complete');
                    });
                });
            }
        );
    });
};

start();
