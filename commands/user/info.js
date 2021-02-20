exports.run = (client, message, args) => {
    const Discord = require(`discord.js`);
    
    
    const tumbleweed = new Discord.MessageEmbed()
    .setTitle(`Tumbleweed`)
    .setImage(`https://en.opensuse.org/images/f/f2/Button-laptop-colour.png`)
    .setColor(`#81c13b`)
    .setFooter(`openSUSE®`, `https://en.opensuse.org/images/c/cd/Button-colour.png`)


    const leap = new Discord.MessageEmbed()
    .setTitle(`Leap`)
    .setImage(`https://en.opensuse.org/images/f/f2/Button-laptop-colour.png`)
    .setColor(`#81c13b`)
    .setFooter(`openSUSE®`, `https://en.opensuse.org/images/c/cd/Button-colour.png`)


    const noargs = new Discord.MessageEmbed()
    .setTitle(`Noargs`)
    .setImage(`https://en.opensuse.org/images/f/f2/Button-laptop-colour.png`)
    .setColor(`#81c13b`)
    .setFooter(`openSUSE®`, `https://en.opensuse.org/images/c/cd/Button-colour.png`)


    if (!args[0]) {
        return message.channel.send(noargs).catch(console.error);
    }
    if (args[0].toLowerCase() == `leap`){
        return message.channel.send(leap).catch(console.error);
    }
    if (args[0].toLowerCase() == `tumbleweed`) {
        return message.channel.send(tumbleweed).catch(console.error);
    }

    

    
}