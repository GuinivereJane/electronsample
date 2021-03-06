const { app, BrowserWindow } = require('electron')

function createWindow () {
// In the main process.

// Or use `remote` from the renderer process.
// const { BrowserWindow } = require('electron').remote

let win = new BrowserWindow({ 
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true
  },
  frame: false,
  alwaysOnTop: true,
 })
win.on('closed', () => {
  win = null
})

// Load a remote URL
win.loadURL('https://www.vidyard.com')


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
