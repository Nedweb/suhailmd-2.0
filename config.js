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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_52_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM4LFxuICAgICAgICA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJXcnNIY09GSFI1WUpxaXc2UzRsUXo2ZHVNYmFibis2Nyt5REh3VGVNM289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlF6TFNYR0Q5VFA2Qzd1eG8zSUJ5MUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODU0MDhkZDYtNDE4Ni00N2UwLWFlOGItNWEyNGY1NWViNDFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDE1NixcbiAgICAgIDExMCxcbiAgICAgIDIwMCxcbiAgICAgIDE4MyxcbiAgICAgIDQ2LFxuICAgICAgMjM2LFxuICAgICAgMjA4LFxuICAgICAgNDYsXG4gICAgICA1NyxcbiAgICAgIDE3NSxcbiAgICAgIDE5LFxuICAgICAgMTAsXG4gICAgICAxMzAsXG4gICAgICA1MyxcbiAgICAgIDEzMSxcbiAgICAgIDE2MCxcbiAgICAgIDkxLFxuICAgICAgMjMxLFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgMTk3LFxuICAgICAgMTEwLFxuICAgICAgMjIxLFxuICAgICAgMTI4LFxuICAgICAgMTQ2LFxuICAgICAgMjExLFxuICAgICAgMjE1LFxuICAgICAgNTQsXG4gICAgICA3LFxuICAgICAgMjAsXG4gICAgICAxMTYsXG4gICAgICA3OCxcbiAgICAgIDE2NyxcbiAgICAgIDIxNixcbiAgICAgIDEyNCxcbiAgICAgIDk2LFxuICAgICAgMzYsXG4gICAgICAyMyxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSlAyNVk4WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0MDAyNDcyNjo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk15U3Vicy5jb20ubmcgfCBNeVBsYXlTdG9yZS5uZyB8IERpZ2l0YWxFeGNoYW5nZS5uZ1wiLFxuICAgIFwibGlkXCI6IFwiOTYxOTAyNTUzODY3NzU6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0NNZzd3QkVQckF5YmtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiQ3QzTjVJSE5LaDZNblQ3RzY1NU9BKzBGTll4QmJyZVRaSzEzcDVyL3lrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNNTjlUM3YrUE5FUXJpWlJYL2E1c2NyUjNBQ2VCcXlDd2J3dnUzTi9XRFZjM3pwVzlSbVdVRzQzZnBDb0w2bG92K2Z0TENWMEZUelBHT0d5cmhHb0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJkdFR5cjB1TjU1TzVLZUIySlpaNVQ0MTYrcmlmcm5LOFIvOVpGcGpzNkI3U2lQNXhxMmFIclFJTkhDbmFGQ0NlODJmMGw1ZGRYVHhROVdCcDBQVkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDAwMjQ3MjY6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzNTQ3NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPTkJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9OQi5qc29uIjogIntcImtleURhdGFcIjpcImNPNDQrWmgzTVlORlhUM0xiaXAwdDhiSHhzZGlsKzFHTjBFZWFwTnhna1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzk0MzE1Mjk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA0NjA0Mzk3NjBcIn0iCn0="  // PUT your SESSION_ID 


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
