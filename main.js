$('.header-right a').click (
  function(){
    $('.hamburger-menu').show();
  }
);
$('.hamburger-menu .close').click(
  function(){
    $('.hamburger-menu').hide();
  }
);

// tentativo con variabile


// $('.fas.fa-bars').click(
//   function(){
//     var visible = $('hamburger-menu').hasClass('none');
//     if (visible){
//       $('hamburger-menu').remooveClass('none');
//     }
//     else{
//       $('hamburger-menu').addClass('none')
//     }
//   }
// )
