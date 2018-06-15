
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
    webview.style = 'display:inline-flex; width:100%; height:100vh; opacity: 0';
    webview.addEventListener('did-stop-loading', () => {
        webview.style.opacity = '1';
    })
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



