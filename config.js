const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID || "Pj4lyBpL#n-6r4wB9UrEW9WVjH77Qg7OsocS4Cc6PdoF1QOlsDLk",
MONGODB: process.env.MONGODB || "mongodb+srv://laramd:sadeesha2006@anya.gvsp435.mongodb.net/?retryWrites=true&w=majority&appName=Anya",
MODE: process.env.MODE || "public",  
PREFIX: process.env.PREFIX || ".",   
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/GPmvJ3D/2418.jpg", 
ALIVE_MSG: process.env.ALIVE_MSG || "Hi I'M PASIYA-MD WHATSAPP BOT 🍂🌟", 
MONGODB: process.env.MONGODB || "mongodb+srv://laramd:sadeesha2006@anya.gvsp435.mongodb.net/?retryWrites=true&w=majority&appName=Anya",
PREFIX: process.env.PREFIX || ".",   
};
