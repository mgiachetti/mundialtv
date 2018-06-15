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
    $(function() {
        setTimeout(() => {
            withTag('#player', elem => {
                $('body').css({
                    padding: '0',
                    margin: '0',
                    backgroundColor: '#000000',
                    height: '100vh',
                    width: '100%',
                    overflow: 'hidden',
                });
                elem.css({
                    height: '100%',
                    margin: 'auto',
                    width: '135vh',
                    maxWidth: '100%',
                })
                $('body').html(elem)
                playerInstance.play()
            });
        }, 5000)
    });
});