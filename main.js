// This is the Electron entry point

const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600, autoHideMenuBar: true});

  // Specify entry point
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:4200');
    // devtools
    win.webContents.openDevTools();
  } else {
    win.loadURL(`file://${__dirname}/electron-app/index.html`);
  }

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
