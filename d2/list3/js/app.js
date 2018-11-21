$(document).ready(function(){
    var open_tag = $("#faq_box>dl>dd>strong");
    var close_tag = $("#all_close");
    
    function open(){
        $(this).siblings("p").toggleClass("answer");
    }

    function close_all(){
        $("#faq_box>dl>dd>p").addClass("answer");
    }

    open_tag.on("click", open);
    close_tag.on("click", close_all);
})