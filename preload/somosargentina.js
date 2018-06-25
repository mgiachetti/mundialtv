const { withTag, makeVisible } = require('./commons');

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.style.display = 'none';
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
                display: 'block',
            }).html($('iframe'));

            makeVisible();
        });
    });
});