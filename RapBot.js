/**
 * 
 * Created by Thales.
 *
 * RapBot (@RapLinkBot)
 *
 * Shows whats new and whats trending on hip-hop music
 *
 */

const TeleBot = require('telebot');
const token = '357183118:AAG5OYtBpH15IrbQ8Elz_TPlMWUifnPmphI'; // Get this token with The BotFather on Telegram
const bot = new TeleBot(token);
// Command keyboard
const markup = bot.keyboard([
    ['/whatsnew', '/trending']
], { resize: true, once: false });


var whatsnewLink = 'https://www.youtube.com/playlist?list=PLH6pfBXQXHEBElcVFl-gGewA2OaATF4xL';
var trendingArtistsLink = 'https://www.youtube.com/channel/UCUnSTiCHiHgZA9NQUG6lZkQ/playlists?view=50&sort=dd&shelf_id=10323087404103130259';



// Log every text message
bot.on('text', function(msg) {
    console.log('[text] ${ msg.chat.id } ${ msg.text }');
});

// On command "start" or "help"
bot.on(['/start', '/help'], function(msg) {

    return bot.sendMessage(msg.chat.id,
        'Use commands: /trending or /whatsnew or /about ' +
        '/trending: Shows the link with most popular hip-hop playlists at the momment' +
        '/whatsnew: Shows the playlist´s link with the newest hip-hop songs', { markup }
    );

});

// On command "about"
bot.on('/about', function(msg) {

    var text =  'This Bot was made to show you what is hot today in the world of Rap/Hip-Hop' +
                ' powered by TeleBot library' +
                ' https://github.com/kosmodrey/telebot Go check the source code of TeleBot!';

    return bot.sendMessage(msg.chat.id, text);

});

// On command "trending"
bot.on(['/trending', '/whatsnew'], function(msg) {

    var promise;
    var id = msg.chat.id;

    var command = msg.text.split(' ')[0];
    var link;

    if(command === '/trending') {
        link = trendingArtistsLink;
    } else if(command === '/whatsnew') {
        link = whatsnewLink;
    }



    return bot.sendMessage(msg.chat.id, link);

});

// Start getting updates
bot.connect();
