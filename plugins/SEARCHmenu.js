const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu3",

    react: "📑",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `*PASIYA-MD-V1 DOWNLOAD COMMANDS MENU*
╰──────────────────────────

*🔖➣Command :* img 
*📑➣Desc :* Search Google Images
*🖨️➣Use:* ,img Anime

*🔖➣Command :* itn , hiru , lankadeepa , siyatha , sirasa , ada , bbc 
*📑➣Desc :* Get News
*🖨️➣Use:* .itn / .hiru / .sirasa
 / .lankadeepa / .siyatha / .ada / .bbc

*🔖➣Command :* mvinfo
*📑➣Desc :* Get Movie Information
*🖨️➣Use:* .mvinfo


> *© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
