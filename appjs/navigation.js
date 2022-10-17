window.onload = function(){
    navigate();
}
const navigate = () =>{
    const start = document.getElementById('start_page');
    const ours = document.getElementById('ours_page');
    const products = document.getElementById('products_page');
    const contacts = document.getElementById('contacts_page');
    function valery(){
        start.addEventListener('click', function(){
            location.href = "./index.html";
        });
        ours.addEventListener('click', function(){
            location.href = "./pages/nosotros.html";
            nosotros();
        });
        products.addEventListener('click', function(){
            location.href = "./pages/productos.html";
            productos();
        });
        contacts.addEventListener('click', function(){
            location.href = "./pages/contacto.html";
            contacto();
        });
    }
    valery();
}
const nosotros = () =>{
    return message = "Nosotros";
}
const productos = () =>{
    return message = "Nosotros";
}
const contacto = () =>{
    return message = "Nosotros";
}
export{nosotros, productos, contacto}