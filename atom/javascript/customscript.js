var setLogo = function() {

  $('.moveable-img').each(function() {
    $(this).css('top',
      $('.default-img').offset().top -
      $(this).closest('.container').offset().top
    );
  });

};

$(document).scroll(function() {
  setLogo();
});

setLogo();
