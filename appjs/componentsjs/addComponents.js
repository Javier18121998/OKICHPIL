import { footer } from "./footer.js";
import { header } from "./header.js";
window.onload = function(){
    footer();
    header();
    const scrollUp = () =>{
        const toUpp = document.getElementById('toUpp');
        toUpp.addEventListener('click', function(){
            window.scrollTo(0, 0);
        });
    }
    scrollUp();
    
    const gotoWhastApp = () =>{
        const toWhatssApp = document.getElementById('goingWhatsApp')
        toWhatssApp.addEventListener('click', function(){
            const onFocus = window.open("https://wa.me/5215564770378?text=Hola%20Que%20tal.%20%20He%20visto%20su%20página%20Web%20de%20Healthic%20y%20me%20interesa%20contratar%20sus%20servicios%20de%20Esterilización%20y%20Desinfección.%20¿Podrían%20brindarme%20más%20información%20?%20Por%20favor%20y%20Gracias", "_blank");
            onFocus.focus();        
        })
    }
    gotoWhastApp() 
}