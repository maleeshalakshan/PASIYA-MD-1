const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu2",

    react: "🧾",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `*PASIYA-MD-V1 𝘎𝘙𝘖𝘜𝘗𝘚 COMMANDS MENU*

╰────────────────────────────

*🔖➣Command :* add
*📑➣Desc :* add members to group
*🖨️➣Use:* .add +9477 *******

*🔖➣Command :* setwelcome
*📑➣Desc :* new members welcome message
*🖨️➣Use:* .setwelcome Hi. Welcome to our Group

*🔖➣Command :* setgoodbye
*📑➣Desc :* left members goodbye message
*🖨️➣Use:* .setgoodbye Good Bye 👋

*🔖➣Command :* opentime
*📑➣Desc :*  set group open time
*🖨️➣Use:* .opentime  5 second                                       5 minute
                      5 hour

*🔖➣Command :* closetime
*📑➣Desc :* set group closetime
*🖨️➣Use:* .closetime 5 second
                      5 minute
                      5 hour


> *© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
