// add attribute to a
const allAnchors = document.getElementsByTagName('a')
for(let a of allAnchors){
  a.target = '_blank'
}

// main sections & navigator
const mainSections = document.querySelectorAll('main>section')
const navSections = document.querySelectorAll('nav li[data-sec]')
navSections.forEach(sec=>{
  sec.addEventListener('click',()=>{
    mainSections.forEach(sec=>{
      sec.classList.remove('active')
    })
    document.querySelector(`.${sec.dataset.sec}`).classList.add('active')
  })
})