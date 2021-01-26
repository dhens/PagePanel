'use strict';
const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);
require('./server.js')

const createWindow = () => {
    const win = new BrowserWindow({
        show: false,    // disables rendering until ready-to-show occurs
        width: 800,
        height: 600,
        resizable: true,
        // autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            enableRemoteModule: false
        },

    });
    win.once('ready-to-show', () => {   // render once ALL reources have loaded
        win.show();
    });
    win.loadFile('./ui/index.html');
}

const runExpress = () => {
    const hiddenWindow = new BrowserWindow({
        show: false,    // disables rendering until ready-to-show occurs
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            enableRemoteModule: false
        },

    });
    hiddenWindow.loadFile('./server.js');
}

app.whenReady().then(createWindow, runExpress);


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