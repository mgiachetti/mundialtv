
const channels = {
    tyc: {
        url: 'http://www.televisionparatodos.tv/tycmundial/',
        preload: './preload/tyc.js',
    },
    tvpublica: {
        url: 'https://somosargentina.tvpublica.com.ar',
        preload: './preload/tvpublica.js',
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
    webview.src = channel.url
    webview.style = 'display:inline-flex; width:100%; height:100vh';
    document.body.prepend(webview);
    localStorage.lastChannel = channelName;
}

loadChannel(localStorage.lastChannel || 'tvpublica');
window.loadChannel = loadChannel;



