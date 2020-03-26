'use strict';

$(() => {
    // set draggable to main
    $("#main-draggable").draggable({
        drag(event, ui) {
            // move subs
            $('.sub').css(ui.position);
        }
    });
});
