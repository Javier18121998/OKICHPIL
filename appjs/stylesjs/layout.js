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
const principalHadder = () =>{
    let arrayInputs = ["Nombre", "Correo", "Asunto", "Mensaje"];    
    styles();
    layoutsFixers();
    const fromPlaceHolders = () =>{
        name_input.placeholder = arrayInputs[0];
        mail_input.placeholder = arrayInputs[1];
        soth_input.placeholder = arrayInputs[2];
        mesaje_input.placeholder = arrayInputs[3];
    }
    fromPlaceHolders();
}
const styles = () =>{
    let colors = ["#ffffff", "rgba(167, 244, 25, 0.898)", "#ff9002" ]
    let fontsFromSize = ["2.145vh", "2.549vh", "2.56vh", "13.4vh"]
    let fontsFromWeight = ["lighter", "bold"]
    let marginsFrom = ["0"];
    const improve = () =>{
        title_start.style.color = colors[0];
        title_start.style.fontSize = fontsFromSize[3];
        title_start.style.margin = marginsFrom[0];
        title_Start.style.color = colors[0];
        title_Start.style.fontSize = fontsFromSize[3];
        title_Start.style.margin = marginsFrom[0];
    }
    boton_build_text.style.fontWeight = fontsFromWeight[1];
    start_page.style.fontWeight = fontsFromWeight[0];
    ours_page.style.fontWeight = fontsFromWeight[0];
    products_page.style.fontWeight = fontsFromWeight[0];
    contacts_page.style.fontWeight = fontsFromWeight[0];
    start_page.style.color = colors[0];
    ours_page.style.color = colors[0];
    products_page.style.color = colors[0];
    contacts_page.style.color = colors[0];
    start_page.style.fontSize = fontsFromSize[0];
    ours_page.style.fontSize = fontsFromSize[0];
    products_page.style.fontSize = fontsFromSize[0];
    contacts_page.style.fontSize = fontsFromSize[0];
    boton_build.style.backgroundColor = colors[1];
    boton_build_text.style.color = colors[0];
    boton_build_text.style.fontSize = fontsFromSize[1];
    subtitle_start.style.color = colors[2];
    subtitle_start.style.fontSize = fontsFromSize[2];
    view_more_boton_text.style.color = colors[0];
    view_more_boton_text.style.fontSize = fontsFromSize[1];
    improve();
}
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
        boton_build_text.style.fontWeight = "lighter";
        boton_build.style.boxShadow = "0px 0px 34px 21px rgba(0,0,0,1)";
    });
    boton_build.addEventListener('mouseout', () =>{
        boton_build.style.backgroundColor = "rgba(167, 244, 25, 0.898)";
        boton_build_text.style.fontWeight = "bold";
        boton_build.style.boxShadow = "none";
    });
    view_more_boton.addEventListener('mouseover', () =>{
        view_more_boton.style.backgroundColor = "rgb(255, 106, 0)";
        view_more_boton.style.cursor = "pointer";
        view_more_boton.style.boxShadow = "0px 0px 30px 22px rgba(43,43,43,0.67)";
    });
    view_more_boton.addEventListener('mouseout', () =>{
        view_more_boton.style.backgroundColor = "orange";
        view_more_boton.style.boxShadow = "none";
    });
    view_more_boton.addEventListener('click', function(){
        let productsGoTo = window.open("../pages/productos.html", '_blank');
        productsGoTo.focus();
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
    view_more_botoncontainer.addEventListener('click', function(){
        let productsGoTo = window.open("../pages/nosotros.html", '_blank');
        productsGoTo.focus();
    });
    viewer_boton_products.addEventListener('mouseover', () =>{
        viewer_boton_products.style.backgroundColor = "rgb(255, 106, 0)";
        viewer_boton_products.style.cursor = "pointer";
    });
    viewer_boton_products.addEventListener('mouseout', () =>{
        viewer_boton_products.style.backgroundColor = "orange";
    });
    viewer_boton_products.addEventListener('click', function(){
        let productsGoTo = window.open("../pages/productos.html", '_blank');
        productsGoTo.focus();
    });
    view_more_bottonn_gallery.addEventListener('mouseover', () =>{
        view_more_bottonn_gallery.style.backgroundColor = "rgb(255, 106, 0)";
        view_more_bottonn_gallery.style.cursor = "pointer";
    });
    view_more_bottonn_gallery.addEventListener('mouseout', () =>{
        view_more_bottonn_gallery.style.backgroundColor = "orange";
    });
    view_more_bottonn_gallery.addEventListener('click', () =>{
        var gallery = window.open("../pages/galeria.html", '_blank');
        gallery.focus();
    });
    boton_about_toform.addEventListener('mouseover', () =>{
        boton_about_toform.style.backgroundColor = "rgb(255, 106, 0)";
        boton_about_toform.style.cursor = "pointer";
    });
    boton_about_toform.addEventListener('mouseout', () =>{
        boton_about_toform.style.backgroundColor = "orange";
    });
}
window.onload = principalHadder();