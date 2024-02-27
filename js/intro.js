if(sessionStorage.getItem("opened")){
  intro.addEventListener('load',animation())
  intro.addEventListener('scroll',animation)
  function animation(){
    sec.forEach(e=>{
      if(e.getBoundingClientRect().top >= -window.innerHeight/5 &&
        e.getBoundingClientRect().top <= window.innerHeight/3){
          e.classList.add('default')
      }
    })
  }
}else{
  intro.scrollTo(0,0)
  intro.addEventListener('load',scrolling())
  disableScroll()
}

function scrolling(){
  let x = 0;
  let y = 0;

  const scroll = setInterval(()=>{
    disableScroll()
    intro.scrollTo(0,x)
    sec[y].classList.add('default')
    y+=1
    x += intro.clientHeight
    // x += window.innerHeight*(window.innerWidth <= 500 ? 8.5 : 6.5)/10
  },turn)

  setInterval(()=>{
    enableScroll()
    clearInterval(scroll)
    sessionStorage.setItem("opened", true)
  },sec.length*turn)
}

// disableScroll & enableScroll
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  intro.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  intro.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  intro.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  intro.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  intro.removeEventListener('DOMMouseScroll', preventDefault, false);
  intro.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  intro.removeEventListener('touchmove', preventDefault, wheelOpt);
  intro.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}