/*Creating the header*/
const header = () =>{
    let container = document.createElement("div");
    /*This background */
    let backGroundImage = document.createElement("div");
    let imageBackground = document.createElement("img");
    /*This Container */
    let startContainer = document.createElement("div");
    /*Typing and remodel Top-Header*/
    let topHeader = document.createElement("div");
    let contact = document.createElement("div");
    let phonePic = document.createElement("img");
    let textRowlContact = document.createElement("div");
    let textOne = document.createElement("h6");
    let textTwo = document.createElement("h5");
    let logo = document.createElement("div");
    let logoPic = document.createElement("img");
    let hamburgerTock = document.createElement("div");
    let TockOne = document.createElement("div");
    let TockTwo = document.createElement("div");
    let TockThree = document.createElement("div");
    /*This divider*/
    let divider = document.createElement("div");
    /*This navigator*/
    let navContainer = document.createElement("div");
    let sotialContainer = document.createElement("div");
    let facebk = document.createElement("img");
    let instagm = document.createElement("img");
    let youtb = document.createElement("img");
    let serch = document.createElement("img");
    let navigator = document.createElement("div");
    let nav = document.createElement("nav");
    let toolOne = document.createElement("h5");
    let toolTwo = document.createElement("h5");
    let toolThree = document.createElement("h5");
    let toolFourht = document.createElement("h5");
    let builBoton = document.createElement("div");
    let boton = document.createElement("div");
    let botonText = document.createElement("a");
    const titleHead = document.getElementById('title');
    let titleContainer = document.createElement("div");
    const creatingBackgroundHeader = () =>{
        backGroundImage.classList.add("top_image_container");
        imageBackground.src = "../headerPics/headerbackground.png";
        backGroundImage.appendChild(imageBackground);
    }
    const creatingTopHeder = () =>{
        const fromTopHeader = ["Línea directa", "+01 (234) 5678 90"];
        textOne.textContent = fromTopHeader[0];
        textTwo.textContent = fromTopHeader[1];
        logoPic.src = "../headerPics/logo.png";
        phonePic.src = "../headerPics/callboton.png";
        logo.appendChild(logoPic);
        textRowlContact.appendChild(textOne); 
        textRowlContact.appendChild(textTwo);
        contact.appendChild(phonePic);
        contact.appendChild(textRowlContact);
        hamburgerTock.appendChild(TockOne);
        hamburgerTock.appendChild(TockTwo);
        hamburgerTock.appendChild(TockThree);
        topHeader.appendChild(contact);
        topHeader.appendChild(logo);
        topHeader.appendChild(hamburgerTock);
    }
    const addingTopHeaderClass = () =>{
        topHeader.classList.add("headerTopContainer");
        contact.classList.add("callPhoneContact");
        textRowlContact.classList.add("textRowlContact");
        logo.classList.add("logoHeader");
        logoPic.setAttribute("id", "logo-start");
        hamburgerTock.classList.add("hamburger_tock");
        hamburgerTock.setAttribute("id", "hamburger-tock");
        TockOne.classList.add("bar_tock1");
        TockOne.setAttribute("id", "bar-tock1");
        TockTwo.classList.add("bar_tock2");
        TockTwo.setAttribute("id", "bar-tock2");
        TockThree.classList.add("bar_tock3");
        TockThree.setAttribute("id", "bar-tock3");
        divider.classList.add("divider_one_container");
    }
    const creatingNavigator = () =>{
        const pages = ["Inicio", "Nosotros", "Productos", "Contacto", "Haz tu pedido"];
        facebk.src = "../headerPics/facebook.png";
        instagm.src = "../headerPics/instagram.png"
        youtb.src = "../headerPics/youtube.png";
        serch.src = "../headerPics/search.png";
        sotialContainer.appendChild(facebk);
        sotialContainer.appendChild(instagm);
        sotialContainer.appendChild(youtb);
        sotialContainer.appendChild(serch);
        toolOne.textContent = pages[0];
        toolTwo.textContent = pages[1];
        toolThree.textContent = pages[2];
        toolFourht.textContent = pages[3];
        nav.appendChild(toolOne);
        nav.appendChild(toolTwo);
        nav.appendChild(toolThree);
        nav.appendChild(toolFourht);
        navigator.appendChild(nav);
        botonText.textContent = pages[4];
        boton.appendChild(botonText);
        builBoton.appendChild(boton);
        navContainer.appendChild(sotialContainer);
        navContainer.appendChild(navigator);
        navContainer.appendChild(builBoton);
        botonText.style.color = "rgb(255, 255, 255)";
    }
    const addingNavigatorClass = () =>{
        botonText.setAttribute("id", "boton-build-text");
        boton.classList.add("boton_build");
        boton.setAttribute("id", "boton-build");
        builBoton.classList.add("build_boton");
        nav.classList.add("cloptt");
        nav.setAttribute("id", "nav-Active");
        navigator.classList.add("navigator");
        navigator.setAttribute("id", "navigator-foth");
        toolOne.classList.add("clopt1");
        toolOne.setAttribute("id", "start_page");
        toolTwo.classList.add("clopt2");
        toolTwo.setAttribute("id", "ours_page");
        toolThree.classList.add("clopt3");
        toolThree.setAttribute("id", "products_page");
        toolFourht.classList.add("clopt4");
        toolFourht.setAttribute("id", "contacts_page");
        sotialContainer.classList.add("sotial_container");
        facebk.setAttribute("id", "fb");
        facebk.classList.add("fb");
        instagm.setAttribute("id", "ig");
        instagm.classList.add("ig");
        youtb.setAttribute("id", "you");
        youtb.classList.add("you");
        facebk.setAttribute("id", "fb");
        facebk.classList.add("fb");
        serch.setAttribute("id", "sea");
        serch.classList.add("sea");
        navContainer.classList.add("nav_container");
    }
    const addingToContainer = () =>{
        startContainer.classList.add("start_Container");
        creatingTopHeder();
        addingTopHeaderClass();
        creatingNavigator();
        addingNavigatorClass();
        titleContent();
        startContainer.appendChild(topHeader);
        startContainer.appendChild(divider);
        startContainer.appendChild(navContainer);
        startContainer.appendChild(titleContainer);
    }
    const addingToHeader = () =>{
        const header =document.getElementById('header');
        addingToContainer();
        creatingBackgroundHeader();
        container.classList.add("fromContent");
        container.appendChild(backGroundImage);
        container.appendChild(startContainer);
        header.appendChild(container);
    }
    const fromHovers = () =>{
        boton.addEventListener('mouseover', () =>{
            boton.style.backgroundColor = "rgb(79, 184, 13)";
            botonText.style.fontWeight = "lighter";
            boton.style.boxShadow = "0px 0px 34px 21px rgba(0,0,0,1)";
        });
        boton.addEventListener('mouseout', () =>{
            boton.style.backgroundColor = "rgba(167, 244, 25, 0.898)";
            botonText.style.fontWeight = "bold";
            boton.style.boxShadow = "none";
        });
        toolOne.addEventListener('mouseover', () =>{
            toolOne.style.cursor = "pointer";
            toolOne.style.color = "rgb(255, 144, 2)";
        });
        toolOne.addEventListener('mouseout', () =>{
            toolOne.style.color = "rgb(255, 255, 255)";
        });
        toolTwo.addEventListener('mouseover', () =>{
            toolTwo.style.cursor = "pointer";
            toolTwo.style.color = "rgb(255, 144, 2)";
        });
        toolTwo.addEventListener('mouseout', () =>{
            toolTwo.style.color = "rgb(255, 255, 255)";
        });
        toolThree.addEventListener('mouseover', () =>{
            toolThree.style.cursor = "pointer";
            toolThree.style.color = "rgb(255, 144, 2)";
        });
        toolThree.addEventListener('mouseout', () =>{
            toolThree.style.color = "rgb(255, 255, 255)";
        });
        toolFourht.addEventListener('mouseover', () =>{
            toolFourht.style.cursor = "pointer";
            toolFourht.style.color = "rgb(255, 144, 2)";
        });
        toolFourht.addEventListener('mouseout', () =>{
            toolFourht.style.color = "rgb(255, 255, 255)";
        });
        logo.addEventListener('mouseover', function(){
            logo.style.cursor = "pointer";
        });
        logoPic.addEventListener('mouseover', function(){
            logoPic.style.cursor = "pointer";
        });
        boton.style.backgroundColor = "rgba(167, 244, 25, 0.898)";
        botonText.style.fontSize = "2.549vh";
        botonText.style.fontWeight = "bold";
        const respText = window.innerWidth;
        const resPText = respText - 4;
        if (resPText <= 480) {
            botonText.style.fontSize = "0rem";
        }
    }
    const toNavigateHere = () =>{
        toolOne.addEventListener('click', function(){
            location.href = "../index.html";
        });
        toolTwo.addEventListener('click', function(){
            location.href = "../pages/nosotros.html";
        });
        toolThree.addEventListener('click', function(){
            location.href = "../pages/productos.html";
        });
        toolFourht.addEventListener('click', function(){
            location.href = "../pages/contacto.html";
        });
        logo.addEventListener('click', function(){
            location.href = "../index.html";
        });
    }
    const titleContent = () =>{
        titleContainer.classList.add("titlePage");
        titleContainer.appendChild(titleHead);
    } 
    toNavigateHere();
    fromHovers();
    addingToHeader();
    const toWhats = document.getElementById('boton-build')
    toWhats.addEventListener('click', function(){
        const onFocus = window.open("https://wa.me/5215564770378?text=Hola%20Que%20tal.%20%20He%20visto%20su%20página%20Web%20de%20Healthic%20y%20me%20interesa%20contratar%20sus%20servicios%20de%20Esterilización%20y%20Desinfección.%20¿Podrían%20brindarme%20más%20información%20?%20Por%20favor%20y%20Gracias", "_blank");
        onFocus.focus();        
    })
}
export{header};