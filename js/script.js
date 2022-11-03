// force page to top on reload
history.scrollRestoration
  ? (history.scrollRestoration = "manual")
  : (onbeforeunload = function () {
      scrollTo(0, 0);
    });

// script for dropdown visibility
function showNav() {
  var dropdown = document.getElementById("list-items-wrapper");
  "flex" === dropdown.style.display
    ? (dropdown.style.display = "none")
    : (dropdown.style.display = "flex");
}

/* inject jQuery code for website preloader */
$(window).on("load", function () {
  $(".page-loader-wrapper").delay(1750).fadeOut("slow");
}),
  $("body").addClass("stop-scrolling"),
  setTimeout(function () {
    $("body").removeClass("stop-scrolling");
  }, 2e3);