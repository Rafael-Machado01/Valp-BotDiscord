const Discord =require("discord.js")

exports.run = async (client, message, args) => {
    var list = [
        'https://i.imgur.com/8WNDk37.gif',
        'https://i.imgur.com/oS4iFNq.gif',
        'https://i.imgur.com/6sYP1TG.gif',
        'https://i.imgur.com/TgoctBw.gif',
        'https://i.imgur.com/tWFmYiq.gif',
        'https://i.imgur.com/gV00AHN.gif',
        'https://i.imgur.com/qe836Hz.gif',
        'https://i.imgur.com/tWFmYiq.gif',
        'https://i.imgur.com/fJVx48e.gif',
        'https://i.imgur.com/6a5XWKN.gif',
        'https://i.imgur.com/6vSljSF.jpg',
        'https://i.imgur.com/4SJaRTS.gif',
        'https://i.imgur.com/JCe0K8D.gif',
        'https://i.imgur.com/JhwgoYq.gif', 
        'https://i.imgur.com/20JCkkv.gif',
        'https://i.imgur.com/Pm7Qvu5.gif',
        'https://i.imgur.com/66wq1DI.gif',
        'https://i.imgur.com/BHLAvM6.gif' ,
        'https://i.imgur.com/R2DLyb1.gif',
        'https://i.imgur.com/DGdIaCL.gif',
        'https://i.imgur.com/xDELgoQ.gif',
        'https://i.imgur.com/umNOGwm.gif',
        'https://i.imgur.com/DkPrJ9B.gif', 
        'https://i.imgur.com/zOalfsJ.gif',
        'https://i.imgur.com/EcXO7kt.gif',
        'https://i.imgur.com/RtWNDDO.gif',
        'https://i.imgur.com/HgZTzFo.gif',
        'https://i.imgur.com/gb2ExI2.gif'
];
    var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fazer um jutsu!');
}
/*
message.channel.send(`${message.author.username} **acaba de atacar ** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('jutsu!')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de fazer um  jutsu em  ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('So manda outro!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}