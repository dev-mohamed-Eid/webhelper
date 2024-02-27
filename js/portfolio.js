let projects = [
  {
    titele:'portfolio 1',
    imgSrc:'imgs/templete1.png',
    aHref:'https://webhelpercloud.github.io/portfolio-1',
    content:`<p class='price' data-lang='price1'>
    The template has many colors to suit all tastes.
    <br>
    the template cost 50$ with free domain & 5 months host.
    </p>`,
  },
  {
    titele:'portfolio 2',
    imgSrc:'imgs/templete2.png',
    aHref:'https://webhelpercloud.github.io/portfolio-2',
    content:`<p class='price' data-lang='price2'>
    The template is very simple and affordable.
    <br>
    the template cost 30$ with free domain & 3 months host.
    </p>`,
  },
  {
    titele:'portfolio 3',
    imgSrc:'imgs/templete3.png',
    aHref:'https://webhelpercloud.github.io/portfolio-3',
    content:`<p class='price' data-lang='price3'>
    The template has a distinctive character and is suitable for lovers of dark theme.
    <br>
    the template cost 50$ with free domain & 5 months host.
    </p>`
  },
  {
    titele:'portfolio 4',
    imgSrc:'imgs/templete4.png',
    aHref:'https://webhelpercloud.github.io/portfolio-4',
    content:`<p class='price' data-lang='price4'>
    the template is simple and suitable for who won't attach their photo.
    <br>
    the template cost 20$ with free domain & 3 months host.
    </p>`
  },
  {
    titele:'portfolio 5',
    imgSrc:'imgs/templete5.png',
    aHref:'https://webhelpercloud.github.io/portfolio-5',
    content:`<p class='price' data-lang='price5'>
    the template is so simple and suitable for low budgets.
    <br>
    the template cost 25$ with free domain & 3 months host.
    </p>`
  },
  {
    titele:'portfolio 6',
    imgSrc:'imgs/templete6.png',
    aHref:'https://mohamed.webhelper.cloud',
    content:`<p class='price' data-lang='price6'>
    The template is unique and suitable for animation lovers.
    <br>
    the template cost 60$ with free domain & 5 months host.
    </p>`
  },
]

projects.forEach((project,x)=>{
  portfolio.insertAdjacentHTML('beforeend',`
    <div class="project">
      <img src="${project.imgSrc}" alt="go to the web page .">
      <div class="details">
        <h2>${project.titele}</h2>
        <i class="fa-solid fa-ellipsis explain fixI openPopup" data-open="des${x}">
          <span>about project</span>
        </i>
        <a href="${project.aHref}">
          <i class="fa-solid fa-arrow-up-right-from-square explain fixI">
            <span>open project</span>
          </i>
        </a>
      </div>
    </div>
  `)
  main.insertAdjacentHTML('afterend',`
  <!-- start popup -->
  <div class="popup description des${x}">
    <div class="content">
      <i class="fa-solid fa-xmark fixI closePopup" data-close="des${x}"></i>
      <h2>${project.titele}</h2>
        ${project.content}
      <iframe class='iframe${x}' src="" title="portfolio"></iframe>
      <div class="contact">
        <div class="icons">
          <a title="facebook" href="https://www.facebook.com/profile.php?id=100090499898533">
            <span data-lang="get">get it</span>
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a title="chat me" class="active" href="https://wa.me/1551726541">
            <span data-lang="get">get it</span>
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a title="mail me" href="mailto: [mohamed@webhelper.cloud]?subject=&body=">
            <span data-lang="get">get it</span>
            <i class="fa-solid fa-envelope fixI"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- end popup -->
  `)
  document.querySelector(`[data-open=des${x}]`).addEventListener("click",
  ()=>document.querySelector(`.iframe${x}`).src = project.aHref)
})
let popupOpen = document.querySelectorAll('.openPopup')
popupClose = document.querySelectorAll('.closePopup')

popupOpen.forEach(btn=>btn.addEventListener("click",()=>document.querySelector(`.${btn.dataset.open}`).style.cssText = 'transform:scale(1)'))