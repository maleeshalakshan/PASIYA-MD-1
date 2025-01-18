/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/





const config = require('../config')
const {cmd , commands} = require('../command')
cmd({

    pattern: "menu4",

    react: "📑",

    alias: ["panel","list","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu3',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `
*PASIYA-MD-V1  𝘔𝘖𝘝𝘐𝘌 COMMANDS MENU*
╰────────────────────────────

*🔖➣Command :* mv
*📑➣Desc :* SinhalaSub.lk Movie Downloader
*🖨️➣Use:* .mv Avatar

*🔖➣Command :* mv2
*📑➣Desc :* Firemovies.hub Movie Downloader
*🖨️➣Use:* .mv2 Fast & Furious

> *© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
