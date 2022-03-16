$(document).ready(function(){
    $("button,a").click(function(){
        $("body").toggleClass("menu-push");
        $("nav").toggleClass("menu-open");
    });
});
