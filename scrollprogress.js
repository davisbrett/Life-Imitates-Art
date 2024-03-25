/* From https://www.w3schools.com/howto/howto_js_scroll_indicator.asp */

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}