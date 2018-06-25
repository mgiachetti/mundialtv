const { ipcRenderer } = require('electron')

function withTag(tag, fn) {
    var tag = $(tag)
    if (tag.length !== 0) {
        return fn(tag);
    }
    setTimeout(() => {
        withTag(tag, fn);
    }, 100);
}

function injectJquery(callback) {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.2.1.min.js";
    script.onload = script.onreadystatechange = function() {
        $(callback);
    };
    document.body.appendChild(script);
}

function makeVisible() {
    ipcRenderer.sendToHost('visible');
}

function play() {
    ipcRenderer.sendToHost('play');
}

module.exports = {
    withTag,
    injectJquery,
    makeVisible,
    play,
}