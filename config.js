const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "true"
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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_26_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYmg1cFk4VHNpMVlVcGhmMkVaS2FKc1lNKzB4ZmRIdm8wN2UxY1l1VGd1ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMGtsZ1pZckhRazJLRTlHa01PMHY1d1wiLFxuICBcInBob25lSWRcIjogXCIxOWI3YTY4MS0wMzY1LTQwMmItYTAzNi1kZTRlNTMwMGE4NzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAyMzgsXG4gICAgICA1NSxcbiAgICAgIDcxLFxuICAgICAgNTUsXG4gICAgICAyMzYsXG4gICAgICAxMTAsXG4gICAgICA3NCxcbiAgICAgIDgyLFxuICAgICAgMjA5LFxuICAgICAgMjksXG4gICAgICA1NixcbiAgICAgIDE2MCxcbiAgICAgIDIwNCxcbiAgICAgIDg3LFxuICAgICAgMjQwLFxuICAgICAgMTU0LFxuICAgICAgNjksXG4gICAgICA3NyxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDIxNCxcbiAgICAgIDE1NCxcbiAgICAgIDI0MyxcbiAgICAgIDE0NSxcbiAgICAgIDI0OCxcbiAgICAgIDI0MixcbiAgICAgIDIzMyxcbiAgICAgIDUyLFxuICAgICAgMTQyLFxuICAgICAgMzIsXG4gICAgICAyNTIsXG4gICAgICAxMDcsXG4gICAgICAxMTYsXG4gICAgICA2MSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NCxcbiAgICAgIDIzMyxcbiAgICAgIDYzLFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjRHTFA5WkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MjU5MzY3OToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDQ1Nzc5MDE4MzQyNDk6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUMzNEprSEVNNzFvTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiYjRMTUtYSGJYVWZaTjFSRlgxbWc1K2RrRnpFQkw1WGV5dU83RU1QTWtnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFCdnM4WE91V2pSUlcvUWY5WkE3UkdkNkFuaVFpdDJ6V3FZM3MzU3RndzdXMThYVm8yd0JzNklUUU5xdjhQWDhvZEhKZWpkeTdBUFBsSnNLSUpFbkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBLNlBYelo3Z25FeUpSZW8yVXJ1eElRbVN4aGVUcnZBUXNVNm1hbzR3NWZKY01yZW5OVGFmamdQYVhiN2tlMGdVZnhjSHZ2dkV6dkVzdDFDYk5NU2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MjU5MzY3OToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMDM5ODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLYXdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUthdy5qc29uIjogIntcImtleURhdGFcIjpcInI1UUFkY3pHeDJ5NUNFcXlZdFpaTDRmQXRYVFVCZEl0ZFQvbnBEVlo2TU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzMzA1Njg5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzcwNjIwNjMzNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "available", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "XTEENNINE",


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
