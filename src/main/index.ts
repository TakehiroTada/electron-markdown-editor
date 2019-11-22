import { app, BrowserWindow } from 'electron'

const onReady = async () => {
  let win: BrowserWindow | null
  win = new BrowserWindow({
    width: 1000,
    height: 700,
    title: "Electron Markdown Editor",
    frame: true,
    resizable: true,
    transparent: true
  })
  win.loadURL('http://localhost:8080')

  // ChromiumのDevツールを開く
  win.webContents.openDevTools()

  win.on('closed', function () {
    win = null
  })
}
app.once('ready', onReady)
app.on('window-all-closed', () => {
  app.quit()
})
