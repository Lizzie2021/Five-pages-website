$("#submit").on("click", function () {
  $(".errMessage").fadeIn("fast");
});

$(".help").on("mouseover", function () {
  $("video").addClass("show");
  $(".close-icon").addClass("show-close-icon");
});

$(".close-icon").on("click", function () {
  $("video").removeClass("show");
  $(".close-icon").removeClass("show-close-icon");
});

$(".list-icon").on("click", function () {
  if ($("#navbar").hasClass("show-nav")) {
    $("#navbar").removeClass("show-nav");
  } else {
    $("#navbar").addClass("show-nav");
  }
});

$("#year").html(new Date().getFullYear());
