
// const {ipcRenderer} = require('electron');
const channels = {
    tyc: {
        url: 'http://www.televisionparatodos.tv/tycmundial/',
        // url: 'http://superliga.gq/tyc.html',
        preload: './preload/tyc.js',
    },
    tvpublica2: {
        url: 'http://www.tvpublica.com.ar/vivo/',
        preload: './preload/tvpublica.js',
    },
    somosargentina: {
        url: 'https://somosargentina.tvpublica.com.ar',
        preload: './preload/somosargentina.js',
    },
    tvpublica: {
        url: 'https://somosargentina.tvpublica.com.ar',
        preload: './preload/somosargentina.js',
    },
}

function loadChannel(channelName) {
    const channel = channels[channelName];
    var element = document.getElementById('video');
    if (element) {
        element.parentNode.removeChild(element);
    }
    const webview = document.createElement('webview');
    webview.id = 'video';
    webview.setAttribute('preload', channel.preload);
    webview.setAttribute('disablewebsecurity', true);
    webview.src = channel.url
    webview.style = 'display:inline-flex; width:100%; height:100vh; opacity: 0';
    webview.addEventListener('did-stop-loading', () => {
        webview.style.opacity = '1';
    })

    webview.addEventListener('ipc-message', (e) => {
        console.log(...e.args)
        webview.sendInputEvent({type:'mouseDown', x:webview.clientWidth/2, y: webview.clientHeight/2, button:'left', clickCount: 1});
        webview.sendInputEvent({type:'mouseUp', x:webview.clientWidth/2, y: webview.clientHeight/2, button:'left', clickCount: 1});
    })

    // webview.addEventListener('console-message', (e) => {
    //     ipcRenderer.send('webview-log', e.message);
    // });

    
    //Then use IPC to send partition name to the main process:
    // webview.partition = 'no-xframe';
    // ipcRenderer.send('disable-x-frame', webview.partition);

    setTimeout(() => {
        console.log(webview.children);
        
    }, 5000);


    document.body.prepend(webview);
    localStorage.lastChannel = channelName;

    document.querySelectorAll('.channel').forEach(elem => elem.classList.remove('channel-active'));
    document.querySelector(`[channel=${channelName}]`).classList.add('channel-active');
}

document.querySelectorAll('.channel').forEach(e => {
    e.onclick = () => {
        loadChannel(e.getAttribute('channel'));
    };
});

loadChannel(localStorage.lastChannel || 'tvpublica');



