const { withTag, makeVisible, play } = require('./commons');

function setFull(elem) {
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
        padding: 'auto',
        maxWidth: '177vh',
        maxHeight: '100%',
        height: `56vw`,
        width: '100vw',
    });
    $('body').html(elem)
    makeVisible();
    setTimeout(play, 300);
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.style.display = 'none';
    $(function() {
        if ($('div#player').length > 0) {
            setTimeout(() => {
                setFull($('div#player'))
            }, 1000);
        } else {
            withTag('iframe[allowfullscreen]:first', elem => {
                elem.on('load', () => setFull(elem));
            });
        }
    });
});