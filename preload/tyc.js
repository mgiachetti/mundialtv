function withTag(tag, fn) {
    var tag = $(tag)
    if (tag.length !== 0) {
        return fn(tag);
    }
    setTimeout(() => {
        withTag(tag, fn);
    }, 100);
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.style.display = 'none';
    $(function() {
        withTag('#player', elem => {
            $('body').css({
                padding: '0',
                margin: '0',
                backgroundColor: '#000000',
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                display: 'block',
            });
            elem.css({
                margin: 'auto',
                height: '100%',
                width: '135vh',
                maxWidth: '100vw',
                maxHeight: '100vh',
            });
            $('body').html(elem)
            playerInstance.play()
        });
    });
});