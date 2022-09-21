const start_page = document.getElementById('start_page');
const ours_page = document.getElementById('ours_page');
const products_page = document.getElementById('products_page');
const contacts_page = document.getElementById('contacts_page');
const boton_build = document.getElementById('boton-build');
const view_more_boton = document.getElementById('view-more-boton');
const your_order_boton = document.getElementById('your-order-boton');
const view_more_botoncontainer = document.getElementById('view-more-botoncontainer');
const viewer_boton_products = document.getElementById('viewer-boton-products');
const view_more_bottonn_gallery = document.getElementById('view-more-bottonn-gallery');
const layoutsFixers = () =>{
    start_page.addEventListener('mouseover', () =>{
        start_page.style.color = "#ff9002";
    });
    start_page.addEventListener('mouseout', () =>{
        start_page.style.color = "#ffffff";
    });
    ours_page.addEventListener('mouseover', () =>{
        ours_page.style.color = "#ff9002";
    });
    ours_page.addEventListener('mouseout', () =>{
        ours_page.style.color = "#ffffff";
    });
    products_page.addEventListener('mouseover', () =>{
        products_page.style.color = "#ff9002";
    });
    products_page.addEventListener('mouseout', () =>{
        products_page.style.color = "#ffffff";
    });
    contacts_page.addEventListener('mouseover', () =>{
        contacts_page.style.color = "#ff9002";
    });
    contacts_page.addEventListener('mouseout', () =>{
        contacts_page.style.color = "#ffffff";
    });
    boton_build.addEventListener('mouseover', () =>{
        boton_build.style.backgroundColor = "rgb(79, 184, 13)";
    });
    boton_build.addEventListener('mouseout', () =>{
        boton_build.style.backgroundColor = "rgba(167, 244, 25, 0.898)";
    });
    view_more_boton.addEventListener('mouseover', () =>{
        view_more_boton.style.backgroundColor = "rgb(255, 106, 0)";
    });
    view_more_boton.addEventListener('mouseout', () =>{
        view_more_boton.style.backgroundColor = "orange";
    });
    your_order_boton.addEventListener('mouseover', () =>{
        your_order_boton.style.backgroundColor = "rgb(255, 106, 0)";
    });
    your_order_boton.addEventListener('mouseout', function(){
        your_order_boton.style.backgroundColor = "orange";
    });
    view_more_botoncontainer.addEventListener('mouseover', () =>{
        view_more_botoncontainer.style.backgroundColor = "rgb(255, 106, 0)";
    });
    view_more_botoncontainer.addEventListener('mouseout', () =>{
        view_more_botoncontainer.style.backgroundColor = "orange";
    });
    viewer_boton_products.addEventListener('mouseover', () =>{
        viewer_boton_products.style.backgroundColor = "rgb(255, 106, 0)";
    });
    viewer_boton_products.addEventListener('mouseout', () =>{
        viewer_boton_products.style.backgroundColor = "orange";
    });
    view_more_bottonn_gallery.addEventListener('mouseover', () =>{
        view_more_bottonn_gallery.style.backgroundColor = "rgb(255, 106, 0)";
    });
    view_more_bottonn_gallery.addEventListener('mouseout', () =>{
        view_more_bottonn_gallery.style.backgroundColor = "orange";
    });
}
window.onload = layoutsFixers();
