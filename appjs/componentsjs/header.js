/*Creating the header*/
const topHeader = document.createElement('div');
const callContact = document.createElement('div');
const textRowlContact = document.createElement('div');
const logoTop = document.createElement('div');
const hamburgerTock = document.createElement('div');
const tockOne = document.createElement('div');
const tockTwo = document.createElement('div');
const tockThree = document.createElement('div');
const dividerTop = document.createElement('div');
const logo = document.createElement('img');
const phoneimage = document.createElement('img');
const toolOne = document.createElement('h6');
const toolTwo = document.createElement('h5');
const helfOne = document.createElement('h5');
const helfTwo = document.createElement('h5');
const helfThree = document.createElement('h5');
const helfFour = document.createElement('h5');
const header = () =>{
    if (window.onload) {
       creatingHeader(); 
    }
    header();
}
const creatingHeader = () =>{
    toolsHeader();
}
const toolsHeader =() =>{
    const resources = ["Línea directa", "+01 (234) 5678 90", "Inicio", "Nosotros", "Productos", "Contacto", "Haz tu pedido"]; 
    topHeader.classList.add('topHeader');
    callContact.classList.add('callContact');
    logoTop.classList.add('logoTop');
    hamburgerTock.classList.add('hamburger_tock');
    tockOne.classList.add('TockOne');
    tockTwo.classList.add('TockTwo');
    tockThree.classList.add('TockThree');
    textRowlContact.classList.add('textRowlContact');
    logo.src = "headerPics/logo.png";
    phoneimage.src = "headerPics/callboton.png";
    toolOne.textContent += resources[0];
    toolTwo.textContent += resources[1];
    helfOne.textContent += resources[2]; 
    helfTwo.textContent += resources[3];
    helfThree.textContent += resources[4];     
    helfFour.textContent += resources[5];
    buildBoton.textContent += resources[6];
    dividerTop.classList.add('dividerHead'); 
    const contNodeTopSelf = () =>{
        textRowlContact.appendChild(toolOne);
        textRowlContact.appendChild(toolTwo);
        callContact.appendChild(phoneimage);
        callContact.appendChild(textRowlContact);
        logoTop.appendChild(logo);
        hamburgerTock.appendChild(tockOne);
        hamburgerTock.appendChild(tockTwo);
        hamburgerTock.appendChild(tockThree);
        topHeader.appendChild(callContact);
        topHeader.appendChild(logoTop);
        topHeader.appendChild(hamburgerTock);
    }
    const contNodeSubTopSelf = () =>{
        const navContainer = document.createElement('div');
        const sotialContainer = document.createElement('div');
        const facebk = document.createElement('img');
        const instag = document.createElement('img');
        const youtb = document.createElement('img');
        const search = document.createElement('img');
        const navigator = document.createElement('div');
        const navTo = document.createElement('nav');
        const buildBotonTo = document.createElement('div');
        const botonTo = document.createElement('div');
        const buildText = document.createElement('a');
        navTo.appendChild(helfOne);
        navTo.appendChild(helfTwo);
        navTo.appendChild(helfThree);
        navTo.appendChild(helfFour);
        navigator.appendChild(navTo);
        navTo.classList.add('cloptt');
        navigator.classList.add('navigator');
        botonTo.appendChild(buildText);
        buildBotonTo.appendChild(botonTo);
        sotialContainer.appendChild(facebk);
        sotialContainer.appendChild(instag);
        sotialContainer.appendChild(youtb);
        sotialContainer.appendChild(search);
        facebk.src = "headerPics/facebook.png";
        instag.src = "headerPics/instagram.png";
        youtb.src = "headerPics/youtube.png";
        search.src = "headerPics/search.png";
        navTo.appendChild(helfOne);
        navTo.appendChild(helfTwo);
        navTo.appendChild(helfThree);
        navTo.appendChild(helfFour);
        navContainer.appendChild(sotialContainer);
        navContainer.appendChild(navigator);
        navContainer.appendChild(buildBotonTo);
    }
    function createForContext(){
        const contextTo = document.createElement('div');
        const titleTo = document.createElement('p');
        titleTo.textContent += "Nosotros";
        contextTo.appendChild(titleTo);
    }     
    const buildOnTo = () =>{
        let headerFrom = document.getElementById('header');
        headerFrom.appendChild(topHeader);
        headerFrom.appendChild(dividerTop);
        headerFrom.appendChild(navContainer);
        document.body.appendChild(headerFrom);
        document.body.appendChild(topHeader);
    }     
    contNodeTopSelf();
    contNodeSubTopSelf();
    createForContext();
    buildOnTo();
}