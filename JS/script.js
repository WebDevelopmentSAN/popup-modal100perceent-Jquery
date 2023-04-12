// Open the modal when the button is clicked
$("#openModalBtn").on("click", function() {
  $("#myModal").css("display", "block");
});

// Close the modal when the close button is clicked
$(".close").on("click", function() {
  $("#myModal").css("display", "none");
});

// Close the modal when clicking outside of it
$(window).on("click", function(event) {
  if (event.target == document.getElementById("myModal")) {
    $("#myModal").css("display", "none");
  }
});
