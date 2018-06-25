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

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.style.display = 'none';
    injectJquery(function() {
        withTag('iframe',(elem) => {
            elem.css({
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
            }).html(elem);
        });
    });
});