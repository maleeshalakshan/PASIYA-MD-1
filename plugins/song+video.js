const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    react: "🎵",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("Please Provide The URL or Song TITLE ‼️")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
🎧 DARK-SHADOW-MD SONG DOWNLOADER🎧

| ℹ️ title : ${data.title}
| 📑 description : ${data.description}
| 🕘 time : *${data.timestamp}
| 📌 ago : ${data.ago}
| 📉 views : ${data.views}

🔢Reply with the Number you want to select

|| 01 ||  AUDIO TYPE
|| 02 ||  DOCUMENT TYPE

🌀 ᴘᴏᴡᴇʀᴇᴅ ʙʏ DARK-SHADOW-TEAM

`
        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg",caption :"🌀 ᴘᴏᴡᴇʀᴇᴅ ʙʏ DARK-SHADOW-TEAM"},{quoted:mek})
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                       await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:deta.title + ".mp3" ,caption :"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴠᴀʟᴀ ᴍᴅ"},{quoted:mek})
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                        break;
                    default:
                        reply("Invalid option. Please select a valid option 🎈");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});


//==================== Video downloader =========================


cmd({
    pattern: "video",
    react: "📽️",
    desc: "downlod video",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("Please Provide The URL or Song TITLE ‼️")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
🎥 DARK-SHADOW-MD VIDEO DOWNLOADER 🎥

| ℹ️ title : ${data.title}
| 📋 description : ${data.description}
| 🕘 time : *${data.timestamp}
| 📌 ago : ${data.ago}
| 📉 views : ${data.views}

🔢Reply with the Number you want to select

|| 01 ||  VIDEO TYPE
|| 02 ||  DOCUMENT TYPE

🌀 ᴘᴏᴡᴇʀᴇᴅ ʙʏ DARK-SHADOW-TEAM

`

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                    await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption :"🌀 ᴘᴏᴡᴇʀᴇᴅ ʙʏ DARK-SHADOW-TEAM"},{quoted:mek})
                        break;
                    case '2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:deta.title + ".mp4",caption :"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴠᴀʟᴀ ᴍᴅ"},{quoted:mek})
                        break;
                    default:
                        reply("Invalid option. Please select a valid option 🎈");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
