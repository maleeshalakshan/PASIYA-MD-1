const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "🧑‍💻",
    alias: ["uptime" ,"runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*⚙️ 𝐏𝐀𝐒𝐈𝐘𝐀_𝐌𝐃 𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍*


╭─────────────────────
 `⌛ 𝚄𝙿𝚃𝙸𝙼𝙴`▎  

`📟 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 :`▎

`🖥️𝙳𝙴𝙿𝙻𝙾𝚈 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 :`▎  

╰──────────────────────

> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ៚ 𝙿𝙰𝚂𝙸𝚈𝙰_𝙼𝙳*`
    
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
