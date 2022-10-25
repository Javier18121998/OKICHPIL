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
}