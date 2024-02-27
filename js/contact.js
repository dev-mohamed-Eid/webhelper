anchors.forEach(a=>{
  a.target = '_blank'
  a.addEventListener('mouseover',()=>{
    siblings(a).forEach(e=>e.classList.remove('active'))
    a.classList.add('active')
  })
})