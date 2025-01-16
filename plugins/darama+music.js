const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "play",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*🎶PASIYA_MD-V1 MUSⵊC DOWNLOADⵊNG🎶*
╰──────────────────────────────
🎵 *MUSⵊC FOUND!* 
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
> ➥ *☘️ Tɪᴛʟᴇ:* ${data.title} 
> ➥ *⏳ Dᴜʀᴀᴛɪᴏɴ:* ${data.timestamp} 
> ➥ *📉 Vɪᴇᴡꜱ:* ${data.views} 
> ➥ *📅 Uᴘʟᴏᴀᴅᴇᴅ ᴏɴ:* ${data.ago} 
> ➥ *🖇️ Lɪɴᴋ:* ${data.url} 

🎧 *ENJOY THE MUSIC BROUGHT TO YOU!*

> *PASIYA_MD-V1 WHATSAPP BOT* 

> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Pᴀꜱɪʏᴀ_ᴍᴅ-ᴠ1* 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Kɢ ᴛᴇᴄʜ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})

//====================video_dl=======================

cmd({
    pattern: "video2",
    alias: ["video2"],
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
*📺PASIYA_MD-V1 MUSⵊC DOWNLOADⵊNG📺*
╰──────────────────────────────
🎥 *VⵊDEO FOUND!* 
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
> ➥ *☘️ Tɪᴛʟᴇ:* ${data.title} 
> ➥ *⏳ Dᴜʀᴀᴛɪᴏɴ:* ${data.timestamp} 
> ➥ *📉 Vɪᴇᴡꜱ:* ${data.views} 
> ➥ *📅 Uᴘʟᴏᴀᴅᴇᴅ ᴏɴ:* ${data.ago} 
> ➥ *🖇️ Lɪɴᴋ:* ${data.url} 

🎧 *ENJOY THE VIDEO BROUGHT TO YOU!*

> *PASIYA_MD-V1 WHATSAPP BOT* 

> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Pᴀꜱɪʏᴀ_ᴍᴅ-ᴠ1* 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Kɢ Tᴇᴄʜ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})
