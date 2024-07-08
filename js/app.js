

/* Mantiene fija la navbar al scrollear hacia abajo */
const headerMenu=document.querySelector('.hm-header');

console.log(headerMenu.offsetTop);


window.addEventListener('scroll',()=>{
    if(window.scrollY> 80){
        headerMenu.classList.add('header-fixed');
    }else{
        headerMenu.classList.remove('header-fixed');
    }
})

/*=========================================
    Tabs
==========================================*/
if(document.querySelector('.hm-tabs')){

    const tabLinks=document.querySelectorAll('.hm-tab-link');
    const tabsContent=document.querySelectorAll('.tabs-content');

    tabLinks[0].classList.add('active');

    if(document.querySelector('.tabs-content')){
        tabsContent[0].classList.add('tab-active');
    }
    

    for (let i = 0; i < tabLinks.length; i++) {
        
        tabLinks[i].addEventListener('click',()=>{

            
            tabLinks.forEach((tab) => tab.classList.remove('active'));
            tabLinks[i].classList.add('active');
            
            tabsContent.forEach((tabCont) => tabCont.classList.remove('tab-active'));
            tabsContent[i].classList.add('tab-active');
            
        });
        
    }

}

/*=========================================
    MENU
==========================================*/

const menu=document.querySelector('.icon-menu');
const menuClose=document.querySelector('.cerrar-menu');

menu.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.remove('active');
})



//CARRITO
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('#cart-icon');
    const cartModal = document.querySelector('.cart');
    const closeBtn = document.querySelector('.close-cart');

   /*  const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.details-box');
    const cartItemTitle = document.querySelector('.cart-product-title');
    const cartCount = document.querySelector('cart-count');
    const cartTotal = document.querySelector('cart-total'); */
    
    // Mostrar la ventana emergente del carrito
    cartIcon.addEventListener('click', (event) => {
        event.preventDefault();
        cartModal.classList.add('active');
    });

    // Cerrar la ventana emergente del carrito
    closeBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.classList.remove('active');
        }
    });




    // Añadir productos al carrito
    /* let cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productInfo = event.target.parentElement;
            const productName = productInfo.querySelector('h3').innerText;
            const productPrice = productInfo.querySelector('.precio span').innerText;
            const productImage = productInfo.querySelector('img').src;
            
            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };
            
            cartItems.push(product);
            updateCart();
        });
    });
    
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('details-box');
            itemElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
            cartItemsContainer.appendChild(itemElement);
            
            total += parseInt(item.price.replace('$', ''));
        });
        
        cartTotal.innerText = `Total: $${total}`;
        cartCount.innerText = cartItems.length;
    } */



});




/* document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');


 
    
    let cartItems = [];
    
    // Mostrar la ventana emergente del carrito
    cartIcon.addEventListener('click', (event) => {
        event.preventDefault();
        cartModal.classList.add('open');
    });
    
    // Cerrar la ventana emergente del carrito
    closeBtn.addEventListener('click', () => {
        cartModal.classList.remove('open');
        

    });
    
    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.classList.remove('open');
        }
    });
    
    // Añadir productos al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productInfo = event.target.parentElement;
            const productName = productInfo.querySelector('h3').innerText;
            const productPrice = productInfo.querySelector('.precio span').innerText;
            
            const product = {
                name: productName,
                price: productPrice
            };
            
            cartItems.push(product);
            updateCart();
        });
    });
    
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
            cartItemsContainer.appendChild(itemElement);
            
            total += parseInt(item.price.replace('$', ''));
        });
        
        cartTotal.innerText = `Total: $${total}`;
        cartCount.innerText = cartItems.length;
    }
}); */