const Discord =require("discord.js")

exports.run = async (client, message, args) => {
    var list = [
        'https://i.imgur.com/NxlsVkb.mp4',
        'https://i.imgur.com/3j4aMzu.gif',
        'https://i.imgur.com/sh65bNl.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa!');
}
/*
message.channel.send(`${message.author.username} **acaba de dar um tapa** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Tapa')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um tapa em  ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('kk vai só no ódio')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}