const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        show: false,    // disables rendering until ready-to-show occurs
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.once('ready-to-show', () => {   // render once ALL reources have loaded
        win.show();
    });
    win.loadFile('index.html');
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