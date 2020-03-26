"use strict";

$(() => {
    // draggableの設定
    $("#main-draggable").draggable({
        drag(event, ui) {
            // dragの際に、一緒に動かす
            $('.sub').css(ui.position);
        }
    });
});
