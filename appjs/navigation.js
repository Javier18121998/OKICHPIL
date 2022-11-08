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
    
    const gotoWhastApp = () =>{
        const toWhatssApp = document.getElementById('goingWhatsApp')
        toWhatssApp.addEventListener('click', function(){
            const onFocus = window.open("https://wa.me/5215564770378?text=Hola%20Que%20tal.%20%20He%20visto%20su%20página%20Web%20de%20Healthic%20y%20me%20interesa%20contratar%20sus%20servicios%20de%20Esterilización%20y%20Desinfección.%20¿Podrían%20brindarme%20más%20información%20?%20Por%20favor%20y%20Gracias", "_blank");
            onFocus.focus();        
        })
        const toWhats = document.getElementById('boton-build')
        toWhats.addEventListener('click', function(){
            const onFocus = window.open("https://wa.me/5215564770378?text=Hola%20Que%20tal.%20%20He%20visto%20su%20página%20Web%20de%20Healthic%20y%20me%20interesa%20contratar%20sus%20servicios%20de%20Esterilización%20y%20Desinfección.%20¿Podrían%20brindarme%20más%20información%20?%20Por%20favor%20y%20Gracias", "_blank");
            onFocus.focus();        
        })
    }
    gotoWhastApp()
}