const burger = document.querySelector('.burger');
const nav = document.querySelector('.shapka__block__1__nav');
const up_arrow = document.querySelector('.upp_arrow');


var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-300);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

setListener(up_arrow,"click",()=>{
  up();
});

setListener(burger,"click",()=>{
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});
var list = nav.getElementsByTagName('a');
for(let i = 0; i < list.length; i++){
  let li = list[i];
  setListener(li,"click",()=>{
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
}


let timer = null
function startInterval() {
  timer = setInterval(function() {
    up_arrow.classList.remove('opacity');
  }, 3000);
}
function stopInterval() {
  clearInterval(timer);
}
window.addEventListener('scroll', function() {
  stopInterval();
  up_arrow.classList.add('opacity');
  startInterval();
});
