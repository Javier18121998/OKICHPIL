window.onload = function(){
    Resp();
}
const Resp = function(){
    navResp();
    subtitleResp();
    titleResp();
    botonViewProducts();
    infoCerts();
    scriptHamburger();
    ptrCont();
}
const navResp = () =>{
    let from_Plouck = window.innerWidth;
    const start = document.getElementById('start_page');
    const ours = document.getElementById('ours_page');
    const products = document.getElementById('products_page');
    const contacts = document.getElementById('contacts_page');
    const boton_text = document.getElementById('boton-build-text');
    const to_resizenav = from_Plouck - 4;
    const size_Fonts = ["0vh"];
    const clop_Resize = () =>{
        if (to_resizenav <= 480) {
            start.style.fontSize = size_Fonts[0];
            ours.style.fontSize = size_Fonts[0];
            products.style.fontSize = size_Fonts[0];
            contacts.style.fontSize = size_Fonts[0];
            boton_text.style.fontSize = size_Fonts[0];
        }
    }
    clop_Resize();
}
const subtitleResp = () =>{
    let from_subtitle = window.innerWidth;
    const subtitleResp = document.getElementById('subtitle-start');
    const to_resizesubt = from_subtitle - 4;
    const forSubtitle = () =>{
        if (to_resizesubt <= 480) {
            subtitleResp.style.fontSize = "3.1vh";   
        }
    }
    forSubtitle(); 
}
const titleResp = () =>{
    let from_title = window.innerWidth;
    const titleOne = document.getElementById('title-start'); 
    const titleTwo = document.getElementById('title_Start');
    const to_resizetitle = from_title -4;
    const forTitle = () =>{
        if (to_resizetitle <= 480) {
            titleOne.style.fontSize = "4.5vh";
            titleTwo.style.fontSize = "4.5vh";        
        }
    }
    forTitle();
}
const botonViewProducts = () =>{
    let from_viewmoretext = window.innerWidth;
    const botonViewMoreText = document.getElementById('view-more-boton-text');
    const viewMoreText = from_viewmoretext - 4;
    const forMoreText = () =>{
        if (viewMoreText <= 480) {
            botonViewMoreText.style.fontSize = "1.51vh";
        }
    }
    forMoreText();
}
const infoCerts = () =>{
    let fromFox = window.innerWidth;
    const foxone = document.getElementById('fox-one');
    const foxtwo = document.getElementById('fox-two');
    const foxthree = document.getElementById('fox-three');
    const foxlast = document.getElementById('fox-last');
    const intoFox = fromFox - 4;
    const modifyFox = () =>{
        if (intoFox <= 480) {
            foxone.style.fontSize = "1.5vh";
            foxtwo.style.fontSize = "1.5vh";
            foxthree.style.fontSize = "1.5vh";
            foxlast.style.fontSize = "1.5vh";
        }
    }
    modifyFox();
}
const ptrCont = () =>{
    let fromFox = window.innerWidth;
    const foxOne = document.getElementById('fox-one');
    const foxTwo = document.getElementById('fox-two');
    const foxThree = document.getElementById('fox-three');
    const foxLast = document.getElementById('fox-last');
    const foxFrom = fromFox - 4;
    const pttrCont = () =>{
        if (foxFrom <= 480) {
            foxOne.style.fontSize = "0.85vh";
            foxTwo.style.fontSize = "0.85vh";
            foxThree.style.fontSize = "0.85vh";
            foxLast.style.fontSize = "0.85vh";
        }
    }
    pttrCont();
}
const scriptHamburger = () =>{
    const macdonalds = document.getElementById('hamburger-tock');
    const tockOne = document.getElementById('bar-tock1');
    const tockTwo = document.getElementById('bar-tock2');
    const tockThree = document.getElementById('bar-tock3');
    const start = document.getElementById('start_page');
    const ours = document.getElementById('ours_page');
    const products = document.getElementById('products_page');
    const contacts = document.getElementById('contacts_page');
    const navigatorfoth = document.getElementById('navigator-foth');
    const navActive = document.getElementById('nav-Active');
    const navigator = document.getElementsByClassName('navigator');
    let control = false;
    const controlSizeFonts = ["5vh", "0vh"];
    macdonalds.addEventListener('click', () =>{
        control = true;
        if (control === true) {
            function toNavPagSotial(){
                modifyHamburger();
            }
            toNavPagSotial();
            control = false;
        }
        addingClasstoNavigator();
        start.style.fontSize = controlSizeFonts[0];
        ours.style.fontSize = controlSizeFonts[0];
        products.style.fontSize = controlSizeFonts[0];
        contacts.style.fontSize = controlSizeFonts[0];
        console.log(control, "hola")
    });
    const modifyHamburger = () =>{
        macdonalds.classList.add("hamburger_tockActive");
        tockOne.classList.add("activetock1");
        tockTwo.classList.add("activetock2");
        tockThree.classList.add("activetock3");
    }
    const removeModifyHamburger = () =>{
        macdonalds.classList.remove("hamburger_tockActive");
        tockOne.classList.remove("activetock1");
        tockTwo.classList.remove("activetock2");
        tockThree.classList.remove("activetock3");
    }
    const addingClasstoNavigator = () =>{
        navigatorfoth.classList.remove("navigator");
        navigatorfoth.classList.add("navigatorActive");
        navActive.classList.add('navActive');
        navActive.classList.remove('cloptt');
        start.classList.add("navText");
        start.classList.remove("clopt1");
        ours.classList.add("navText");
        ours.classList.remove("clopt2");
        products.classList.add("navText");
        products.classList.remove("clopt3");
        contacts.classList.add("navText");
        contacts.classList.remove("clopt4");
    }
    const openMenu = () =>{

    }
}