module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('HELP YOU!');

  m.edit(`Nossos Comandos!\n Adms: ban clear kick reload say \nDiversão: coinflip emoji headshot hug kiss ping slap uptime \n🌀Meu prefixo é '='`
  );
};