const setListener = (element, type, handler) => {
  if(!element){
    return;
  }
  element.addEventListener(type, handler);
  return  () => {
    element.removeEventListener(type, handler);
  };
}
const button_1 = document.querySelector('#button_click_1');
const button_2 = document.querySelector('#button_click_2');
const button_3 = document.querySelector('#button_click_3');

setListener(button_1,"click", ()=>{
window.location.href = "html/about.html";
});
setListener(button_2,"click", ()=>{
  window.location.href = "html/about.html";
});
setListener(button_3,"click", ()=>{
window.location.href = "html/about.html";
});
var select = document.querySelectorAll('.section_4__block__select');

for(let i = 0; i < select.length; i++){
  let select__element = select[i];
  setListener(select__element,"click", ()=>{
    for(let index = 0;index < select.length; index++){
    select[index].classList.remove('active');
    select__element.classList.add('active');
  }
  });
}
