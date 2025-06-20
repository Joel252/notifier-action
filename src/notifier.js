import axios from 'axios';

/**
 * DiscordNotifier class to send messages to a Discord channel via webhook.
 * @class DiscordNotifier
 * @param {string}
 * @throws {Error} If webhook URL is not provided.
 */
class DiscordNotifier {
  constructor(webhookUrl) {
    if (!webhookUrl) throw new Error("Webhook URL is required");
    this.webhookUrl = webhookUrl;
  }

  /**
   * Sends a message to the Discord channel.
   * @method send
   * @param {string} message - The message to send.
   * @param {string} [username="Notifier"] - The username to display in Discord.
   * @param {string} [avatarUrl=null] - The avatar URL to display in Discord.
   * @returns {Promise<Object>} The response from the Discord API.
   * @throws {Error} If the request fails.
   */
  async send(message, username = "Notifier", avatarUrl = null) {
    const payload = {
      content: message,
      username,
    };

    if (avatarUrl) {
      payload.avatar_url = avatarUrl;
    }

    const response = await axios.post(this.webhookUrl, payload);
    return response.data;
  }
}

module.exports = DiscordNotifier;
