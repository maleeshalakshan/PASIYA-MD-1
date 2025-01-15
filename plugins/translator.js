const axios = require('axios');
const config = require('../config')
const {cmd , commands} = require('../command')
const googleTTS = require('google-tts-api')

cmd({
    pattern: "trt",
    alias: ["translate"],
    desc: "🌍 Translate text between languages",
    react: "🌐",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const args = q.split(' ');
        if (args.length < 2) return reply("❗ Please provide a language code and text. Usage: .translate [language code] [text]\nEg: trt fr Hello");

        const targetLang = args[0];
        const textToTranslate = args.slice(1).join(' ');

        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`;

        const response = await axios.get(url);
        const translation = response.data.responseData.translatedText;

        const translationMessage = `
🌍 *~PASIYA-MD-1 TRANSLATION* 🌍

🔤 *𝐎𝐫𝐢𝐠𝐢𝐧𝐚𝐥*: ${textToTranslate}

🔠 *𝐓𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞𝐝*: ${translation}

🌐 *𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞*: ${targetLang.toUpperCase()}

*ᴄʀᴇᴀᴛᴇ ʙʏ ❱ ~ᴘᴀꜱɪʏᴀ-ᴍᴅ-1*`;

        return reply(translationMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred data while translating the your text. Please try again later🤕");
    }
});

