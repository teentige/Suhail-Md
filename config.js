const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254742593679";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_40_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICA3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYyLFxuICAgICAgICA0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcxLFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWmRSWXk3TTgzc0p1d1VNb1phaW9RUDF6N21LSXdHRm56ZXhaaHBMN2taOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGhhMnNfSXhTNmV2V1dzdnd3b08xd1wiLFxuICBcInBob25lSWRcIjogXCI1YzQxYjYwZS00MDA2LTRhMzYtOThlZi01MzM4YzY1Yzg3MzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNDMsXG4gICAgICAxNzQsXG4gICAgICAxNTgsXG4gICAgICA1NyxcbiAgICAgIDYzLFxuICAgICAgMTkwLFxuICAgICAgMCxcbiAgICAgIDExMSxcbiAgICAgIDEwMixcbiAgICAgIDEwMyxcbiAgICAgIDI0MyxcbiAgICAgIDE3NSxcbiAgICAgIDEzNyxcbiAgICAgIDEzMCxcbiAgICAgIDI0MixcbiAgICAgIDIyMixcbiAgICAgIDIwNCxcbiAgICAgIDIzLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjMxLFxuICAgICAgMTMwLFxuICAgICAgMjAsXG4gICAgICAxNTEsXG4gICAgICA1NSxcbiAgICAgIDQ4LFxuICAgICAgMTYxLFxuICAgICAgMTYwLFxuICAgICAgMTU3LFxuICAgICAgMTAyLFxuICAgICAgMTYsXG4gICAgICAxMzMsXG4gICAgICAyMixcbiAgICAgIDIxNSxcbiAgICAgIDc3LFxuICAgICAgMjI1LFxuICAgICAgMjI0LFxuICAgICAgMjA2LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQyS1lLM0JDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDI1OTM2Nzk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ0NTc3OTAxODM0MjQ5OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lDMzRKa0hFSTdvcnJRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYmI0TE1LWEhiWFVmWk4xUkZYMW1nNStka0Z6RUJMNVhleXVPN0VNUE1rZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzaW5oWndwVHVIWFBkcEl6SzRhdGZRYnYwVVUyaWpRZytkZ2FvajFBZStrRkhyLzhhN1A5Uk5SdXA0QnRlejNqNG1jdHplMlZHc0hZcEZ6TkdJU0pCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrSU95VUpEWXFDNStKai9XWEg5SHRtellQSkZsRVQ4eHJHNkk1RldpbmtTMFRiZXoxaFByWlhIMXZ0K2tZNFNYT2dLQlpXd00vTEs3R005VkVZZUtqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDI1OTM2Nzk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDMxNjM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2E5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLYTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqL01MZnJqcTJ1MnNSeldWNDlvNGptNWJFQXplN3FjVFZSTERCMmg2Q2Z3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzMwNTY4OTYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQyNzc2Mzk5NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "XTEENINE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
