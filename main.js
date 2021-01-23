'use strict';
const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);

const createWindow = () => {
    const win = new BrowserWindow({
        show: false,    // disables rendering until ready-to-show occurs
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: false,
            enableRemoteModule: false
        },

    });
    win.once('ready-to-show', () => {   // render once ALL reources have loaded
        win.show();
    });
    win.loadFile('./ui/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});