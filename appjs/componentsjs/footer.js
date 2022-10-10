/*Creating the footer*/
const footer = () =>{
    /*Typing and remodel Footer */
    let footerContainer = document.createElement("div");
    /*This background */
    let backGroundImage = document.createElement("div");
    let imageBackground = document.createElement("img");
    /*This container */
    let footerContain = document.createElement("div");
    /*This logo */
    let footerLogo = document.createElement("div");
    let logoTop = document.createElement("img"); 
    /*This side text */
    let footerSideText = document.createElement("div");
    /*This contact */
    let contactFooterContainer = document.createElement("div");
    let contactPic = document.createElement("img");
    let contacth5 = document.createElement("h5");
    let deslizeContactPic = document.createElement("img");
    let p1Contact = document.createElement("p");
    let p2Contact = document.createElement("p");
    let p3Contact = document.createElement("p");
    /*This separator */
    let separatorContact = document.createElement("div");
    let separatorPic = document.createElement("img");
    /*This time */
    let timeFooterContainer = document.createElement("div");
    let timePic = document.createElement("img");
    let timeh5 = document.createElement("h5");
    let deslizeTimePic = document.createElement("img");
    let p1Time = document.createElement("p");
    let p2Time = document.createElement("p");
    /*This service */
    let separatorTwoContact = document.createElement("div");
    let separatorTwoPic = document.createElement("img");
    /*This service */
    let serviceFooterContainer = document.createElement("div");
    let servicePic = document.createElement("img");
    let serviceh5 = document.createElement("h5");
    let deslizeServicePic = document.createElement("img");
    let p1Service = document.createElement("p");
    let p2Service = document.createElement("p");
    /*This mediaSotial */
    let mediaContainer = document.createElement('div');
    let facebookLogo = document.createElement("img");
    let instagramLogo = document.createElement("img");
    let youtubeLogo = document.createElement("img");
    /*This poolFooter */
    let flownFooterContainer = document.createElement("div");
    let flownh5One = document.createElement("h5");
    let flownh4One = document.createElement("h4");
    let flownh5Two = document.createElement("h5");
    let flownh4Two = document.createElement("h4");
    let flownh5Three = document.createElement("h5");
    let flownh4Three = document.createElement("h4");
    let flownh5Fourth = document.createElement("h5");
    const setingFieldsToContain = () =>{
        const titles = ["Visitanos", "Hora de Apertura", "¡Estamos para servirte!"];
        const paragraphs = ["Mazatepec ,Tlatlauquitepec, Puebla", "¿Necesitas ayuda? <br> Llamanos", "+01 (234) 5678 90", "Lunes - Sabado", "8:00 am - 6:00 pm", "Quieres crear tus propias combinaciones de cacao con otros sabores?", "Contáctate con nosotros y haremos tus gustos realidad."];
        const flownFooter = ["Copyright © 2022 Okichpil. Reservados todos los derechos.", "|", "Política de privacidad", "Términos y Condiciones", "Preguntas más frecuentes"];
        logoTop.src = "../footerPics/logo.png";
        imageBackground.src = "../footerPics/background_footer.png";
        contactPic.src = "../footerPics/imgcacaofooter.png";
        deslizeContactPic.src = "../footerPics/imgproducts.png";
        separatorPic.src = "../footerPics/lineFooter.png";
        separatorTwoPic.src = "../footerPics/lineFooter.png";
        timePic.src = "../footerPics/imgclockfooter.png";
        deslizeTimePic.src = "../footerPics/imgproducts.png";
        servicePic.src = "../footerPics/imgpeoplefooter.png";
        deslizeServicePic.src = "../footerPics/imgproducts.png";
        facebookLogo.src = "../footerPics/iconfacebookfooter.png";
        instagramLogo.src = "../footerPics/iconinstagramfooter.png";
        youtubeLogo.src = "../footerPics/iconyoutubefooter.png";
        contacth5.textContent = titles[0];
        p1Contact.textContent = paragraphs[0];
        p2Contact.textContent = paragraphs[1];
        p3Contact.textContent = paragraphs[2];
        timeh5.textContent = titles[1];
        p1Time.textContent = paragraphs[3];
        p2Time.textContent = paragraphs[4];
        serviceh5.textContent = titles[2];
        p1Service.textContent = paragraphs[5];
        p2Service.textContent = paragraphs[6];
        flownh5One.textContent = flownFooter[0];
        flownh4One.textContent = flownFooter[1];
        flownh5Two.textContent = flownFooter[2];
        flownh4Two.textContent = flownFooter[1];
        flownh5Three.textContent = flownFooter[3];
        flownh4Three.textContent = flownFooter[1];
        flownh5Fourth.textContent = flownFooter[4];
    }
    const creatingBackground = () =>{
        backGroundImage.classList.add("background_image_footer");
        backGroundImage.appendChild(imageBackground);
    }
    const logo = () =>{
        footerLogo.classList.add("logo_footer_container");
        footerLogo.appendChild(logoTop);
    }
    const creatingSotialFooter = () =>{
        mediaContainer.classList.add("sotial_footer_container");
        mediaContainer.appendChild(facebookLogo);
        mediaContainer.appendChild(instagramLogo);
        mediaContainer.appendChild(youtubeLogo);
    }
    const creatingFlown = () =>{
        flownFooterContainer.classList.add("flown_footer_container");
        flownFooterContainer.appendChild(flownh5One);
        flownFooterContainer.appendChild(flownh4One);
        flownFooterContainer.appendChild(flownh5Two);
        flownFooterContainer.appendChild(flownh4Two);
        flownFooterContainer.appendChild(flownh5Three);
        flownFooterContainer.appendChild(flownh4Three);
        flownFooterContainer.appendChild(flownh5Fourth);
    }
    const creatingContactFooter = () =>{
        contactFooterContainer.classList.add("contact_footer_container");
        contactPic.classList.add("cocoe_footer");
        deslizeContactPic.classList.add("showerdeslize_footer");
        p1Contact.classList.add("pvisit1");
        p2Contact.classList.add("pvisit2");
        p3Contact.classList.add("pvisit3");
        contactFooterContainer.appendChild(contactPic);
        contactFooterContainer.appendChild(contacth5);
        contactFooterContainer.appendChild(deslizeContactPic);
        contactFooterContainer.appendChild(p1Contact);
        contactFooterContainer.appendChild(p2Contact);
        contactFooterContainer.appendChild(p3Contact);
    }
    const creatingTimeFooter = () =>{
        timeFooterContainer.classList.add("time_footer_container");
        timePic.classList.add("clock_footer");
        deslizeTimePic.classList.add("showerdeslize_footer");
        p1Time.classList.add("ptime1");
        p2Time.classList.add("ptime2");
        timeFooterContainer.appendChild(timePic);
        timeFooterContainer.appendChild(timeh5);
        timeFooterContainer.appendChild(deslizeTimePic);
        timeFooterContainer.appendChild(p1Time);
        timeFooterContainer.appendChild(p2Time);
    }
    const creatingServiceFooter = () =>{
        serviceFooterContainer.classList.add("service_container");
        servicePic.classList.add("people_footer");
        deslizeServicePic.classList.add("showerdeslize_footer");
        p1Service.classList.add("pservice1");
        p2Service.classList.add("pservice2");
        serviceFooterContainer.appendChild(servicePic);
        serviceFooterContainer.appendChild(serviceh5);
        serviceFooterContainer.appendChild(deslizeServicePic);
        serviceFooterContainer.appendChild(p1Service);
        serviceFooterContainer.appendChild(p2Service);
    }
    const creatingSeparatorFooter = () =>{
        separatorContact.classList.add("separator_footer");
        separatorContact.appendChild(separatorPic);
    }
    const creatingSecSeparatorFooter = () =>{
        separatorTwoContact.classList.add("separator_two_footer");
        separatorTwoContact.appendChild(separatorTwoPic);
    }
    const createSideText = () =>{
        footerSideText.classList.add("footer_Container");
        footerSideText.appendChild(contactFooterContainer);
        footerSideText.appendChild(separatorContact);
        footerSideText.appendChild(timeFooterContainer);
        footerSideText.appendChild(separatorTwoContact);
        footerSideText.appendChild(serviceFooterContainer);
    }
    const footerContainTo = () =>{
        footerContain.classList.add("footer_Content");
        footerContain.appendChild(footerLogo);
        footerContain.appendChild(footerSideText);
        footerContain.appendChild(mediaContainer);
        footerContain.appendChild(flownFooterContainer);
    }
    const addToHeader = () =>{
        const header = document.getElementById('footer');
        footerContainer.classList.add("footer_container");
        setingFieldsToContain();
        creatingBackground();
        logo();
        creatingSotialFooter();
        creatingFlown();
        creatingContactFooter();
        creatingTimeFooter();
        creatingServiceFooter();
        creatingSeparatorFooter();
        creatingSecSeparatorFooter();
        createSideText();
        footerContainTo();
        footerContainer.appendChild(backGroundImage);
        footerContainer.appendChild(footerContain);
        header.appendChild(footerContainer);
    }
    addToHeader();
}
export{footer};