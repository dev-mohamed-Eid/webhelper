// intro vars
const sec = document.querySelectorAll('.sec')
const turn = 3500;

// portfolio section
const portfolio = document.querySelector('.portfolio')

// it will decleard after portfolio load
let popupClose = document.querySelectorAll('.closePopup')

// contact vars 
const anchors = document.querySelectorAll('.icons a')

// get siblings
var siblings = n => [...n.parentElement.children].filter(c=>c.nodeType == 1 && c!=n)

