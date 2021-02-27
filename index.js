const bot = require('./src/bot');
const client = new bot.Discord.Client();


client.once("ready", () => {
    bot.print('Bot connecté !');
})


client.on('message', message => {
    if (!message.content.toLowerCase().startsWith(bot.config.prefix)) return;
    message.content = bot.removeExtraSpacesFrom(message.content)
    message.content = message.content.replace(/\n|\r/g, '');

    var args = message.content.slice(bot.config.prefix.length).trim().split(/ +/);
    if (!args[0]) return bot.embed(message, "Parlez moi ou posez moi des questions, exemple : `pomme ca va ?`")
    if (bot.talking_apple.run(message, args)) return;

    bot.derror(message, "Désolé je ne comprend pas :confused:");
})


client.login(bot.config.token);