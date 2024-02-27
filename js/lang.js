const langs = {
  en: {
    language:'Ar',
    navLi1:'home',
    navLi2:'products',
    navLi3:'templates',
    navLi4:'about us',
    h1: "Hello, if you want to have a website, you have come to the right place 😊",
    p1: "if you don't know anything about how to have a website.",
    p2: "don't worry we are here.",
    p3: "we will help you to get your website.",
    p4: "starting from coding.",
    p5: "to publishing it on the internet.",
    p6: "be comfortable, we will do everything on your behalf.",
    p7: "Without exploiting you to take your money as other companies do.",
    p8: "We will answer all your questions.",
    contact1: "contact us",
    get: "get it",
    h2:"special offer for you.",
    aboutSec:'The company was established to help people who lack knowledge in the world of websites to get a website on the Internet away from the exploitation of large companies.',
    aboutSec1:'we will help you to get your website with your name starting from coding to publishing it on the internet with the Lowest costs.',
    price1:`The template has many colors to suit all tastes.
    <br>
    the template cost 50$ with free domain & 5 months host`,
    price2:`The template is very simple and affordable.
    <br>
    the template cost 30$ with free domain & 3 months host`,
    price3:`The template has a distinctive character and is suitable for lovers of dark theme.
    <br>
    the template cost 50$ with free domain & 5 months host`,
    price4:`the template is simple and suitable for who won't attach their photo.
    <br>
    the template cost 20$ with free domain & 3 months host.`,
    price5:`the template is so simple and suitable for low budgets.
    <br>
    the template cost 25$ with free domain & 3 months host.`,
    price6:`The template is unique and suitable for animation lovers.
    <br>
    the template cost 60$ with free domain & 5 months host.`,
    "portfolio-h2":`Don't worry about how you will change the content, color, or upload it online, just choose the template that suits you and leave the rest to us.`,
  },
  ar: {
    language: "En",
    navLi1:'الرئيسية',
    navLi2:'منتجاتنا',
    navLi3:'القوالب',
    navLi4:'عنا',
    h1: "مرحبًا ، إذا كنت تريد أن يكون لديك موقع على شبكة الإنترنت ، فقد وصلت إلى المكان الصحيح 😊",
    p1: "إذا كنت لا تعلم أي شئ عن كيفيه امتلاك موقع الكتروني.",
    p2: "لا تقلق نحن هنا.",
    p3: "سوف نساعدك لتحصل علي موقعك الالكتروني.",
    p4: "بدايه من كتابه الكود.",
    p5: "وحتي نشره علي الانترنت.",
    p6: "كن مرتاحا سنقوم بكل شئ بالنيابه عنك.",
    p7: "بدون استغلالك للحصول علي امواك مثلما تفعل الشركات الاخري.",
    p8: "سوف نجيب علي كل اسئلتك.",
    contact1: "تواصل معنا",
    get: "احصل عليه",
    h2:"عرض خاص لك.",
    aboutSec:'تم انشاء الشركه لمساعده الاشخاص المفتقرين للمعرفه في عالم المواقع الالكترونيه للحصول علي موقع الكتروني علي الانترنت بعيدا عن استغلال الشركات الكبري .',
    aboutSec1:'سنساعدك في الحصول على موقع الويب الخاص بك باسمك بدءًا من الترميز وحتى نشره على الإنترنت بأقل التكاليف.',
    price1:`القالب يتغير لونه ليناسب جميع الاذواق.
    <br>
    تكلفه القالب 50$ مع دومين مجاني واستضافه لمده 5 أشهر.`,
    price2:`القالب بسيط جدا وتكلفته معتدله.
    <br>
    تكلفه القالب 30$ مع دومين مجاني واستضافه لمده 3 اشهر.`,
    price3:`القالب له طابع مميز ومناسب لمحبي المظهر الداكن.
    <br>
    القالب تكلفته 50$ مع دومين مجاني واستضافه لمده 5 اشهر.`,
    price4:`القالب بسيط ومناسب لمن لا يحب وضع صوره وبتكلفه منخفضه.
    <br>
    القالب تكلفته 20$ مع دومين مجاني واشتضافه لمده 3 اشهر.`,
    price5:`القالب بسيط جدا ومناسب للميزانيات المنخفضه.
    <br>
    القالب تكلفته 25$ مع دومين مجاني واستضافه لمده 5 اشهر.`,
    price6:`القالب فريد من نوعه ومناسب لمحبي التحريك الكثير.
    <br>
    القالب تكلفته 60$ مع دومين مجاني واستضافه لمده 5 اشهر.`,
    "portfolio-h2":`لا تقلق بشأن كيفية تغيير المحتوى أو اللون أو تحميله عبر الإنترنت ، فقط اختر النموذج الذي يناسبك واترك الباقي لنا.`,
  },
};

let defultLang = localStorage.getItem('defultLang') || 'ar';

window.addEventListener('load',()=>changeLang())

lang.addEventListener('click',()=>{
  changeDefult()
  changeLang()
})

function changeLang(){
  localStorage.setItem("defultLang", defultLang)
  document.querySelectorAll('[data-lang]').forEach(e=>{
    e.innerHTML = langs[defultLang || 'ar'][e.getAttribute("data-lang")]
  })
  defultLang = localStorage.getItem("defultLang")
  if(defultLang == 'ar'){
    document.body.classList.add('dir')
    document.documentElement.classList.add('dir')
  }else{
    document.body.classList.remove('dir')
    document.documentElement.classList.remove('dir')
  }
}
function changeDefult(){
  defultLang == 'ar' ? defultLang = 'en' : defultLang = 'ar'
}