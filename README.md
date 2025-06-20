# Notifier-action

Notifier to send messages to a Discord channel via webhooks.

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

### Example usage as a github action

```yaml
name: Example Workflow

on:
  push:
    branches:
      - main

jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Use my action
        uses: joel252/notifier-action@v1.0.1
        with:
          webhook_url: 'https://channel.com'
          message: 'Hello world!'
          avatar_url: 'http://example.com'
```
