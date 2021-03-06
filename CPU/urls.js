//скрипт дістає урли всіх процесорів з сайту www.techpowerup.com
//пише в файл urls.json
//


var cheerio = require('cheerio');
var request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var fs = require('fs');
var _ = require('lodash');
var urlss = [
    'https://www.techpowerup.com/cpudb/?mfgr%5B%5D=amd&mfgr%5B%5D=intel&class%5B%5D=desktop&class%5B%5D=server&released%5B%5D=y14_c&released%5B%5D=y11_14&released%5B%5D=y08_11&logo=&nCores=&process=&socket=&codename=&multi=&sort=name&q='
];

const waitFor = ms => new Promise(r => setTimeout(r, ms));
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

const start = async () => {
    await asyncForEach(urlss, async url => {
        //        await waitFor(3000);

        request(
            {
                method: 'GET',
                url: url
            },
            function(err, response, body) {
                if (err) return console.error(err);

                $ = cheerio.load(body);

                //  var title = $('.ms-rtestate-read').html();
                var urls = $('.processors tbody tr td a')
                    .map(function() {
                        return (
                            'https://www.techpowerup.com' +
                            $(this)
                                .attr('href')
                                .trim()
                        );
                    })
                    .get();
                //console.log(urls);
                console.log(urls.length);
                // fs.readFile('TOP500-urls.json', 'utf8', function(err, data) {
                //     if (err) throw err;
                //     let rawData = JSON.parse(data);
                //     console.log(rawData);
                //     var newData = rawData.concat(urls);
                //     console.log(rawData.length);
                fs.writeFile('urls.json', JSON.stringify(urls), function(err) {
                    if (err) throw err;
                    console.log('complete');
                });
            }
        );
    });
};

start();
