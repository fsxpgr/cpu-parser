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

const start = async () => {
    await asyncForEach(urls, async url => {
        await waitFor(2000);
        request(
            {
                method: 'GET',
                url: url
            },
            function(err, response, body) {
                if (err) return console.error(err);

                $ = cheerio.load(body);

                var title = $('.product-family-title-text h1').text();

                var label = $('.blade-inside ul li')
                    .find('.label')
                    .map(function() {
                        return $(this)
                            .text()
                            .trim();
                    })
                    .get();
                var value = $('.blade-inside ul li')
                    .find('.value')
                    .map(function() {
                        return $(this)
                            .text()
                            .trim();
                    })
                    .get();

                if (label.length === value.length) {
                    var obj = {};
                    obj.title = title;
                    obj.url = url;
                    label.forEach((el, i) => {
                        obj[el] = value[i];
                    });

                    fs.readFile('IntelCPUs.json', 'utf8', function(err, data) {
                        if (err) throw err;
                        let rawData = JSON.parse(data)
                      //  let CPU = JSON.parse(obj)
                        rawData.push(obj)
                        fs.writeFile('IntelCPUs.json', JSON.stringify(rawData), function(err) {
                            console.log('complete');
                        });
                    });
                }
                else{
                    console.log("ERROR")
                }
            }
        );
    });
};

start()