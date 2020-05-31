const { app, BrowserWindow } = require('electron');



let window;

app.on("ready", () => {

  window = new BrowserWindow({
    height:400,
    width:400,
    webPreferences: {
      nodeIntegration:true
    }
  });
  window.loadFile('./views/LoginWindow.html');
  

}) 

