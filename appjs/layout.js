const start_page = document.getElementById('start_page');
const ours_page = document.getElementById('ours_page');
const products_page = document.getElementById('products_page');
const contacts_page = document.getElementById('contacts_page');
const boton_build = document.getElementById('boton-build');
const view_more_boton = document.getElementById('view-more-boton');
const your_order_boton = document.getElementById('your-order-boton');
start_page.addEventListener('mouseover', function(){
    start_page.style.color = "#ff9002";
});
start_page.addEventListener('mouseout', function(){
    start_page.style.color = "#ffffff";
});
ours_page.addEventListener('mouseover', function(){
    ours_page.style.color = "#ff9002";
});
ours_page.addEventListener('mouseout', function(){
    ours_page.style.color = "#ffffff";
});
products_page.addEventListener('mouseover', function(){
    products_page.style.color = "#ff9002";
});
products_page.addEventListener('mouseout', function(){
    products_page.style.color = "#ffffff";
});
contacts_page.addEventListener('mouseover', function(){
    contacts_page.style.color = "#ff9002";
});
contacts_page.addEventListener('mouseout', function(){
    contacts_page.style.color = "#ffffff";
});
boton_build.addEventListener('mouseover', function(){
    boton_build.style.backgroundColor = "rgb(87, 176, 31)";
});
boton_build.addEventListener('mouseout', function(){
    boton_build.style.backgroundColor = "rgba(167, 244, 25, 0.898)";
});
view_more_boton.addEventListener('mouseover', function(){
    view_more_boton.style.backgroundColor = "rgb(255, 106, 0)";
});
view_more_boton.addEventListener('mouseout', function(){
    view_more_boton.style.backgroundColor = "orange";
});
your_order_boton.addEventListener('mouseover', function(){
    your_order_boton.style.backgroundColor = "rgb(255, 106, 0)";
});
your_order_boton.addEventListener('mouseout', function(){
    your_order_boton.style.backgroundColor = "orange";
});