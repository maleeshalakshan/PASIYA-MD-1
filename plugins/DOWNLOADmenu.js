const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu1",
    react: "🧾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `
*PASIYA-MD-V1 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋 COMMANDS MENU*
╰────────────────────────────

*🔖➣Command :* song
*📑➣Desc :* Song Downloader
*🖨️➣Use:* .song lelena

*🔖➣Command :* video
*📑➣Desc :* Video Downloader
*🖨️➣Use:* .video (Video Name)

*🔖➣Command :* song2
*📑➣Desc :* Song Downloader (auto song sender)
*🖨️➣Use:* .song2 lelena

*🔖➣Command :* img
*📑➣Desc :*  Img downloader
*🖨️➣Use:* .img anime

*🔖➣Command :* video2 
*📑➣Desc :* Video Downloader (auto video send)
*🖨️➣Use:* .video avengers

> *© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
