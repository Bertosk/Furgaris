const { app, BrowserWindow, shell, session, desktopCapturer } = require('electron');
const path = require('path');

// Lets the Windows installer create Start Menu and desktop shortcuts.
if (require('electron-squirrel-startup')) app.quit();

// Keep cases where every earlier version stored them.
// Electron names its data folder after "productName" (now "Furgaris").
// Without this line the app would open a new, empty folder and existing
// cases would seem to disappear. Must run before the app is ready.
app.setPath('userData', path.join(app.getPath('appData'), 'browsersentinel'));

function createWindow () {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Load the app. Keep this file name the same for every update.
  win.loadFile('Furgaris.html');

  // Open web links in your normal browser, not in a bare window.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) shell.openExternal(url);
    return { action: 'deny' };
  });

  // Stop a link from replacing the app itself.
  win.webContents.on('will-navigate', (event, url) => {
    if (url !== win.webContents.getURL()) {
      event.preventDefault();
      if (url.startsWith('http://') || url.startsWith('https://')) shell.openExternal(url);
    }
  });
}

app.whenReady().then(() => {
  // Lets the Capture button (screenshots into a case) work.
  if (session.defaultSession.setDisplayMediaRequestHandler) {
    session.defaultSession.setDisplayMediaRequestHandler((request, callback) => {
      desktopCapturer.getSources({ types: ['screen', 'window'] }).then(sources => {
        callback({ video: sources[0] });
      });
    }, { useSystemPicker: true });
  }
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
