
$('.carousel').carousel({
    interval: 10000,
    keyboard: true,
    pause: "hover",
});

$(document).bind('keyup', function(e) {
    if(e.which == 39){
        $('.carousel').carousel('next');
    }
    else if(e.which == 37){
        $('.carousel').carousel('prev');
    }
});



function Alarm(){
    var x = document.getElementById("fire");
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
    }
    else {
        x.style.visibility = "visible";
    }
}