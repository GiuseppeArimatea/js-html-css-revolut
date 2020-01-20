

$(document).ready(
  function () {
    $('ul > li.clicca').mouseenter(
      function () {
        $(this).children('.dropdown').show();
      }
    );
    $('ul > li.clicca').mouseleave(
      function () {
         $(this).children('.dropdown').hide();
       }
     );
  }
);
