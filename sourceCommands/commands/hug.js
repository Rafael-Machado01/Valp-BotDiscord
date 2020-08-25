const Discord =require("discord.js")

exports.run = async (client, message, args) => {
    var list = [
        'https://i.imgur.com/aw8mrnR.gif',
        'https://i.imgur.com/XyttAWa.gif',
        'https://i.imgur.com/pzvLSvw.gif',
        'https://i.imgur.com/1XoBK8n.gif',
        'https://i.imgur.com/b9Jdlqw.gif',
        'https://i.imgur.com/MCVmGyv.gif',
        'https://i.imgur.com/gMel1Xg.gif',
        'https://i.imgur.com/v9y27zK.mp4',
        'https://i.imgur.com/hXIdLNZ.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um abraço!');
}
/*
message.channel.send(`${message.author.username} **acaba de dar um abraço** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraço')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um abraço em  ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('so fica no abraço?.-.')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}