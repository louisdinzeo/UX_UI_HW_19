console.log
$(document).ready(function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  $('.dropdown-menu').click(function() {
    var selectedOption = $(this).text();
    $('.dropdown-toggle').text(selectedOption);
  });
});
