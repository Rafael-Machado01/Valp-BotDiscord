const Discord =require("discord.js")

exports.run = async (client, message, args) => {
    var list = [
        'https://media.tenor.com/images/f6026cb89b4712a3f1623f5cbbd5654e/tenor.gif ', 'https://media.tenor.com/images/c19f61b3c22e24b9fd84fe8542e355fd/tenor.gif ',
        'https://media.tenor.com/images/2e9dc79036e50faea2cebb3d69eed51d/tenor.gif',
      ' https://media.tenor.com/images/72c1b7f5be21e45cb52869d220eec8ce/tenor.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tiro!');
}
/*
message.channel.send(`${message.author.username} **acaba de atacar ** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Opannn')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de acertar um headshot no noob: ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Que ota?')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
