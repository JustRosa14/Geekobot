const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/user/", (err, files) => {
  if (err) return console.error(err);
  console.log(`LOADING USER COMMANDS`)
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/user/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loaded: ${commandName}.js`);
    client.commands.set(commandName, props);
  });
  console.log(``)
});

fs.readdir("./commands/admin/", (err, files) => {
  if (err) return console.error(err);
  console.log(`LOADING ADMIN COMMANDS`)
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/admin/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loaded: ${commandName}.js`);
    client.commands.set(commandName, props);
  });
  console.log(``)
});

  client.login(config.token);
  client.on('ready', () => {
    client.user.setActivity('Geekobot has loaded')
  }); 

