$(document).ready(function () {
    function fadeOutCircle(circle, duration) {
        circle.fadeOut(duration, function () {
            $(this).remove();
        });
    }

    $(this).keypress(function (e) {
        var size = Math.floor(Math.random() * 100) + 50;
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var circle = $('<div>', {
            css: {
                position: 'absolute',
                left: Math.random() * ($(document).width() - size),
                top: Math.random() * ($(document).height() - size),
                // left: e.pageX - (size / 2), pour le clic
                // top: e.pageY - (size / 2), pour le clic
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: color
            }
        }).appendTo('body').animate({ top: $(document).height() - size }, 2000, function () {
            fadeOutCircle(circle, 2000);
        });
    });
});