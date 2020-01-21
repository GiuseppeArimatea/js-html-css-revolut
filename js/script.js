

$(document).ready(function () {
    $('ul > li.clicca').mouseenter(
      function () {
        $(this).children('.dropdown').addClass('active');
        $(this).find('i.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }
    );
    $('ul > li.clicca').mouseleave(
      function () {
         $(this).children('.dropdown').removeClass('active');
         $(this).find('i.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
       }
     )
  }
);
