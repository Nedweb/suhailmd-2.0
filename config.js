const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "08140024726";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_49_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzLFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicHNRR3R1dnRHSjI3dVZmUDJiMHJ1RWhNaVE2YW43SHhLNkpxT0MwSkhYbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSW55UGc1aW9UWi1raXBRd2JhZmxwQVwiLFxuICBcInBob25lSWRcIjogXCI5YjJkMGU5Yy0zM2IxLTRjMGEtOTBhMy1lNjM1YTk0MGJhZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxMjYsXG4gICAgICAxNDgsXG4gICAgICA0MyxcbiAgICAgIDE5NCxcbiAgICAgIDIyMixcbiAgICAgIDIzMixcbiAgICAgIDE0NixcbiAgICAgIDIyOCxcbiAgICAgIDQsXG4gICAgICA2NSxcbiAgICAgIDIzMCxcbiAgICAgIDE4MCxcbiAgICAgIDQxLFxuICAgICAgOTIsXG4gICAgICAxOTMsXG4gICAgICAyMTgsXG4gICAgICAyMzMsXG4gICAgICA3LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTU0LFxuICAgICAgMTk2LFxuICAgICAgOTgsXG4gICAgICAxNzAsXG4gICAgICAyNDksXG4gICAgICAyNTIsXG4gICAgICAxNTgsXG4gICAgICAxNjksXG4gICAgICAxMTEsXG4gICAgICA3MyxcbiAgICAgIDEzMyxcbiAgICAgIDY3LFxuICAgICAgMjMsXG4gICAgICAxNzQsXG4gICAgICA5MSxcbiAgICAgIDIzNSxcbiAgICAgIDE2NixcbiAgICAgIDE2NCxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJaUkpSU0MxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQwMDI0NzI2OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXlTdWJzLmNvbS5uZyB8IE15UGxheVN0b3JlLm5nIHwgRGlnaXRhbEV4Y2hhbmdlLm5nXCIsXG4gICAgXCJsaWRcIjogXCI5NjE5MDI1NTM4Njc3NTo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLT01nN3dCRUlpZW03b0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJDdDNONUlITktoNk1uVDdHNjU1T0ErMEZOWXhCYnJlVFpLMTNwNXIveWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2J4eFRIQnNEblpxZ3RTL2ZocU1KQXdLQWVuNFZDMmhnU0JwR2hldWVscE1CZ0xWZDZIcWpFcmxGUTJ1b1kvRVR0elJyUkNEdFFxbkFKR0R5eitTQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicEM1SStCTTdpSTN2eW8ybzVpbzJ5VXFya05zZzdnNHRkcGtlYUl2Y3drZW1nWURVdEFSdHpTRUVad3ZnYkRRclEvVDFwcW95OGNzY3dGdDg5UWNKamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0MDAyNDcyNjo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjY5Mzc3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ3eFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDd4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWThHY3JXUHJFUG04L0FxWFQxeDU3NjlOZEZudk1RNDBtcWl2UkpTWVhwaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozOTQzMTUyOTksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjY1MDM0NzE2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
