exports.run = (client, message, args) => {
    const Discord = require(`discord.js`);

const request = require('request-promise');
const cheerio = require('cheerio');

request(`https://software.opensuse.org/package/fdfsdfd`, (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const title = $('.container');

        const output = title.find('h1').text();

        console.log(output);
    }
    else {
        console.log(err);
    }

});
}