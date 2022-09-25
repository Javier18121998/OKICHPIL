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
const subtitle_start = document.getElementById('subtitle-start');
const title_start = document.getElementById('title-start');
const title_Start = document.getElementById('title_Start');
const boton_build_text = document.getElementById('boton-build-text');
const view_more_boton = document.getElementById('view-more-boton');
const your_order_boton = document.getElementById('your-order-boton');
const view_more_botoncontainer = document.getElementById('view-more-botoncontainer');
const viewer_boton_products = document.getElementById('viewer-boton-products');
const view_more_bottonn_gallery = document.getElementById('view-more-bottonn-gallery');
const boton_about_toform = document.getElementById('boton-about-toform');
const view_more_boton_text = document.getElementById('view-more-boton-text');
const name_input = document.getElementById('name-input');
const mail_input = document.getElementById('mail-input');
const soth_input = document.getElementById('soth-input');
const mesaje_input = document.getElementById('mesaje-input');
const arrayInputs = ["Nombre", "Correo", "Asunto", "Mensaje"];
const layoutsFixers = () =>{
    boton_build_text.style.fontWeight = "bold";
    start_page.style.fontWeight = "lighter";
    ours_page.style.fontWeight = "lighter";
    products_page.style.fontWeight = "lighter";
    contacts_page.style.fontWeight = "lighter";
    start_page.style.color ="#ffffff";
    ours_page.style.color ="#ffffff";
    products_page.style.color ="#ffffff";
    contacts_page.style.color ="#ffffff";
    start_page.style.fontSize = "2.145vh";
    ours_page.style.fontSize = "2.145vh";
    products_page.style.fontSize = "2.145vh";
    contacts_page.style.fontSize = "2.145vh";
    boton_build.style.backgroundColor = "rgba(167, 244, 25, 0.898)";
    boton_build_text.style.color = "#ffffff";
    boton_build_text.style.fontSize = "2.549vh";
    subtitle_start.style.color = "#ff9002";
    subtitle_start.style.fontSize = "2.56vh";
    title_start.style.color = "#ffffff";
    title_start.style.fontSize = "13.4vh";
    title_start.style.margin = "0";
    title_Start.style.color = "#ffffff";
    title_Start.style.fontSize = "13.4vh";
    title_Start.style.margin = "0";
    view_more_boton_text.style.color = "#ffffff";
    view_more_boton_text.style.fontSize = "2.549vh";
    name_input.placeholder = arrayInputs[0];
    mail_input.placeholder = arrayInputs[1];
    soth_input.placeholder = arrayInputs[2];
    mesaje_input.placeholder = arrayInputs[3];
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
        boton_build_text.style.fontWeight = "lighter";
    });
    boton_build.addEventListener('mouseout', () =>{
        boton_build.style.backgroundColor = "rgba(167, 244, 25, 0.898)";
        boton_build_text.style.fontWeight = "bold";
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