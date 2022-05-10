$(document).ready(function(){
let width = window.screen.availWidth;
 if(width > 1500){
  $('.section_7__block__slider').slick({
    slidesToShow:4
  });
  $('.section_4__block__slider').slick({
slidesToShow:3
  });
  $('.section_6__slider').slick({
    slidesToShow:3
  });
}else if(width > 1400){
  $('.section_7__block__slider').slick({
    slidesToShow:3
  });
  $('.section_4__block__slider').slick({
slidesToShow:3
  });
  $('.section_6__slider').slick({
    slidesToShow:3
  });
}else if(width > 1100){
  $('.section_7__block__slider').slick({
    slidesToShow:3
  });

  $('.section_4__block__slider').slick({
slidesToShow:2
  });
  $('.section_6__slider').slick({
    slidesToShow:2
  });

}else if(width>800){
  $('.section_7__block__slider').slick({
    slidesToShow:2
  });

  $('.section_4__block__slider').slick({
slidesToShow:1
  });

  $('.section_6__slider').slick({
    slidesToShow:1
  });
}else{
  $('.section_7__block__slider').slick({
    slidesToShow:1
  });

  $('.section_4__block__slider').slick({
slidesToShow:1
  });

  $('.section_6__slider').slick({
    slidesToShow:1
  });
}
  $('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
$(function(){
  $("#phone").mask("+999__999-99-99");
});
});
