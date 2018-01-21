var cheerio = require('cheerio');
var request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var fs = require('fs');
var _ = require('lodash');
var urlss = [1,
    21,
    41,
    61,
    81,
    101,
    121,
    141,
    161,
    181,
    201,
    221,
    241,
    261,
    281,
    301,
    321,
    341,
    361,
    381,
    401,
    421,
    441,
    461,
    481,
    501,
    521];

const waitFor = ms => new Promise(r => setTimeout(r, ms));
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

const start = async () => {
    await asyncForEach([1], async url => {
        //   await waitFor(3000);

        request(
            {
                method: 'GET',
                url: `http://www.game-debate.com/hardware/index.php?pid=1506&cpu=APU%20A10-5800B%20Quad-Core`
            },
            function (err, response, body) {
                if (err) return console.error(err);

                $ = cheerio.load(body);
                console.log(body)
              //  var title = $('.ms-rtestate-read').html();
                var urls = $('.cpu_name h3 a').map(function () {
                        return
                        $(this).attr('href').trim()

                    })
                    .get();
                console.log(urls)
                // fs.readFile('urls.json', 'utf8', function(err, data) {
                //     if (err) throw err;
                //     let rawData = JSON.parse(data)
                //     console.log(rawData)
                //     var newData= rawData.concat(urls);
                //     console.log(rawData.length);
                //     fs.writeFile('urls.json', JSON.stringify(newData), function(err) {
                //         if (err) throw err;
                //         console.log('complete');
                //     });
                // });
            }
        );
    });
};

start();
