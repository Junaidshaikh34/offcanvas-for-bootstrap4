$(document).ready(function () {
  $(".toggle-drawer").on("click", function () {
    var drawerItem = $(this).data("drawer");
    console.log("drawerItem", drawerItem);
    $("body").toggleClass("drawer-overlay");
    // $("[data-drawer=" + drawer + "]").toggleClass("active");
    $("#" + drawerItem).toggleClass("active");
  });
});
