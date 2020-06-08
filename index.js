const { app, BrowserWindow } = require('electron');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';



let window;

app.on("ready", () => {

  window = new BrowserWindow({
    height:400,
    width:400,
    webPreferences: {
      nodeIntegration:true
    }
  });
  window.loadFile('./views/MainWindow.html');
}) 



