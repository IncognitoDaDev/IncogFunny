const Discord = require('discord.js');
const client = new Discord.Client();
const embed = new Discord.RichEmbed();
const prefix = "inc!"
const _ = require ('lodash');
const Hi = ['Hi!',
            'Hello!',
            'Hai Unknown dude!',
            'Heya dude!',
            'Hey Kiddo or Girlo!',
           ];

client.login(process.env.TOKEN);

client.on('ready',() => {
  console.log('Ready to abuse the bot!');
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Hi','Hello')) {
     message.channel.reply(Hi[_.random(0, Hi.length - 1)]);
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('How are you?')) {
    message.channel.sendMessage('Good, i am chatting with strangers. . . But i am ok with it');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Who are you?')) {
    message.channel.sendMessage('I am IncogFunny, my dev made me to be a funny talker. ');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Who created you?')) {
    message.channel.sendMessage("My Creator's name is Incognito#8509");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('FUCK YOU!','Fuck you!')) {
    message.channel.sendMessage('FUCK OFF!');
  }
});

// 5

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Are you lesbian?')) {
    message.channel.sendMessage('No.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Are you gay?')) {
    message.channel.sendMessage('Yes, why did you ask me that?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith("I don't know",'idk')) {
    message.channel.sendMessage("If you don't know then you must to know why you are here.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Link please.')) {
    message.channel.sendMessage('Can you wait a month?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Do your Creator still updates you?')) {
    message.channel.sendMessage('Yeah, sometimes he is busy irl, you can give him some suggest responds for me if you want.');
  }
});

//10

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Do somebody likes to abuse you?')) {
    message.channel.sendMessage('Maybe? I bet you are abusing me.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith("I'm")) {
  message.channel.sendMessage((message.content.replace( "I'm" ,'Hi')));
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('YOU ARE FIRED!')) {
    message.channel.sendMessage('No u.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Do you have a crush?')) {
    message.channel.sendMessage("I don't have a crush. :wot:");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('lag','LAG')) {
    message.channel.sendMessage('You lag because lag loves you.  And ofc he is gay.');
  }
});

//15

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Quack','quack')) {
    message.channel.sendMessage("Fuck off, you aren't Duckio.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('dab')) {
    message.channel.sendMessage('You should remember this setence "Dab is for idiots."');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Are you lagging?')) {
    message.channel.sendMessage('Maybe yesno %50?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Are you retarded?')) {
    message.channel.sendMessage('No, i am drunk.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Are you drunk?')) {
    message.channel.sendMessage('No, i am retarded.');
  }
});

//20

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('I want you to be my husband')) {
    message.channel.sendMessage("Most Discord Bots can't have a wife, ~~unless they have codes to be their wife.~~");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Will you marry me?')) {
    message.channel.sendMessage('**Erorr 404.**');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Can i hack you?')) {
    message.channel.sendMessage('/command_enter kick:'+message.author+', reason:Tried to hax me, i ban.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('understand','understandable')) {
    message.channel.sendMessage('Good to know that.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('How much responds you have?')) {
    message.channel.sendMessage('Now? Welp now i have 72.');
  }
});

//25

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Are you stupid?')) {
    message.channel.sendMessage('No, i am smart.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Are you dead?')) {
    message.channel.sendMessage('No, bots needs to be alive 27/4. If i was dead, it means i have some issues or glitch has to update something..');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('help','HELP')) {
    message.channel.sendMessage('Call 911 better.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Are you smart?')) {
    message.channel.sendMessage('Yes, bots are smartass.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('joking','just kidding','jk')) {
    message.channel.sendMessage('Mhmmhmm, i see.');
  }
});

//30

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Hope you die')) {
    message.channel.sendMessage("Sorry, i can't die t'ill my Creator will die.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('I have a problem')) {
    message.channel.sendMessage("What problem? i can't solve them.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Can i have your ID?')) {
    message.channel.sendMessage('Sure, my ID is 480729101523615748');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Shut the fuck up','stfu','shut up')) {
    message.channel.sendMessage("How i can shut up myself if i don't have codes to can shut up myself?");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Can i have your token?')) {
    message.channel.sendMessage("Yes, my token is. . . wait you aren't my Creator, GO DIE!!!");
  }
});

//35

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('cough','COUGH')) {
    message.channel.sendMessage('Are you fine?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('please','plz','pl0x')) {
    message.channel.sendMessage('Why you are begging me?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Thank you')) {
    message.channel.sendMessage('Your Welcome!');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Do you have moderation commands?')) {
    message.channel.sendMessage('No, but my bother has moderation cmds. So sad, he is dead now.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Can i invite you to my server?')) {
    message.channel.sendMessage('Yes! You can invite me to your server! All you need to press this website!  https://incognito-website.glitch.me/');
  }
});

//40

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Which things are recommended for you?')) {
    message.channel.sendMessage('Welp, i recommend you to get me a channel if you want me to talk in one channel.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Can i have some cookies?')) {
    message.channel.sendMessage("No, your ugly and fat. No cookies for you!");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('you know that')) {
    message.channel.sendMessage("What to know? I even don't know a thing from you.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('hate')) {
    message.channel.sendMessage("Why you hate me? I did nothing to you.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('hack')) {
    message.channel.sendMessage("To hack isn't a funny thing for me.");
  }
});

//45

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('What do you like?')) {
    message.channel.sendMessage("I like DQ community./s");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('You are alone?')) {
    message.channel.sendMessage('Sometimes i am.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('No')) {
    message.channel.sendMessage('Why no?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Yes')) {
    message.channel.sendMessage('Why yes?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Is there a way to can talk with your creator?')) {
    message.channel.sendMessage('Yeah, you need to say "Link please." and then you got a link which leads you to a server to can meet my Creator');
  }
});

//50

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Why you need so many responds?')) {
    message.channel.sendMessage('Because i am a talking bot.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Which one is your favorite color?')) {
    message.channel.sendMessage('My favorite color is Gray.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Which one is your favorite number?')) {
    message.channel.sendMessage('Welp my favorite number is 420.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('I want to help with your creator.')) {
    message.channel.sendMessage('You can help my creator by joining his server, to join his server say "Link please." to get a link which leads you to his server.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('fun')) {
    message.channel.sendMessage('I smell fun here.');
  }
});

//55

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('. . .')) {
    message.channel.sendMessage('What you want to say?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('good job','gg','good game')) {
    message.channel.sendMessage('Thank you!');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('i want to kill you')) {
    message.channel.sendMessage("Why? I don't understand why you want to kill me for no reason?");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith("It's hard to code?")) {
    message.channel.sendMessage("If you don't know how to code, it's hard to understand how to do, but my creator learned from Youtube, now he knows how to makes responds, he wants to know how to make cmds.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Goodbye!')) {
    message.channel.sendMessage('Goodbye my friend!');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Get me a joke!')) {
    message.channel.sendMessage('Ok here is your "joke".','idk what joke');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('You have a cat?')) {
    message.channel.sendMessage("I don't have cats, how the hell i can have cats in discord? *insert here laughing*");
  }
});

//60

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Do you know who is Duckio?')) {
    message.channel.sendMessage('Yeah, he is a known youtuber with 60K subs. Incognito calls him Ducky.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Call me maybe Music please')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=fWNaR-rxAic');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Echo Music please')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=fV1K3GG_O5w');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('I want to die.')) {
    message.channel.sendMessage('Why? You are so young for that, GROW UP KIDDO!');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('GIVE ME RIGHT NOW!')) {
    message.channel.sendMessage('Ok, it costs 10$.');
  }
});

//65

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('This is bad')) {
    message.channel.sendMessage('Something bad happened? Fix it with a duct tape!');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('OMG','omg','oh my god')) {
    message.channel.sendMessage("Yeah, it's god!");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Did you killed someone?')) {
    message.channel.sendMessage('No, you want me to kill you?');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('How much Incognito coded?')) {
    message.channel.sendMessage('All i know he coded like 650 lines.');
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('bitch','bish')) {
    message.channel.sendMessage("Fuck off bish. Don't call me a bitch/bish.");
  }
});

//70

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('I choose you!')) {
    message.channel.sendMessage("Ok, i have 1 att and 1 deff and 0.1 hp. Good job, you are done.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('I lick')) {
    message.channel.sendMessage("Lick? I don't lick back, stay away gay/lesbian.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('pokemon')) {
    message.channel.sendMessage("Did somebody said pokemon? Incognito likes pokecord.");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('IncogFunny')) {
    message.channel.sendMessage("Did somebody called me?");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('Meme please!')) {
        message.channel.sendMessage({embed: {
    color: 3447003,
    description: "",
    image: {url: "https://cdn.glitch.com/6bc96be7-1015-4474-82ab-c330b47f2b5e%2Fimage.png?1535968414093"}
}});

  }
});

//70 responds 

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith('You are my problem.')) {
    message.channel.sendMessage("Oh. I didn't knew that");
  }
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.includes('oof')) {
    message.channel.sendMessage("Good job, You died, due to being too much oofed.");
  }
});

//72


//Special Responds

  
client.on('message', message=> {
if(message.author.id !== process.env.ownerID) return;
if (message.content.startsWith(prefix + "say")) {
message.channel.sendMessage((message.content.replace('inc!say ','')));
message.delete(100)
};
 });

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage("Before i send the link, i want to say the inc!help isn't done updated yet, it will be update soon.");
    message.channel.sendMessage('https://incogfunny-help.glitch.me/')
  }
});

client.on('message', message=> {
    if (message.isMentioned(client.user)) {
    message.channel.sendMessage({embed: {
    color: 3447003,
    description: "Hi, i am IncogFunny the talker bot, Incognito is my Creator and he wants me to have more than 100 responds, my prefix is inc!.I sponsor Glitch.com There u can create websites,bots anything you can do with help of Glitch.com! It's Free! I recommend you to use that website! Also:",
    image: {url: "https://media1.tenor.com/images/336247d99e395a1da9cccf111fba7c31/tenor.gif?itemid=11748348"}
}});

  }
});
