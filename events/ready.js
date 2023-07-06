const { Events } = require('discord.js')

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Election Bot has started!`);
        client.user.setStatus("idle");
	},
};