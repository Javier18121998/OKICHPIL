window.onload = function(){
    resize_Elements();
}
const resize_Elements = () =>{
    const from_Plouck = window.innerWidth;
    const start = document.getElementById('start_page');
    const ours = document.getElementById('ours_page');
    const products = document.getElementById('products_page');
    const contacts = document.getElementById('contacts_page');
    const boton_text = document.getElementById('boton-build-text');
    let to_resize = from_Plouck - 4;
    const size_Fonts = ["0vh"];
    const clop_Resize = () =>{
        if (to_resize <= 480) {
            start.style.fontSize = size_Fonts[0];
            ours.style.fontSize = size_Fonts[0];
            products.style.fontSize = size_Fonts[0];
            contacts.style.fontSize = size_Fonts[0];
            boton_text.style.fontSize = size_Fonts[0];
        }
    }
    clop_Resize();
}