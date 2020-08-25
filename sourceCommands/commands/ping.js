module.exports.run = async (client, message, args) => {
    const m = await message.channel.send('pong!');
  
    m.edit(`🚀 **| Pong!**\n💎Seu Ping: **${m.createdTimestamp -
        message.createdTimestamp}ms.**\n😀Ping Do Bot: **${Math.round(
        client.ws.ping
      )}ms**`
    );
  };