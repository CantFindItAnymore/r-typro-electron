// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const { BrowserWindow } = require('electron').remote

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('send-to-main').addEventListener('click', () => {
    // 2个参数：- 事件名，- 发送内容
    ipcRenderer.send('renderMsg', 'IM renderProcess')
    let win = new BrowserWindow({width: 300, height: 300})
    win.loadURL('http://www.baidu.com')
  })
  ipcRenderer.on('reply', (event, arg) => {
    console.log(arg)
  })
})