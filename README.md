# notifier-action

Notifier to send notifications to a Discord channel via webhooks.

## How to use

Install the package using the following command:

```bash
npm install @Joel252/discord-notifier
```

Once done, import the `DicordNotifier` modulo into your code:

```js
import DiscordNotifier from '@Joel252/discord-notifier';

const notifier = new DiscordNotifier("https://discord.com/api/webhooks/...");
notifier.send("Hola, Discord!");
```
