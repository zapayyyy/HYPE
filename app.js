const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const prefix = "/"

client.on('ready', () => {
	client.user.setGame("discord.me/hypeuniverse", "https://www.twitch.tv/drkillerxd")
});

client.on("guildMemberAdd", member => {
let emoji = member.guild.emojis.find("name", "HUHypeSquad")
let defaultrole = member.guild.roles.find("name", "⏰ | HYPE - Awaiting")
let default2role = member.guild.roles.find("name", "Hype - SafeRole")
  member.addRole(defaultrole)
  member.addRole(default2role)
member.send(emoji + " Eyyy, welcome to our server, **HYPEUNIVERSE**.").then(
member.send("**For first, you should check out the channel **#lobby.**")).then(
member.send("• Our server includes capable and responsible staff.\n• A custom credit system in creation and language selector.\n• Experienced administrators on this platform.")).then(
member.send("**We are glad that you have chosen our server from all that exist on discord.**\n:link: If you want to help the server, you can invite your friends using this link - https://discord.gg/ShjcYXK"))
});

client.on("message", message => {
if(message.content.startsWith("/acceptat")){
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have the correct permission.")

  let member = message.mentions.members.first();
  if (!member) return message.reply("you must mention a user.")
  let thelper = message.guild.roles.find("name", "💰 | Hype - Testers")
  let partner = message.guild.roles.find("name", "🏆 | Server Manager")
  
  if(message.channel.id === "409294069282504705" || message.channel.id === "410814816996032523"){
   client.channels.get("409294069282504705").send(`:tada: Congratulations, ${member}. Your partnership application has been accepted by ${message.author}.`)
   member.addRole(partner.id)}
   
  if(message.channel.id === "409294041734316032" || message.channel.id === "410812543209177096"){
   client.channels.get("409294041734316032").send(`:tada: Congratulations, ${member}. Your staff application has been accepted by ${message.author}.`)
  member.addRole(thelper.id)}
 
  message.delete()
}
});

client.on("message", message => {
	if(message.content.startsWith("/serverinfo")){
const embed = new Discord.RichEmbed()
	.setAuthor(message.guild, message.guild.iconURL)
	.addField("Name", message.guild, true)
	.addField("Owner", message.guild.owner, true)
	.addField("Members", message.guild.memberCount, true)
	.addField("Online", message.guild.members.filter(m => m.presence.status !== 'offline').size, true)
	.addField("Channels", message.guild.channels.size, true)
	.addField("Region", message.guild.region, true)
	.setFooter("CreatedAt • Friday, February 02, 2018 at 6:20 PM")
	.setThumbnail(message.guild.iconURL)
        .setColor(0x0896c7)
	    message.channel.sendEmbed(embed)
}
});

client.on("message", message => {
if(message.channel.type != "dm"){
let emoji = message.guild.emojis.find("name", "HUHypeSquad")
const cuvant = ["HYPE"];
const cuvant2 = ["Hype"];
const cuvant3 = ["hype"]
if(message.content.includes(cuvant) || message.content.includes(cuvant2) || message.content.includes(cuvant3)){
message.react(emoji)}}
});

client.on("message", message => {
if(message.content.startsWith("/send")){
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have the correct permission.")
	let mesaj = message.content.slice(5);
	message.channel.send(mesaj).then(
    message.delete() 
)}
});

client.on("message", message => {
if(message.channel.id === "410817115793391617"){
let sender = message.author
let romanian = message.channel.guild.roles.find("name", "HYPE - Romanian")
let english = message.channel.guild.roles.find("name", "HYPE - English")
let awaiting = message.channel.guild.roles.find("name", "⏰ | HYPE - Awaiting")
let hypers = message.channel.guild.roles.find("name", "🔥 | Hypers")
let emoji2 = message.channel.guild.emojis.find("name", "HUnanamiKarenWave")

if(message.content.startsWith("/romanian")){
message.guild.member(sender).addRole(romanian)
message.guild.member(sender).removeRole(awaiting)
message.guild.member(sender).addRole(hypers)
client.channels.get("409293635704848394").send(emoji2 + " [+] **" + message.author.username + "**.")
	message.delete()}

if(message.content.startsWith("/english")){
message.guild.member(sender).addRole(english)
message.guild.member(sender).removeRole(awaiting)
message.guild.member(sender).addRole(hypers)
client.channels.get("410812137007743003").send(emoji2 + " [+] **" + message.author.username + "**.")
	message.delete()}
}
});

client.on("message", message => {
if(message.author.id === "390155343373533195"){
if(message.content.startsWith("msg1")){
let emoji = message.guild.emojis.find("name", "HUHypeSquad")
client.channels.get("409293635704848394").send(emoji + " Momentan, pe server sunt online **" + message.guild.members.filter(m => m.presence.status !== 'offline').size + "** membri.")
client.channels.get("410812137007743003").send(emoji + " Currently there are **" + message.guild.members.filter(m => m.presence.status !== 'offline').size + "** online members.")
}}
});

client.login("NDA5MzcyODcwMjU5NjM4Mjcz.DVdpxw.IDql-6-5uGkCM8Z9gtFVGUcLnmk");
