const Discord = require("discord.js");
var config = require('./config.json');
const client = new Discord.Client();

const build = "0.0.1"; // Change with each update

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  console.log("Build: " + build);
  setGame("a game"); // Playing a game
});

client.on('message', msg => {
  if (msg.content.toLowerCase().substring(0, 2) == `YOUR_PREFIX`) { // Replace YOUR_PREFIX with something like a!
    switch (msg.content.toLowerCase().substring(2)) {
      case `COMMAND`: // Add your commands here
        break;
    }}});

client.login(config.TOKEN);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setGame(game) {
  console.log("Set current game to " + game);
  client.user.setPresence({
    status: 'online',
    game: {
      name: game
    }
  });
}
