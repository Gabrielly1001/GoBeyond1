/*===== Menu Show ====*/
const showMenu = (toggle, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*Remove menu*/
const navLink = document.querySelectorAll('.nav_link'),
    navMenu = document.getElementById('nav-menu')

function linkAction(){
   navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==scroll sections active link==*/ 
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current=>{
     const sectionHeight = current.pageYOffsetHeight
     const sectionTop = current.offsetTop - 50
     sectionId = current.getAttribute('id')

     if(scrollY > sectionTop && scrolly <= sectionTop + sectionHeight){
         document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
     }else{
      document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
     }
  })
}

/*==change color header*/
window.onscroll = ()=>{
  const nav = document.getElementById('header')
  if(this.scrollY >=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}