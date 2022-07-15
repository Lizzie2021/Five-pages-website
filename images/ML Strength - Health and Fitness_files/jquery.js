$(function () {
  $("header").load("includes/header.html");
  $("footer").load("includes/footer.html");
});
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
