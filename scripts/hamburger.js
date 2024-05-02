
$(document).ready(function() {
    if ($(document).width() > 1150) {
      $("#hamburger").addClass("hidden");
      $("#menu").removeClass("hidden");
      $("#drop-down").addClass("hidden");
    } else {
      $("#hamburger").removeClass("hidden");
      $("#menu").addClass("hidden");
      $("#drop-down").addClass("hidden");
    }
});

$(window).resize(function() {
    if ($(document).width() > 1150) {
      $("#hamburger").addClass("hidden");
      $("#menu").removeClass("hidden");
      $("#drop-down").addClass("hidden");
    } else {
      $("#hamburger").removeClass("hidden");
      $("#menu").addClass("hidden");
      $("#drop-down").addClass("hidden");
    }
});

$("#hamburger").click(function() {
  $("#hamburger").addClass("hidden");
  if ($("#drop-down").hasClass("hidden")) {
    $("#drop-down").removeClass("hidden");
  } else {
    $("#drop-down").addClass("hidden");
  }
});


$("#exitBtn").click(function() {
  $("#drop-down").addClass("hidden");
  $("#hamburger").removeClass("hidden");
});
