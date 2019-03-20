# Transparent recipes for Franz

### Pull requests are accepted, it's simply css modifications, you can do this!

### Installation:
Themed recipes are intended for my fork of Franz. You can get it [here](https://github.com/MikeDabrowski/franz). It will allow you to change theme in settings.

##### If you have git installed

1. Close Franz
2. Go to Franz's directory (on Windows it's `%appdata%\Franz`)
3. Backup `recipes` directory by changing its name to something else.
4. Clone this repository to this directory `git clone https://github.com/MikeDabrowski/franz-transparent-recipes.git`
5. This should create new directory called `franz-transparent-recipes`, rename it to `recipes`
6. Start Franz
7. If you can't see transparent apps, try View > ReloadService (Ctrl+R on Windows) or create issue here

##### If you don't have git installed

1. Close Franz
2. Go to Franz's directory (on Windows it's `%appdata%\Franz`)
3. Backup `recipes` directory by changing its name to something else.
4. Download this repository as zip
5. Unpack downloaded file to this directory
6. Rename directory called `franz-transparent-recipes` to `recipes`
7. Start Franz
8. If you can't see transparent apps, try View > ReloadService (Ctrl+R on Windows) or create issue here

### Updating

##### If you have git
1. Go to Franz's recipes directory (on Windows it's `%appdata%\Franz\recipes`)
2. Open cmd/powershell/terminal in this folder (on Windows hold shift and right click on this dir and choose open cmd/powershell here)
3. Type `git pull`
4. Reload Franz or restart it

##### If you don't have git installed
Just follow installation instructions.

### Contributing

Theme name has to match Franz theme. At this moment available themes are:
* theme-transparent-dark
* theme-dark
* theme-regular (defaults all apps to their's default theme)
Propose new themes in my Franz-fork repo first: https://github.com/MikeDabrowski/franz

Rules:
1. theme name must match Franz theme name (see above)
2. Css file must have `theme-` prefix and `.css` extension.
3. If you use scss/less you have to compile css by yourself
4. For transparent themes add `html {background: none !important;}` to top of theme file.


Example:
```css
html {background: none !important;}
body.theme-pink header {background: pink;}
body.theme-pink header nav {color: white;}
body.theme-pink footer {background: deeppink;}
```
See existing themes for reference.

### Troubleshooting

#### Cannot add services
First make sure you use my fork of Franz and both are up to date. Original Franz doesn't allow adding recipes if it detects '.git' folder in recipes directory. This folder keeps git stuff inside and in my fork is simply ignored.
If you are sure this is not the case please create issue and post screenshots of Franz's developer console (View -> Toggle Dev Tools).
