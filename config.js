//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:KrhFaJbJfKonuiMMuJfJctMHfeXxpINu@junction.proxy.rlwy.net:31135";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94740326138";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0U4bmEwWVY3YklZOG9ZSm5JYUEyUjByaVppQnNyNzliWDJ2ZjF1Q3dXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkQ1bC9jaTdGQnZBRnpFa3g0cCtJUThHYjhMRXpIMXlsamM1TWY0NENURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTGxzbWpQQlh4ZHN5WlpGU1Npd2MvME1kaWVFRjE3KzZMMks1UEdveFZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TUEwa0VuV0tIaTBDdEpQS3V0NXBuS1RjVENoQ2VFYjBZd05DaFdRbUNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHbktLeUxhTFR4OUkxMkc1SmttTlVkUk9sSmNzOEpJbW5nWSs3aUJQSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPT1h6aXhLQk1wcDk3R1NiYVlyeFk2T1E5aHp6OEZDMTNCb0xHSlBZR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUpLZldwZGNSWUMxdzJpNjhvL1BFWVp2VGRaL2w1ampBVDZjNlozeHpFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN05LdXlwb0lYWUdaR2tSTTNDY3lYMVZncnFOem5mc2k4Z0R2NkJ6TS9qUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllaZHJXYjhUbnBwTEM2aTZ4bk5Bcnh3K2NBdzhNOTNSS1J1S1NxUk5veVMvT2FPS1ZQdkYyeHptenBER1VHR0FBMHdZTVY5OW5zQlJ2RTlCRkova0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJMYnVNQnZYazErK0E5UUU0Tngvc28xbW1mMHAySzRuQXRWNWdxK2dCSVdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQwMzI2MTM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJCMjAzOUREQzdBREUyOEQ2MTZEQzAzOTdDNjU2OEZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk4NTIyMjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFGSVhaSWJCUTdpVEJXeEtDN0dNRmciLCJwaG9uZUlkIjoiM2RjODIzMGMtZTdjYi00NWI2LTlmYmItOGYzMTg0M2U1Mzg2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4zeTN4L2RlTUUzclQ3cThYTnNpczVBWkkzYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaOUEwa0gweEtqdFN3Rk9Ea1Q3d241L2FUZWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVkExS1ZOREIiLCJtZSI6eyJpZCI6Ijk0NzQwMzI2MTM4OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44CQVOOAkeOAkEjjgJHjgJBB44CR44CQUuOAkeOAkFXjgJEgICDjgJBT44CR44CQTuOAkeOAkETjgJHjgJBQ44CRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMekFucGtFRUxMbTdiZ0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjSmRacnEweDZWTTQxREJ5Q3Nud0dzZitZNTEzTmw3MW1FV0NGdmlpeVFVPSIsImFjY291bnRTaWduYXR1cmUiOiJ4U2lwUU1xcTlkZHVDQ0VaMTlQb0NqeDF6REJlL1Bzbmd6aG14bUtNNGRiRGlLQVNjUy8wVTcwL2ZKTmZQWWd3ZXc3SVkyMDlKM3k2NExWSmJQWjVBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMGdOV3dYYVNaUWYzSHRSTStSZy96c2UvZWM4R01VRk80QnVuSmJ0NUdPUHpHdG9BRkZmTlpGbm85QmZkQUpLMkpteVVSa0dCWDV4d0hJYStQN3VDQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MDMyNjEzODo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhDWFdhNnRNZWxUT05Rd2Nncko4QnJIL21PZGR6WmU5WmhGZ2hiNG9za0YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk4NTIyMjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQW5iIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
