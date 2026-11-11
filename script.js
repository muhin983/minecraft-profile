import * as skinview3d from "skinview3d";

// EDIT YOUR PROFILE DETAILS HERE. Keep private Microsoft login credentials OFF this website.
const PROFILE = {
  username: "YourUsername",
  profileId: "PLAYER-0001",
  uuid: "Add your UUID here",
  microsoftAccount: "Not displayed",
  version: "26.3",
  skinPath: "assets/skin.png", // Put your own Minecraft skin PNG at this exact location.
  serverName: "YOUR SERVER NAME",
  serverAddress: "play.example.net",
  serverDescription: "Your Minecraft community starts here.",
  discordUrl: "#",
  youtubeUrl: "#",
  otherUrl: "#"
};

const $ = (id) => document.getElementById(id);
$("displayName").textContent = PROFILE.username;
$("usernameText").textContent = PROFILE.username;
$("profileId").textContent = PROFILE.profileId;
$("uuidText").textContent = PROFILE.uuid;
$("msText").textContent = PROFILE.microsoftAccount;
$("versionText").textContent = PROFILE.version;
$("serverName").textContent = PROFILE.serverName;
$("serverAddress").textContent = PROFILE.serverAddress;
$("serverDescription").textContent = PROFILE.serverDescription;
$("avatar").textContent = (PROFILE.username.trim()[0] || "?").toUpperCase();
$("discordLink").href = PROFILE.discordUrl;
$("youtubeLink").href = PROFILE.youtubeUrl;
$("otherLink").href = PROFILE.otherUrl;
$("year").textContent = new Date().getFullYear();

const viewer = new skinview3d.SkinViewer({
  canvas: $("skin_container"),
  width: 500,
  height: 500,
  skin: PROFILE.skinPath
});
viewer.background = null;
viewer.zoom = 0.85;
viewer.fov = 38;
viewer.animation = new skinview3d.IdleAnimation();
viewer.controls.enableRotate = true;
viewer.controls.enableZoom = false;

function toast(message) {
  $("toast").textContent = message;
  $("toast").classList.add("show");
  setTimeout(() => $("toast").classList.remove("show"), 1600);
}
async function copy(value, label) {
  try {
    await navigator.clipboard.writeText(value);
    toast(label + " copied!");
  } catch {
    toast("Copy unavailable in this browser");
  }
}
$("copyUsername").addEventListener("click", () => copy(PROFILE.username, "Username"));
$("copyAddress").addEventListener("click", () => copy(PROFILE.serverAddress, "Server address"));
