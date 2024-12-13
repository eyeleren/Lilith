import { SlashCommandBuilder } from "discord.js";

const shutdown = new SlashCommandBuilder()
  .setName("shutdown")
  .setDescription("Shuts down the bot gracefully.");

export default shutdown;
