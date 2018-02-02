//скрипт ітерується по урлах і витягує дані 500 топ-компютерів

var cheerio = require('cheerio');
var request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const urls = require('./TOP500-urls.json');
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

                var title = $('.col-lg-9 h1')
                    .text()
                    .trim()
                    .replace(/\s\s+/g, ' ');

                var label = $('.table-condensed tbody tr th')
                    .map(function() {
                        if (
                            $(this)
                                .text()
                                .indexOf('Performance') &&
                            $(this)
                                .text()
                                .trim()
                                .replace(/\s\s+/g, ' ')
                                .indexOf('Power Consumption') &&
                            $(this)
                                .text()
                                .trim()
                                .replace(/\s\s+/g, ' ')
                                .indexOf('Software') === -1
                        ) {
                            return $(this)
                                .text()
                                .trim()
                                .replace(/\s\s+/g, ' ');
                        }
                    })
                    .get();
                var value = $('.table-condensed tbody tr td')
                    .map(function() {
                        return $(this)
                            .text()
                            .trim()
                            .replace(/\s\s+/g, ' ');
                    })
                    .get();

                if (label.length === value.length) {
                    var obj = {};
                    obj.title = title;
                    obj.url = url;
                    obj.rank = iteration
                    label.forEach((el, i) => {
                        obj[el] = value[i];
                    });

                    fs.readFile('TOP500-CPU.json', 'utf8', function(err, data) {
                        if (err) throw err;
                        let rawData = JSON.parse(data)
                        rawData.push(obj)
                        fs.writeFile('TOP500-CPU.json', JSON.stringify(rawData), function(err) {
                            console.log('complete');
                        });
                    });
                } else {
                    console.log('ERROR');
                }
            }
        );
    });
};

start();
