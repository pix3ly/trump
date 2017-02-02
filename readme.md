# Trump

Trump is a bot for Discord built with Node.

## Configuration

Copy `config.example.js` as `config.js` and replace the token with your own.

## Customization

Trump was built with the intent to be easily customized. The upcoming sections explain how you can customize `config.js` to fit the bot to your likings.

### Commands

To add, change or get rid of a command, have a look at the `dictionary` object; it defines every command (as an object). Here's an example of such an object.

```js
foo: (arguments, respond) {
    respond(['bar']);
}
```

The key of the object is the actual command that the bot 'listens for'. You *don't* want to prefix it with an exclamation mark; the bot does this automatically.

The value is the object is a function; it's what's being executed and handles the response. As you can see it takes 2 arguments; the first is an array of arguments, and the second is a callback that handles the response. The callback requires an array of strings; this is so that you can make the bot respond with multiple messages.
