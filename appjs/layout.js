const logo_start = document.getElementById('logo-start');
const facebookHover = document.getElementById('fb');
const instagramHover = document.getElementById("ig");
const youtubeHover = document.getElementById("you");
const searchHover = document.getElementById("sea");
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
const boton_about_toform =document.getElementById('boton-about-toform');
const layoutsFixers = () =>{
    logo_start.addEventListener('mouseover', () =>{
        logo_start.style.cursor = "pointer";
    });
    facebookHover.addEventListener('mouseover', () =>{
        facebookHover.style.cursor = "pointer";
    });
    instagramHover.addEventListener('mouseover', () =>{
        instagramHover.style.cursor = "pointer";
    });
    youtubeHover.addEventListener('mouseover', () =>{
        youtubeHover.style.cursor = "pointer";
    });
    searchHover.addEventListener('mouseover', () =>{
        searchHover.style.cursor ="pointer";
    });
    start_page.addEventListener('mouseover', () =>{
        start_page.style.color = "#ff9002";
        start_page.style.cursor = "pointer";
    });
    start_page.addEventListener('mouseout', () =>{
        start_page.style.color = "#ffffff";
    });
    ours_page.addEventListener('mouseover', () =>{
        ours_page.style.color = "#ff9002";
        ours_page.style.cursor = "pointer";
    });
    ours_page.addEventListener('mouseout', () =>{
        ours_page.style.color = "#ffffff";
    });
    products_page.addEventListener('mouseover', () =>{
        products_page.style.color = "#ff9002";
        products_page.style.cursor = "pointer";
    });
    products_page.addEventListener('mouseout', () =>{
        products_page.style.color = "#ffffff";
    });
    contacts_page.addEventListener('mouseover', () =>{
        contacts_page.style.color = "#ff9002";
        contacts_page.style.cursor = "pointer";
    });
    contacts_page.addEventListener('mouseout', () =>{
        contacts_page.style.color = "#ffffff";
    });
    boton_build.addEventListener('mouseover', () =>{
        boton_build.style.backgroundColor = "rgb(79, 184, 13)";
        boton_build.style.cursor = "pointer";
    });
    boton_build.addEventListener('mouseout', () =>{
        boton_build.style.backgroundColor = "rgba(167, 244, 25, 0.898)";
    });
    view_more_boton.addEventListener('mouseover', () =>{
        view_more_boton.style.backgroundColor = "rgb(255, 106, 0)";
        view_more_boton.style.cursor = "pointer";
    });
    view_more_boton.addEventListener('mouseout', () =>{
        view_more_boton.style.backgroundColor = "orange";
    });
    your_order_boton.addEventListener('mouseover', () =>{
        your_order_boton.style.backgroundColor = "rgb(255, 106, 0)";
        your_order_boton.style.cursor = "pointer";
    });
    your_order_boton.addEventListener('mouseout', function(){
        your_order_boton.style.backgroundColor = "orange";
    });
    view_more_botoncontainer.addEventListener('mouseover', () =>{
        view_more_botoncontainer.style.backgroundColor = "rgb(255, 106, 0)";
        view_more_botoncontainer.style.cursor = "pointer";
    });
    view_more_botoncontainer.addEventListener('mouseout', () =>{
        view_more_botoncontainer.style.backgroundColor = "orange";
    });
    viewer_boton_products.addEventListener('mouseover', () =>{
        viewer_boton_products.style.backgroundColor = "rgb(255, 106, 0)";
        viewer_boton_products.style.cursor = "pointer";
    });
    viewer_boton_products.addEventListener('mouseout', () =>{
        viewer_boton_products.style.backgroundColor = "orange";
    });
    view_more_bottonn_gallery.addEventListener('mouseover', () =>{
        view_more_bottonn_gallery.style.backgroundColor = "rgb(255, 106, 0)";
        view_more_bottonn_gallery.style.cursor = "pointer";
    });
    view_more_bottonn_gallery.addEventListener('mouseout', () =>{
        view_more_bottonn_gallery.style.backgroundColor = "orange";
    });
    boton_about_toform.addEventListener('mouseover', () =>{
        boton_about_toform.style.backgroundColor = "rgb(255, 106, 0)";
        boton_about_toform.style.cursor = "pointer";
    });
    boton_about_toform.addEventListener('mouseout', () =>{
        boton_about_toform.style.backgroundColor = "orange";
    });
}
window.onload = layoutsFixers();