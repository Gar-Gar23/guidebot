exports.run = async (client, message, args, level) => {
        message.channel.send('Hello' + message.author.username);
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hello",
  category: "Miscelaneous",
  description: "A template",
  usage: "command arg1 arg2 [...]" 
};