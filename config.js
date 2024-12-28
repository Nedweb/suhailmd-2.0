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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_03_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuS2hLM2lzQWg1UVZ5MlRGUDBhL3UxUnZBcEc5dytBaWxTZzNDWFJhTlhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJON1RldWt5TVJYLVQ5S1FULVZLeFhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc3ZTRjZGU3LTExMmUtNDMzOS1iODA3LTI1MGE3YjU2OTI5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDQyLFxuICAgICAgOTEsXG4gICAgICAxMzQsXG4gICAgICA3NyxcbiAgICAgIDU5LFxuICAgICAgOSxcbiAgICAgIDI0LFxuICAgICAgMjUxLFxuICAgICAgMzQsXG4gICAgICAyMTUsXG4gICAgICA3MSxcbiAgICAgIDE0MyxcbiAgICAgIDE3LFxuICAgICAgNTQsXG4gICAgICAyNTUsXG4gICAgICA5MSxcbiAgICAgIDc2LFxuICAgICAgOTUsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDExMyxcbiAgICAgIDgxLFxuICAgICAgMTc5LFxuICAgICAgMTQ5LFxuICAgICAgMjcsXG4gICAgICAyMCxcbiAgICAgIDEwNixcbiAgICAgIDI1MyxcbiAgICAgIDkwLFxuICAgICAgMjAxLFxuICAgICAgMTI3LFxuICAgICAgMTc5LFxuICAgICAgNSxcbiAgICAgIDg4LFxuICAgICAgMTE3LFxuICAgICAgMTc1LFxuICAgICAgMjAzLFxuICAgICAgMTk4LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjFHSk5EWlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDAwMjQ3MjY6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNeVN1YnMuY29tLm5nIHwgTXlQbGF5U3RvcmUubmcgfCBEaWdpdGFsRXhjaGFuZ2UubmdcIixcbiAgICBcImxpZFwiOiBcIjk2MTkwMjU1Mzg2Nzc1OjU3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tlTWc3d0JFT0xVdmJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYkN0M041SUhOS2g2TW5UN0c2NTVPQSswRk5ZeEJicmVUWksxM3A1ci95az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXZ2gxbnV4dVZTRWhydkwzUG5oUWlvbUZrcEN4Z2FKam1hNVVsOWkxc0lqSXZYdi9yd0NOR1dTMWVhMW12bmxlc01WZExJam5nT2YzTnhYaUIwbGdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1d2NvOXJYMEpPY016bHBDZTNtUWkwc2ROcmhDWW12V2VRVEVxdVVqUjFaVnBYaTlBL1MwYm8wNjdwN2l1ZlV4TWNVZkNDODZ6L2lWanNMY0dVaGRnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQwMDI0NzI2OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MzU0OTgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGRTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEZFMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrRnJpYWNhRTlHcEJWODVmRjhrR1RDUXRKL0ZCT2J3MTQxNWNtYjEvNzJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5NDMxNTMwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTM1NDkzOTgwNlwifSIKfQ=="  // PUT your SESSION_ID 


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
