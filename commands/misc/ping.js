const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Returns the Bot's ping!"),

        async execute(interaction) {
            const embed = new EmbedBuilder()
                .setColor("#EE6123")
                .setTitle('Pong!')
                .setDescription(`That took ${Math.abs(Date.now() - interaction.createdTimestamp)}ms.\n\nAPI Latency is ${Math.round(interaction.client.ws.ping)}ms`);

            await interaction.reply({ embeds: [embed] });
    },
};