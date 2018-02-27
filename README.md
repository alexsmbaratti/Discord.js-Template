# Tutorial for Discord.js (a.k.a. How to Make Your Own Discord Bot)

![alt text](https://img.shields.io/badge/maintenance-active-brightgreen.svg "Maintenance")

**Note:**
I'm busy as of writing this and this tutorial is not complete. Whatever state this file is in, **please remember to add a .gitignore** and hide `config.json` in it. `config.json` will contain your API keys for Discord! If this is comprimised, others may have access to your bot and how it responds with commands.

**Note from me in the future:**
This is an import from a Gist I made. I figured GitHub would be a better way for people to find this tutorial. Feel free to let me know if I missed anything!

To register your soon-to-be bot with Discord, go to their [developer portal](https://discordapp.com/developers/applications/me) and create a new app. Give it a name at the very least. Click 'Create App.' On the next screen, click 'Create a Bot User.' Note the values `Client ID`, `Client Secret`, and `Token`.

I recommend creating a bot testing server in Discord to test out your bot without disturbing others. Plus, you'll be guarenteed the permissions needed to add a bot to your server. Add your client ID to the URL `https://discordapp.com/oauth2/authorize?client_id=[CLIENT_ID]&permissions=0&scope=bot` where specified and go to the link. Sign into Discord and add your bot to the server you wish.

On the programming side, start by forking this repository. Clone your forked repository where you normally clone projects (Typically in a `git` folder). The cloned folder will be refered to as the project folder from now on.

If you have [Atom](https://atom.io), I recommend using that for the project, however if you have another preference, feel free to use it. Open your project folder in Atom and open the `config.json` file. Replace the placeholder text (`YOUR_TOKEN` for example) with their respective values from the developer portal. Token is a mandatory and your program will not run without a valid token. Make sure you do not remove the quotes.

Navigate to it using your terminal and use `npm init`. Package name can be your bot's name. Version can be left blank. Add a short description. Entry point, for this tutorial, should be `app.js`. Test command is `node app.js`. Git repository, keywords, and license can be left blank. Author should be your GitHub username or first name. When it asks you to confirm, type `y` for yes. Then, type `npm install --save discord.js`. 

With these steps completed, type `node app.js` into your terminal. Make sure that you've navigated to your project folder before running this. If see see `Logged in as [YOUR_USERNAME]`, your code works and your bot is online! Your bot will only be online as long as this window is open/process is running. Using control-C will end the process. If you are interested in keeping this running 24/7, consider using a dedicated computer, such as a Raspberry Pi, or using EC2 through AWS. 

To create a command for your bot, open `app.js` in your prefered text editor. In the if statement, replace `YOUR_PREFIX` with the prefix you'd like to create. This is typically done by taking the first letter of your bot's name and appending some form of punctuation. For example, Tatsumaki Bot, a popular bot, uses `t!` and `t@` (for moderation commands). You should make sure your prefix does not use a popular bot's prefix as the user may recieve multiple responses from multiple bots. 

Next, think of a command. For this tutorial, a simple build command will be used. Replace `COMMAND` in the switch statement with `build`. Make sure you do not use any capitals for your command, because line 14 converts the user's message to all lower-case for user-friendly parsing. Within this case block, type `msg.channel.send("Build: `" + build + "`");`. This finds the channel the message was sent with (`msg.channel`) and uses the `send()` method to send the string in the parameter to that channel. Save your code and run it by using `node app.js` (Use control-C to end your process if your bot is still running). In Discord, go to the server you added your bot to earlier, and type `[YOUR_PREFIX]build`. For example, I would type `a!build` for my bot.

A switch statement is used because when enough commands have been added, if statements tend to clutter up code. While switch statements make it a bit harder to create commands that require the `includes()` method, I prefer it for aesthetic purposes. A series of if statements may be used if prefered.

### GuildMembers vs. Users
The difference between GuildMembers and Users can be confusing at first glance. In short, a GuildMember is tied to a specific guild (fancy term for Discord server) and a user is not tied to anything. The reason they're different is because you may want to get the role of a specific person or their nickname (both of which are Guild specific).

Both objects share values but it's important to know the differences. A GuildMember has a nickname variable but not a username variable and vise versa with User. In addition, the Message variable can return both a GuildMember and a User. `msg.author` returns a user and `msg.member` returns a GuildMember. It can get confusing fast if you're not paying attention.

### Handling a Message
Every time your bot detects a message, it will go through the block of code headed by `client.on('message', msg => {`. `msg` is the variable you will find yourself using a lot when handling messages. `msg` is a Message object. You can learn about all it has to offer at its [documentation page](https://discord.js.org/#/docs/main/stable/class/Message).

## Coming Soon
* Understanding the Documentation
* Better organization (i.e. Headers and Sections)
* Embeds

## Helpful Links
* [The Official Discord.js Website](http://discord.js.org) (Documentation)
* [Atom](https://atom.io)
