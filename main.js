const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // electron挂载项目（本地/线上）
  const urlLocation = isDev ? 'http://127.0.0.1:3000' : ''
  mainWindow.loadURL(urlLocation)
})