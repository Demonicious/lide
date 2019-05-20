const { app, BrowserWindow } = require("electron");

let win;

var createWindow = () => {
    // Create the browser window.
    win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
        nodeIntegration: true
        },
        title: "LIDE",
        resizable: true,
        frame: false,
        transparent: true
    })

    win.loadFile('resources/index.html')

    win.on('closed', () => {
        win = null
    })
}

app.on("ready", createWindow);
app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})