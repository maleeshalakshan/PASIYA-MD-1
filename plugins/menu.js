cmd({
    pattern: "menu",
    use: ".menu",
    desc: "menu the bot",
    react: "📄",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        const config = await readEnv();

        const contextInfo = {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "Sl Nethu Max Yt",
                newsletterJid: "120363322195409882@newsletter",
            },
            externalAdReply: {
                title: "PASIYA_MD BOT  ⛄",
                body: "I am ACD MD V2WA Bot Just Now Online",
                sourceUrl: 'https://www.youtube.com',
                thumbnailUrl: 'https://files.catbox.moe/qex77c.jpg',
                mediaType: 1,
                renderLargerThumbnail: true,
            },
        };

        const message = await conn.sendMessage(from, { text: '`COMPLETE` ✅' });

        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 500));
        const endTime = Date.now();
        const ping = endTime - startTime;

        let hostname;
        if (os.hostname().length === 12) hostname = "replit";
        else if (os.hostname().length === 36) hostname = "heroku";
        else if (os.hostname().length === 8) hostname = "koyeb";
        else hostname = os.hostname();

        const moment = require("moment-timezone");
        const date = moment().tz("Asia/Colombo").format("YYYY-MM-DD");
        const time = moment().tz("Asia/Colombo").format("HH:mm:ss");
        
        let desc = `*~PASIYA-MD WA BOT👨‍💻*
   *╭─────────────···▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : *${runtime(process.uptime())}*
*❖│▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : 𝐏𝐀𝐒𝐈𝐘𝐀-𝐌𝐃 👾
*❖│▸* *ᴏᴡɴᴇʀ* : 𝐏𝐀𝐒𝐈𝐍𝐃𝐔
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *𝐕.1.0.0*
*┬*
*└──────────────···▸*
 *ℙ𝔸𝕊𝕀𝕐𝔸-𝕄𝔻 𝕄𝔼ℕ𝕌* *❒⁠⁠⁠⁠*   
*♡︎•━━━━━━━━━━━━━━•♡︎*
🔢 𝘙𝘌𝘗𝘓𝘠 𝘛𝘏𝘌 𝘠𝘖𝘜 𝘞𝘈𝘕𝘛 𝘕𝘜𝘔𝘉𝘌𝘙

*📥01  ➤ ||* DOWNLOAD MENU
*👥02  ➤ ||* GROUP MENU
*🔎03  ➤ ||* SEARCH MENU
*🎬04  ➤ ||* MOVIE MENU
*♻️05  ➤ ||* CONVERT MENU
*👨‍💻06  ➤ ||* OWNER MENU
*🎳07  ➤ ||* OTHER 
•━━━━━━━━━━━━━━━━━━•
> *©️ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ♤ ᴘᴀꜱɪʏᴀ_ᴍᴅ*
╰────────────────
${config.UNDER_MSG}
`;

 const vv = await conn.sendMessage(from, {
            image: { url: "https://files.catbox.moe/kr6l8u.jpg" },
            caption: desc,
            contextInfo,
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let menu1 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'owner' && !commands[i].dontAddCommandList) {
                                menu1 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu1 = `👨🏻‍💻 *𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂:*\n\n${menu1}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu1 }, { quoted: mek });
                        break;

                    case '2':
                        let menu2 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'convert' && !commands[i].dontAddCommandList) {
                                menu2 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu2 = `♻️ *𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂:*\n\n${menu2}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu2 }, { quoted: mek });
                        break;

                    case '3':
                        let menu3 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'ai' && !commands[i].dontAddCommandList) {
                                menu3 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu3 = `🤖 *𝗔𝗜 𝗠𝗲𝗻𝘂:*\n\n${menu3}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu3 }, { quoted: mek });
                        break;

                    case '4':
                        let menu4 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'logo' && !commands[i].dontAddCommandList) {
                                menu4 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu4 = `🎊 *𝗟𝗢𝗚𝗢 𝗠𝗲𝗻𝘂:*\n\n${menu4}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu4 }, { quoted: mek });
                        break;

                    case '5':
                        let menu5 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'search' && !commands[i].dontAddCommandList) {
                                menu5 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu5 = `🔎 *𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗲𝗻𝘂:*\n\n${menu5}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu5 }, { quoted: mek });
                        break;

                    case '6':
                        let menu6 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'download' && !commands[i].dontAddCommandList) {
                                menu6 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu6 = `📥 *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗲𝗻𝘂:*\n\n${menu6}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu6 }, { quoted: mek });
                        break;

                    case '7':
                        let menu7 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'main' && !commands[i].dontAddCommandList) {
                                menu7 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu7 = `👾 *𝗠𝗔𝗜𝗡 𝗠𝗲𝗻𝘂:*\n\n${menu7}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu7 }, { quoted: mek });
                        break;

                    case '8':
                        let menu8 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'group' && !commands[i].dontAddCommandList) {
                                menu8 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu8 = `👥 *𝗚𝗥𝗢𝗨𝗣 𝗠𝗲𝗻𝘂:*\n\n${menu8}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu8 }, { quoted: mek });
                        break;

                    case '9':
                        let menu9 = '';
                        for (let i = 0; i < commands.length; i++) {
                            if (commands[i].category === 'other' && !commands[i].dontAddCommandList) {
                                menu9 += `*📍➣ Command :* ${commands[i].pattern}\n*📃➣ Desc :* ${commands[i].desc}\n*⌛➣ Use:* ${commands[i].use}\n\n`;
                            }
                        }
                        let madeMenu9 = `🎳 *𝗢𝗧𝗛𝗘𝗥 𝗠𝗲𝗻𝘂:*\n\n${menu9}────────────────────`;
                        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu9 }, { quoted: mek });
                        break;

                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply(`An error occurred: ${e.message || e}`);
    }
});
