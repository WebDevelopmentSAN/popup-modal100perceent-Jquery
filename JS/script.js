$(document).ready(function() {
    $("#myBtn").click(function() {
      $("#myModal").css("display", "block");
    });
  });
  

  $(document).ready(function() {
    $(".close").click(function() {
      $("#myModal").css("display", "none");
    });
  });
  $(document).ready(function() {
    $(".modal").click(function(e) {
      if ($(e.target).hasClass("modal")) {
        $("#myModal").css("display", "none");
      }
    });
  });
  