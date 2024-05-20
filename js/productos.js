

/* Mantiene fija la navbar al scrollear hacia abajo */
const headerMenu=document.querySelector('.hm-header');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 80){
        headerMenu.classList.add('header-fixed');
    }else{
        headerMenu.classList.remove('header-fixed');
    }
})




