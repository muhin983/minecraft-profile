MINECRAFT PLAYER PROFILE — QUICK SETUP

1) Open script.js in a text editor.
2) Find the PROFILE object near the top.
3) Replace:
   - username
   - profileId (choose any display ID you like)
   - uuid (optional)
   - microsoftAccount (use a public display label only; never put a password/email if you want privacy)
   - version
   - serverName, serverAddress, serverDescription
   - discordUrl, youtubeUrl, otherUrl
4) Add your own Minecraft skin:
   - Create a folder named "assets" beside index.html if it does not exist.
   - Put your skin PNG inside it and name it skin.png.
   - The skin should be a standard Minecraft skin PNG (64x64 is typical).
5) Open index.html in a modern browser to preview. Internet is required for the 3D viewer and fonts (loaded from public CDNs).

FREE PUBLIC HOSTING (GitHub Pages):
1) Create/sign in to a GitHub account.
2) Create a new PUBLIC repository, e.g. minecraft-player-profile.
3) Upload index.html, style.css, script.js, README.txt and the assets folder with skin.png.
4) Open repository Settings > Pages.
5) Under Build and deployment, choose Deploy from a branch.
6) Select main branch and /(root), then Save.
7) GitHub will publish a public URL after deployment finishes.

IMPORTANT:
- Do not publish your Microsoft password, recovery codes, access tokens, or private account data.
- A manually entered server address is displayed as profile information; this starter version does not query live server status/player count.
- The 3D model uses skinview3d from a public CDN, so an internet connection is needed.
- To make the website public, upload the project to a hosting provider such as GitHub Pages. No paid hosting is required for this static site.
