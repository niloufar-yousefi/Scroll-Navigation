let _main = document.getElementsByTagName('main')[0]
let _div = document.getElementsByTagName('div')[0]
let _scrollTopOld = 0
let _span = document.querySelectorAll('span')
let flag = 0

_main.addEventListener('scroll', (e) => {
  let _scrollTopNew = e.target.scrollTop
  _span.forEach(element => {
    element.classList.remove('_scroll')
  });
  if (_scrollTopNew < _scrollTopOld) {
    console.log('up')
    _span[0].classList.add('_scroll')   
  } else {    
    console.log('down')    
    _span[1].classList.add('_scroll')
  }
  _scrollTopOld = _scrollTopNew
})

function myFunc1(s) {
  _main.scrollBy(0, -200)
  s.classList.add('_scroll')
  setTimeout(() => {
   s.classList.remove('_scroll')
  }, 1500);  
}

 function myFunc2(s) {
   _main.scrollBy(0, 200)
   s.classList.add('_scroll')
   setTimeout(() => {
    s.classList.remove('_scroll')
   }, 1500);  
 }

