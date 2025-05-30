# open-with-IDEA README

![image](https://github.com/PostCyberPunk/OpenWithRider/assets/134976996/77a6a693-97b5-4f8c-9ce7-1eaac569d1fd)

## Features

Open your current file in IntelliJ IDEA on same line and column

## Requirements

Add IDEA to PATH
on mac:

```
sudo ln -s "/Applications/IntelliJ IDEA.app/Contents/MacOS/idea" /usr/local/bin/idea
```

or

```
sudo ln -s "/Applications/IntelliJ IDEA CE.app/Contents/MacOS/idea" /usr/local/bin/idea
```

on Windows:
Add the IDEA bin directory to your PATH environment variable. The default location is:

```
C:\Program Files\JetBrains\IntelliJ IDEA\bin
```

## Extension Settings

You can setup a keyboard shortcut to command:

```
{
  "key": "",
  "command": "open-with-idea.open"
}
```

## Deployment

After you make your changes and run and test them with `F5`, you will want to compile the project to a VSIX file.

1. `npm run compile`
2. `npm install -g @vscode/vsce`
3. `vsce package`
4. Install the recently created file by running:
   `code --install-extension open-with-idea-0.0.1.vsix`
