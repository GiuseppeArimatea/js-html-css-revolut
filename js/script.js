$(document).ready(
  function () {
    $('.ul > li.clicca').click(
      function () {
        $(this).next('.dropdown').toggleClass('dropdown.active');
      }
    );
  }
);
