import * as core from '@actions/core';
import DiscordNotifier from './src/notifier.js';

try {
    // Fetch inputs from the action
    const webhookUrl = core.getInput('webhook_url');
    const message = core.getInput('message');
    const avatar = core.getInput('avatar_url');

    // Validate webhook URL
    if (!webhookUrl) {
        throw new Error('Webhook URL is required');
    }

    // Create an instance of DiscordNotifier
    core.info(`Using webhook URL: ${webhookUrl}`);
    const notifier = new DiscordNotifier(webhookUrl);

    // Send the message to Discord
    core.info(`Sending message to Discord: ${message}`);
    const response = await notifier.send(message, 'GitHub Action Notifier', avatar);
    core.info(`Notification sent: ${JSON.stringify(response)}`);

} catch (error) {
    // Log the error and set the action as failed
    core.error(`Error: ${error.message}`);
}
