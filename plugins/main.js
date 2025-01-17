const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson, runtime, sleep } = require('../lib/functions');

module.exports = async (conn, from, userMsg, selectedOption) => {
    let response;

    switch (selectedOption) {
        case '1': {
            response = `*PASIYA-MD-V1 OWNER COMMANDS MENU*

*📌➣Command :* restart
*📃➣Desc :* Restart the bot
*🖨️➣Use:* .restart

*📌➣Command :* jid
*📃➣Desc :* To number jid
*🖨️➣Use:* .jid

*📌➣Command :* gjid
*📃➣Desc :* To group jid
*🖨️➣Use:* .jid

*📌➣Command :* shutdown
*📃➣Desc :* Trun off bot
*🖨️➣Use:* .system

*📌➣Command :* broadcast
*📃➣Desc :* To all mention
*🖨️➣Use:* .broadcast

*📌➣Command :* setpp
*📃➣Desc :* Set your profile picture
*🖨️➣Use:* .setpp

*📌➣Command :* block
*📃➣Desc :* To block number
*🖨️➣Use:* .block

*📌➣Command :* unblock
*📃➣Desc :* To unblock number
*🖨️➣Use:* .unblock

*📌➣Command :* clearchats
*📃➣Desc :* clear your chat message
*🖨️➣Use:* .clearchats

*📌➣Command :* apply
*📃➣Desc :* Use your settings update
*🖨️➣Use:* .apply

*📌➣Command :* block
*📃➣Desc :* To block a member
*🖨️➣Use:* .block

*© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ 𝐂ʀᴏɴᴀ 𝐗ᴅ*
`;
            break;
        }
        case '2': {
            response = `*PASIYA-MD-V1 CONVERT COMMANDS MENU*

*📌➣Command :* tts
*📃➣Desc :* Text convert mp3
*🖨️➣Use:* .tts <word>

*📌➣Command :* toptt
*📃➣Desc :* Top text convert mp3
*🖨️➣Use:* .toptt <word>

*📌➣Command :* sticker
*📃➣Desc :* Image convert sticker
*🖨️➣Use:* .sticker <mention image>

*📌➣Command :* img2url
*📃➣Desc :* Image convert url
*🖨️➣Use:* .image2url <mention image>

*📌➣Command :* convert
*📃➣Desc :* To convert
*🖨️➣Use:* .convert

*📌➣Command :* trt
*📃➣Desc :* To translate language
*🖨️➣Use:* .trt <wort>

*© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ 𝐂ʀᴏɴᴀ 𝐗ᴅ*
            `;
            break;
        }
        case '3': {
            response = `*PASIYA-MD-V1 AI COMMANDS MENU*

*📌➣Command :* ai
*📃➣Desc :* Help open ai
*🖨️➣Use:* .ai <question>

*📌➣Command :* chatgpt
*📃➣Desc :* Help open ai
*🖨️➣Use:* .chatgpt <question>

*📌➣Command :* chatgpt2
*📃➣Desc :* Help open ai
*🖨️➣Use:* .chatgpt2 <question>

*📌➣Command :* turbo
*📃➣Desc :* Help open ai
*🖨️➣Use:* .turbo <question>

*📌➣Command :* turbo2
*📃➣Desc :* Help open ai
*🖨️➣Use:* .turbo2 <question>

*📌➣Command :* gemini
*📃➣Desc :* Help open ai
*🖨️➣Use:* .gemini <question>

*© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ 𝐂ʀᴏɴᴀ 𝐗ᴅ*
`;
            break;
        }
        case '4': {
            response = `Serch Menu is coming soon! 😌`;
            break;
        }
        case '5': {
            response = `Download Menu is being prepared! 😌`;
            break;
        }
        case '6': {
            response = `*PASIYA-MD-V1 BUG COMMANDS MENU*

*📌➣Command :* bug1
*📃➣Desc :* Whatsapp crash
*🖨️➣Use:* .bug1 <number>

*📌➣Command :* bug2
*📃➣Desc :* Whatsapp slow
*🖨️➣Use:* .bug2 <number>

*📌➣Command :* bug3
*📃➣Desc :* Old crash
*🖨️➣Use:* .bug3 <number>

*📌➣Command :* bug4
*📃➣Desc :* Whatsapp attack
*🖨️➣Use:* .bug4 <number>

*© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ 𝐂ʀᴏɴᴀ 𝐗ᴅ*
 MAIN COMMANDS MENU*

*📌➣Command :* alive
*📃➣Desc :* Bot's main message and info
*🖨️➣Use:* .alive

*📌➣Command :* menu
*📃➣Desc :* Get bot's command list
*🖨️➣Use:* .menu

*📌➣Command :* owner
*📃➣Desc :* Contact bot's owner
*🖨️➣Use:* .script

*📌➣Command :* script
*📃➣Desc :* Bot's system information
*🖨️➣Use:* .script

*📌➣Command :* system
*📃➣Desc :* Bot's details and repo details
*🖨️➣Use:* .system

*📌➣Command :* runtime
*📃➣Desc :* Bot's uptime
*🖨️➣Use:* .runtime

*📌➣Command :* ping
*📃➣Desc :* Bot's speed thid time
*🖨️➣Use:* .ping

*📌➣Command :* status
*📃➣Desc :* To day information
*🖨️➣Use:* .status

*📌➣Command :* acd
*📃➣Desc :* Small information
*🖨️➣Use:* .acd

*© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ 𝐂ʀᴏɴᴀ 𝐗ᴅ*
`;
            break;
        }
        case '8': {
            response = `*PASIYA-MD-V1 GROUP COMMANDS MENU*

*📌➣Command :* kick
*📃➣Desc :* Kick member
*🖨️➣Use:* .kick <number or mention>

*📌➣Command :* add
*📃➣Desc :* Add whatsapp number
*🖨️➣Use:* .add <number>

*📌➣Command :* delete
*📃➣Desc :* To delete message
*🖨️➣Use:* .delete <mention>

*📌➣Command :* kickall
*📃➣Desc :* Remove all members
*🖨️➣Use:* .kikall

*📌➣Command :* opentime
*📃➣Desc :* Group all can message
*🖨️➣Use:* .opentime <horse-minute-second>

*📌➣Command :* closetime
*📃➣Desc :* Group only admin message
*🖨️➣Use:* .closetime <horse-minute-second>

*📌➣Command :* tagall
*📃➣Desc :* Mention all members
*🖨️➣Use:* .tagall

*📌➣Command :* tagadmin
*📃➣Desc :* Mention all admin
*🖨️➣Use:* .tagadmin

*📌➣Command :* mute
*📃➣Desc :* Group open
*🖨️➣Use:* .mute

*📌➣Command :* unmute
*📃➣Desc :* Group stop
*🖨️➣Use:* .unmute

*📌➣Command :* promote
*📃➣Desc :* Add new admin
*🖨️➣Use:* .promote <@>

*📌➣Command :* demote
*📃➣Desc :* Close admin
*🖨️➣Use:* .demote <@>

*📌➣Command :* setname
*📃➣Desc :* Create group name
*🖨️➣Use:* .setname <name> 

*📌➣Command :* setdesc
*📃➣Desc :* Create group description
*🖨️➣Use:* .setdesc <text>

*📌➣Command :* invite
*📃➣Desc :* To group link
*🖨️➣Use:* .invite

*📌➣Command :* join
*📃➣Desc :* Join for group
*🖨️➣Use:* .join <link>

*📌➣Command :* leave 
*📃➣Desc :* Exit Group
*🖨️➣Use:* .leave

*© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ 𝐂ʀᴏɴᴀ 𝐗ᴅ*
            `;
            break;
        }
        case '9': {
            response = `*PASIYA-MD-V1 MOVIE COMMANDS MENU*

*📌➣Command :* sinhalasub
*📃➣Desc :* Sinhalasub site moviedl
*🖨️➣Use:* .sinhalasub <movie name>

*📌➣Command :* movie
*📃➣Desc :* Movie site mvdl
*🖨️➣Use:* .movie <movie name>

*📌➣Command :* sinhalasubserch
*📃➣Desc :* sinhalasub site serch
*🖨️➣Use:* .sinhalasubserch <movie name>

*📌➣Command :* ginisisila
*📃➣Desc :* Cartoon download site
*🖨️➣Use:* .sinisisila <cartoon name>

*© ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ 𝐂ʀᴏɴᴀ 𝐗ᴅ*
`;
            break;
        }
            case '10': {
            response = `*PASIYA-MD-V1 OTHER COMMANDS MENU*

*📌➣Command :* gpass
*📃➣Desc :* Gmail password
*🖨️➣Use:* .gpass

*📌➣Command :* githubstalk
*📃➣Desc :* repo details
*🖨️➣Use:* .githubstalk

*📌➣Command :* srepo
*📃➣Desc :* script dl
*🖨️➣Use:* .srepo

*📌➣Command :* weather
*📃➣Desc :* weather details
*🖨️➣Use:* .weather <city>

*📌➣Command :* turbo2
*📃➣Desc :* Help open ai
*🖨️➣Use:* .turbo2

*@ ᴩᴀꜱɪʏᴀ ᴍᴅ ᴍᴀᴅᴇ 𝐂ʀᴏɴᴀ 𝐗ᴅ*      
            `;
                break;
            }
        default: {
            response = "❌ Invalid option. Please select a valid number.";
            break;
        }
    }
    
    try {
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/tsv1j9.jpg'` },
            text: response,
            contextInfo: {
                forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "𝐂ʀᴏɴᴀ 𝐗ᴅ",
                newsletterJid: "120363322195409882@newsletter",
            },
            externalAdReply: {
                title: " 𝐏𝐀𝐒𝐈𝐘𝐀 𝐌𝐃 𝐕𝟏 𝐖𝐀 𝐁𝐎𝐓😌",
                body: "ᴀ ᴩᴀꜱɪʏᴀ ᴍᴅ ᴠ1ᴡᴀ ʙᴏᴛ ",
                sourceUrl: 'https://www.youtube.com',
                thumbnailUrl: 'https://ik.imagekit.io/eypz/1725191604705_6ZNoT_vdy.png',
                mediaType: 1,
                renderLargerThumbnail: false,
                }
            }
       }, { quoted: userMsg });
        
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

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
