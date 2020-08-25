const Discord =require("discord.js")

exports.run = async (client, message, args) => {
    var list = [
        'https://i.imgur.com/NfcxP1S.gif',
        'https://i.imgur.com/bzjRr01.gif',
        'https://i.imgur.com/Own8wWU.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atacar!');
}
/*
message.channel.send(`${message.author.username} **acaba de atacar ** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Atack!')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de atacar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Coe ataca ele denovo KK')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}