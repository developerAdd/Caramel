const setListener = (element, type, handler) => {
  if(!element){
    return;
  }
  element.addEventListener(type, handler);
  return  () => {
    element.removeEventListener(type, handler);
  };
}
let width = window.screen.availWidth;
let about__element ="";
let about_block ="";
let about_text ="";
let delete__all ="";
let main = document.querySelectorAll('.content_row__service__main');

for(let i = 0; i < main.length; i++){
  let main__element = main[i];
  let main__text = main__element.querySelector('.content_row__service__main__text');
  setListener(main__text,"click", ()=>{
    about__element = main__element.querySelector('.content_row__service__about');
    if(about__element.classList.contains('active')){
      about__element.classList.remove('active');
    }else{
        delete__all = document.querySelectorAll('.active');
        delet();
        about__element.classList.add('active');
        about_text = about__element.querySelectorAll('.content_row__service__about__text');
        about_block = about__element.querySelectorAll('.content_row__service__about__select');
        for(let index = 0; index < about_text.length; index++){
          let about_text__element = about_text[index];
          let about_block__element = about_block[index];
          setListener(about_text__element,"click", ()=>{
            if(about_block__element.classList.contains('active')){
            }else{
            delete__all = about__element.querySelectorAll('.active');
            delet();
            about_block__element.classList.add('active');
            let select = about_block__element.querySelectorAll('.content_row__service__about__select__text');
            for(let index = 0; index < select.length; index++){
              let select__element = select[index];
              setListener(select__element,"click", ()=>{
                for(let index = 0; index < select.length; index++){
                delete__all = about_block__element.querySelectorAll('.active');
                delet();
                content_row__service__button.classList.add('activate');
                content_row__service.classList.remove('activate');
                content_row__service__button__text.innerText ="ВЫБРАТЬ";
                if(width<1100){
                  window.scrollTo(0,0);
                }
                // это конечный выбор услуги - вдруг поможет
                select__element.classList.add('active');
              }
              });
          }
        }
          });
        }
    }
     });
   }

     one_main__element = main[0];
     let one_main__text = one_main__element.querySelector('.content_row__service__main__text');
       about__element = one_main__element.querySelector('.content_row__service__about');
           delete__all = document.querySelectorAll('.active');
           delet();
           about__element.classList.add('active');
           about_text = about__element.querySelectorAll('.content_row__service__about__text');
           about_block = about__element.querySelectorAll('.content_row__service__about__select');
           for(let index = 0; index < about_text.length; index++){
             let about_text__element = about_text[index];
             let about_block__element = about_block[index];
             let select = about_block__element.querySelectorAll('.content_row__service__about__select__text');
             about_block[0].classList.add('active');
             select[0].classList.add('active');
             for(let index = 0; index < select.length; index++){
               let select__element = select[index];

             setListener(about_text__element,"click", ()=>{
               if(about_block__element.classList.contains('active')){
               }else{
               delete__all = about__element.querySelectorAll('.active');
               delet();
               about_block__element.classList.add('active');
           }
             });
             setListener(select__element,"click", ()=>{
               for(let index = 0; index < select.length; index++){
               delete__all = about_block__element.querySelectorAll('.active');
               delet();
               content_row__service__button.classList.add('activate');
               content_row__service.classList.remove('activate');
               content_row__service__button__text.innerText ="ВЫБРАТЬ";
               if(width<1100){
                 window.scrollTo(0,0);
               }
               // это конечный выбор услуги - вдруг поможет
               select__element.classList.add('active');
             }
             });
           }
           }

function delet(){
  for(let i = 0; i< delete__all.length; i++){
    delete__all[i].classList.remove('active');
  }
}

const close = document.querySelector('#close_pop_up_1');
const close__room = document.querySelector('#close_pop_up_2');
const button_popup = document.querySelector('#button_popup');
const page = document.querySelector('.page');
const popup = document.querySelector('.pou_up');
const popup__room = document.querySelector('.popup__room');
const block_js_1 = document.querySelector('#block_js_1');
const block_js_2 = document.querySelector('#block_js_2');
const button_service = document.querySelector('#service');

let content_row__service__button = document.querySelector('.content_row__service__button');
let content_row__service = document.querySelector('.content_row__service');
let content_row__service__button__text = document.querySelector('.content_row__service__button__text');


setListener(content_row__service__button,"click", ()=>{
  if(content_row__service__button.classList.contains('activate')){
    content_row__service__button__text.innerText ="ЗАКРЫТЬ";
  }else{
    content_row__service__button__text.innerText ="ВЫБРАТЬ";
  }
  content_row__service__button.classList.toggle('activate');
  content_row__service.classList.toggle('activate');
});

setListener(button_popup,"click", ()=>{
  popup.classList.add('activate');
  page.classList.add('__sending');
  block_js_1.classList.add('__opacity');
  block_js_2.classList.remove('__opacity');
  window.scrollTo(0,0);
});
setListener(close__room,"click", ()=>{
  popup__room.classList.remove('activate');
  page.classList.remove('__sending');
  popup.style.height = "725px";
  block_js_1.classList.add('__opacity');
  block_js_2.classList.remove('__opacity')
});
setListener(close,"click", ()=>{
  popup.classList.remove('activate');
  page.classList.remove('__sending');
  popup.style.height = "725px";
  block_js_1.classList.add('__opacity');
  block_js_2.classList.remove('__opacity')
});

setListener(button_service,"click", ()=>{
  popup.style.height = "501px";
  block_js_1.classList.remove('__opacity');
  block_js_2.classList.add('__opacity')
  window.scrollTo(0,0);
  });

  setListener(button_ok,"click", ()=>{
    popup.classList.remove('activate');
    popup__room.classList.add('activate');
    page.classList.add('__sending');
    popup.style.height = "725px";
    block_js_1.classList.add('__opacity');
    block_js_2.classList.remove('__opacity')
    window.scrollTo(0,0);
});
