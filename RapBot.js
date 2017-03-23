/**
 * Created by Thales.
 */

const TeleBot = require('telebot');
// Get this token with The BotFather on Telegram
const token = '';
const bot = new TeleBot(token);

// Log every text message
bot.on('text', function(msg) {
    console.log('[text] ${ msg.chat.id } ${ msg.text }');
});

// On command "start" or "help"
bot.on(['/start', '/help'], function(msg) {

    return bot.sendMessage(msg.chat.id,
        'Use commands: /trending or /about', { markup }
    );

});

// On command "about"
bot.on('/about', function(msg) {

    var text =  'This Bot was made to show you what is hot today in the world of Rap/Hip-Hop' +
                ' powered by TeleBot library and YouTube API' +
                ' Bot Creators: Thales Souto and Jefferson Carlos' +
                ' https://github.com/kosmodrey/telebot Go check the source code of TeleBot!';

    return bot.sendMessage(msg.chat.id, text);

});

// On command "trending"
bot.on(['/trending'], function(msg) {

    var promise;
    var id = msg.chat.id;


    return promise.catch(function(error) {
            console.log('[error]', error);
            // Send an error
            bot.sendMessage(id, 'An error ${ error } occurred, try again.');
    });

});

// Start getting updates
bot.connect();
