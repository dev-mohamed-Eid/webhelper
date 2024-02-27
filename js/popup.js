// popup offer
setTimeout(()=>popup.style.cssText = 'transform:scale(1)'
,sessionStorage.getItem("opened")? turn*5 : (sec.length + 2)*turn)

// close popup
popupClose.forEach(btn=>btn.addEventListener("click",()=>document.querySelector(`.${btn.dataset.close}`).style.cssText = 'transform:scale(0)'))
