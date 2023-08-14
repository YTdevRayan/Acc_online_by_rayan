//===============RAYAN============//
const Discord = require("discord.js");
const RAYAN = new Discord.Client();
const RAYAN2 = new Discord.Client();
const RAYAN3 = new Discord.Client();
//===============RAYAN============//
RAYAN.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`By DEV RAYAN & KURDISH PIRATE`];
  setInterval(function () {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    RAYAN.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith",
    });
  }, 2000);
});
//===============RAYAN============//
RAYAN.on("ready", () => {
  var join = RAYAN.channels.get("1049044395573387325"); /// id voice
  if (join) join.join();
});
//===============RAYAN============//
RAYAN.login(
  "MTE0MDc2MTk2NDY3NTYxMjc4Mg.Gblpay.u-7_3Y-nbumkPj7D684mnzqF9ko6fTYSiXEyBc"
);
RAYAN2.login("");
RAYAN3.login(""); /////TOKEN DANE
//===============RAYAN============//
