// shop menu
var shopMenu=document.getElementByClassName('shopMenu');
var shop=document.getElementByClassName('shop');

shop.addEventListener('click',()=>{
    alert(clicked);
    shopMenu.classList.add("open");
})