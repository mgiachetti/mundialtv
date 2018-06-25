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

function play() {
    ipcRenderer.sendToHost('play-click');
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.style.display = 'none';
    $(function() {
        withTag('iframe[allowfullscreen]', elem => {
            elem.on('load', () => {
                $('body').css({
                    display: 'flex',
                    'flex-direction': 'column',
                    'justify-content': 'center',
                    'align-items': 'center',
                    backgroundColor: '#000000',
                    height: '100vh',
                    width: '100vw',
                    overflow: 'hidden',
                });
                elem.css({
                    margin: 'auto',
                    maxWidth: '135vh',
                    maxHeight: '100%',
                    height: `100%`,
                    width: '100vw',
                });
                $('body').html(elem)
                
                setTimeout(play, 300);
            });
        });
    });
});