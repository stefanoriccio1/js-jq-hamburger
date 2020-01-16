var menu = $(".hamburger-menu");

var visible = false;
menu.click(
  function () {
    if(visible == false) {
      $('ul').fadeIn();
      visible = true;
    } else {
      $('ul').fadeOut();
      visible = false;
    }
  }
);
