
$(document).ready(function() {
    $("#dropdown-content1").addClass("hidden");
    $("#dropdown-minus1").addClass("hidden");

    $("#dropdown-content2").addClass("hidden");
    $("#dropdown-minus2").addClass("hidden");

    $("#dropdown-content3").addClass("hidden");
    $("#dropdown-minus3").addClass("hidden");
});

// $(window).resize(function() {
//     if ($(document).width() > 1150) {
//       $("#hamburger").addClass("hidden");
//       $("#menu").removeClass("hidden");
//       $("#drop-down").addClass("hidden");
//     } else {
//       $("#hamburger").removeClass("hidden");
//       $("#menu").addClass("hidden");
//       $("#drop-down").addClass("hidden");
//     }
// });

$("#dropdown-button1").click(function() {
    $("#dropdown-content1").removeClass("hidden");
    $("#dropdown-button1").addClass("hidden");
    $("#dropdown-minus1").removeClass("hidden");
});

$("#dropdown-minus1").click(function() {
    $("#dropdown-content1").addClass("hidden");
    $("#dropdown-button1").removeClass("hidden");
    $("#dropdown-minus1").addClass("hidden");
});


$("#dropdown-button2").click(function() {
    $("#dropdown-content2").removeClass("hidden");
    $("#dropdown-button2").addClass("hidden");
    $("#dropdown-minus2").removeClass("hidden");
});

$("#dropdown-minus2").click(function() {
    $("#dropdown-content2").addClass("hidden");
    $("#dropdown-button2").removeClass("hidden");
    $("#dropdown-minus2").addClass("hidden");
});


$("#dropdown-button3").click(function() {
    $("#dropdown-content3").removeClass("hidden");
    $("#dropdown-button3").addClass("hidden");
    $("#dropdown-minus3").removeClass("hidden");
});

$("#dropdown-minus3").click(function() {
    $("#dropdown-content3").addClass("hidden");
    $("#dropdown-button3").removeClass("hidden");
    $("#dropdown-minus3").addClass("hidden");
});
