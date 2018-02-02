//скрипт витягує урли 500ста компютерів


var cheerio = require('cheerio');
var request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var fs = require('fs');
var _ = require('lodash');
var urlss = [
    'https://www.top500.org/list/2017/11/?page=1',
    'https://www.top500.org/list/2017/11/?page=2',
    'https://www.top500.org/list/2017/11/?page=3',
    'https://www.top500.org/list/2017/11/?page=4',
    'https://www.top500.org/list/2017/11/?page=5'
];

const waitFor = ms => new Promise(r => setTimeout(r, ms));
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

const start = async () => {
    await asyncForEach(urlss, async url => {
        await waitFor(3000);

        request(
            {
                method: 'GET',
                url: url
            },
            function(err, response, body) {
                if (err) return console.error(err);

                $ = cheerio.load(body);

                //  var title = $('.ms-rtestate-read').html();
                var urls = $('.table-condensed tbody tr td a')
                    .map(function() {
                        if (
                            $(this)
                                .attr('href')
                                .indexOf('site') === -1
                        ) {
                            return (
                                'https://www.top500.org' +
                                $(this)
                                    .attr('href')
                                    .trim()
                            );
                        }
                    })
                    .get();
                console.log(urls.length);
                fs.readFile('TOP500-urls.json', 'utf8', function(err, data) {
                    if (err) throw err;
                    let rawData = JSON.parse(data)
                    console.log(rawData)
                    var newData= rawData.concat(urls);
                    console.log(rawData.length);
                    fs.writeFile('TOP500-urls.json', JSON.stringify(newData), function(err) {
                        if (err) throw err;
                        console.log('complete');
                    });
                });
            }
        );
    });
};

start();
