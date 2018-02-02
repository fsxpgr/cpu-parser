//скрипт дістає урли всіх процесорів з сайту ark.intel.com
//пише в файл Intel-urls.json
//


var cheerio = require('cheerio');
var request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var fs = require('fs');
var _ = require('lodash');
var urlss = [
    'https://ark.intel.com/products/series/123588/Intel-Core-X-series-Processors',
    'https://ark.intel.com/products/series/122593/8th-Generation-Intel-Core-i7-Processors',
    'https://ark.intel.com/products/series/122597/8th-Generation-Intel-Core-i5-Processors',
    'https://ark.intel.com/products/series/79666/Legacy-Intel-Core-Processors',
    'https://ark.intel.com/products/series/75025/4th-Generation-Intel-Core-i3-Processors',
    'https://ark.intel.com/products/series/75024/4th-Generation-Intel-Core-i5-Processors',
    'https://ark.intel.com/products/series/75023/4th-Generation-Intel-Core-i7-Processors',
    'https://ark.intel.com/products/series/94028/5th-Generation-Intel-Core-M-Processors',
    'https://ark.intel.com/products/series/84981/5th-Generation-Intel-Core-i3-Processors',
    'https://ark.intel.com/products/series/84980/5th-Generation-Intel-Core-i5-Processors',
    'https://ark.intel.com/products/series/84979/5th-Generation-Intel-Core-i7-Processors',
    'https://ark.intel.com/products/series/94025/6th-Generation-Intel-Core-m-Processors',
    'https://ark.intel.com/products/series/88394/6th-Generation-Intel-Core-i3-Processors',
    'https://ark.intel.com/products/series/88393/6th-Generation-Intel-Core-i5-Processors',
    'https://ark.intel.com/products/series/88392/6th-Generation-Intel-Core-i7-Processors',
    'https://ark.intel.com/products/series/95542/7th-Generation-Intel-Core-m-Processors',
    'https://ark.intel.com/products/series/95545/7th-Generation-Intel-Core-i3-Processors',
    'https://ark.intel.com/products/series/95543/7th-Generation-Intel-Core-i5-Processors',
    'https://ark.intel.com/products/series/95544/7th-Generation-Intel-Core-i7-Processors',
    'https://ark.intel.com/products/series/122588/8th-Generation-Intel-Core-i3-Processors'
];

const waitFor = ms => new Promise(r => setTimeout(r, ms));
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

const start = async () => {
    await asyncForEach(urlss, async url => {
        await waitFor(1000);
        request(
            {
                method: 'GET',
                url: url
            },
            function(err, response, body) {
                if (err) return console.error(err);

                $ = cheerio.load(body);

                var urls = $('.ark-product-name a')
                    .map(function() {
                        return (
                            'https://ark.intel.com/' +
                            $(this)
                                .attr('href')
                                .trim()
                        );
                    })
                    .get();

                fs.readFile('urls.json', 'utf8', function(err, data) {
                    if (err) throw err;
                    let rawData = JSON.parse(data)
                    console.log(rawData)
                    var newData= rawData.concat(urls);
                    console.log(rawData.length);
                    fs.writeFile('urls.json', JSON.stringify(newData), function(err) {
                        if (err) throw err;
                        console.log('complete');
                    });
                });
            }
        );
    });
};

start();
