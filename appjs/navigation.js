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
        });
        products.addEventListener('click', function(){
            location.href = "./pages/productos.html";
        });
        contacts.addEventListener('click', function(){
            location.href = "./pages/contacto.html";
        });
    }
    valery();
}