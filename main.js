console.log("Processo principal")

const { app, BrowserWindow, nativeTheme } = require('electron')

//Janela principal let win
let win

//const é uma função , new é um objeto que acessa alt e larg, autohide é para mexer no estilo, minimizable false(nao deixa minimizar a janela), resizable tira o maximiar e o minimizar além de bloquear o tamanho da tela
const createWindow = () => {
    //a linha abaixo define o tem claro ou escuro
    nativeTheme.themeSource = 'light' //dark ou light, system se adpata a cor do sistema
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        //autoHideMenuBar: true,
        //minimizable: false,
        resizable: false
    })

    win.loadFile('./src/views/index.html')
}
//iniciar a aplicação, darwin é para mac
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})