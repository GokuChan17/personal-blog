$("#sidebarCollapse").on("click", function() {
  $("nav").toggleClass("active");
  $(".wrapper").toggleClass("menuup");
  $(".mobile-wrapper").toggleClass("hide");
});