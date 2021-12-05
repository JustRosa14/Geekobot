exports.run = (client, message, args) => {
    const Discord = require(`discord.js`);

    const got = require('got');
    const cheerio = require('cheerio');


    if (!args[0]) {
        return message.channel.send(`no args`).catch(console.error);
    }

    else if (args[0].toLowerCase() == `search` || args[0].toLowerCase() == `se`) {
        if (!args[1]) {
            return message.channel.send(`No search term provided`).catch(console.error);
        }
        else {
            (async () => {
                try {
                    const response = await got(`https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=${args[1].toLowerCase()}`);
                    const $ = cheerio.load(response.body);
                    // Defining the HTML parent tags
                    //const title = $('.col-md-6');
                    const error = $('#msg');
                    // Finding the desired HTML content based on the tag
                    //const output = title.find('h1').text();
                    //const output2 = title.find('strong').text();
                    const fail = error.text();
                    // If the const fail is met and contains not found... it means the package was not found
                    if (fail.includes(`No packages found matching your search`)) { return message.channel.send(`invalid package`) }


                    else { return message.channel.send(`yay`) }

                } catch (error) {
                    console.log('error:', error);
                }
            })();
        }
    }

    else if (args[0].toLowerCase() == `info` || args[0].toLowerCase() == `if`) {
        if (!args[1]) {
            return message.channel.send(`No package name provided`).catch(console.error);
        }
        else {
            (async () => {
                try {
                    const response = await got(`https://software.opensuse.org/package/${args[1].toLowerCase()}`);
                    const $ = cheerio.load(response.body);
                    // Defining the HTML parent tags
                    const title = $('.col-md-6');
                    const error = $('.container');
                    // Finding the desired HTML content based on the tag
                    const output = title.find('h1').text();
                    const output2 = title.find('strong').text();
                    const fail = error.find('h1').text();
                    // If the const fail is met and contains not found... it means the package was not found
                    if (fail.includes(`not found...`)) { return message.channel.send(`invalid package`) }
                    // If the pckage was found (aka fail remained empty) it makes an embed based on available data.
                    else {
                        const pkgembed = new Discord.MessageEmbed()
                            .setAuthor(`openSUSE® Package Search`, `https://en.opensuse.org/images/c/cd/Button-colour.png`)
                            .setTitle(`${output}`)
                            .setURL(`https://software.opensuse.org/package/${args[1].toLowerCase()}`)
                            .setDescription(`**Name:** ${output}\n **Description:** ${output2}`)
                            .setImage(`https://software.opensuse.org/images/thumbnails/${args[1]}.png`)
                            .setColor(`#81c13b`)
                            .setFooter(`openSUSE®`, `https://en.opensuse.org/images/c/cd/Button-colour.png`)
                        return message.channel.send(pkgembed).catch(console.error);
                    }

                } catch (error) {
                    console.log('error:', error);
                }
            })();
        }
    }

    else {
        return message.channel.send(`Invalid argument`).catch(console.error);
    }
}
