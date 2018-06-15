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
        withTag('.load-featured-video-content',(elem) => {
            elem.click()
            $('.navbar').remove()
            $('iframe').css({
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
            });
            $('body').css({
                padding: '0',
                margin: '0',
                backgroundColor: '#000000',
                height: '100vh',
                overflow: 'hidden',
            }).html($('iframe'));
        });
    });
});