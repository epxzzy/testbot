const { ms } = require('./ms.js');
const axios = require("axios");
const main = require("./server.js");
const Database = require("@replit/database");
const db = new Database();
const msg = "hi";
const isMuted = db.get("isMuted");
//exports.ms = function (msg) {
let rply = axios.get(`
http://api.brainshop.ai/get?bid=169114&key=7pq1YNb9Jegvf0BF&uid=1&msg=${encodeURIComponent(msg)}`);
rply = rply.data.cnt;
//<a:sensor:1018168704325918751:> for skulksensor


try {
  switch(msg){
    case msg.startsWith('>', 0):
      cmmd = msg.substring(1);
      switch(cmmd){
        //>mojies, lists all emojis
        case 'mojies':
          return message.guild.emojis.cache.map(emoji => emoji.toString()).join(" ");
        //>uptime, returns how long the bot has been up for
        case 'uptime':
          return "client uptime: " + ms(client.uptime) + ", server uptime: " + process.uptime();
        //>help ig? lists all yhe commands
        case 'help':
          return '>help = returns help\n>mute = mute\n>unmute = unmute\n>mojies = list emojies\n>stats = returns stats\n>tstvar = undefined\n>uptime = returns uptime';
        //>random command for testing shit and whatnot 
        case 'tstvar':
          return 'hi. tstvar unset here, how may i help you?'
        //>reboot, restarts the process to keep the system healthy 
        case 'reboot':
          return 'rebootin';
          client.user.setStatus('offline');
          setTimeout(function() { process.exit(); }, 2000);
        //>stats shows details
        case 'stats':
          let resusg = process.resourceUsage().toString(),
            ttl = process.title,
            plt = process.platform,
            utp = process.uptime();
          return "resource usage: " + resusg + "\nPlatform: " + plt + "\nTitle: " + ttl + "\nProcess Uptime: " + utp;
        //>mute, mutes the bot ig?
        case 'mute':
          db.set("isMuted", "true").then(() => { 
            console.log("muted");
            return "Muted, >unmute to unmute!";
        //default: 
         // return 'knowncommandtryagainbitch';
        //>unmute, undo the greatest mistake made in mankind
        case 'unmute':
          db.set("isMuted", "false").then(() => { 
            console.log("unmuted");
            return "unmuted, >mute to mute!";

          }  
      }
    case !msg.startsWith('>', 0):
      switch(isMuted == false){
        case rply.contains(':bruteaxe:'):
          rply = rply.replace(":bruteaxe:", "<a:axe:1019701671191920660>");
          return rply;
          break; 
        case rply.contains(":axemg:"):
          rply.replace(":axemg:", "image url here");
          return rply;
          break;
       // default: 
   //       return '';         
      }
    //default:
    //  return;
    }
  } 
catch(err) {
      return "Glitch Matrix:" + err.toString() + " data: " + err.response.data.toString() + " status: " +  err.response.status.toString() + " response: " + err.response.toString();
      console.log("Glitch Matrix:" + err.toString() + " data: " + err.response.data.toString() + " status: " +  err.response.status.toString() + " response: " + err.response.toString());
}
//}
//console.log(rply("hello"));
