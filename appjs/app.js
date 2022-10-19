const steps = () =>{
    const name = document.getElementById('name-input');
    const mail = document.getElementById('mail-input');
    const soth = document.getElementById('soth-input');
    const mesaje = document.getElementById('mesaje-input');
    const boton = document.getElementById('boton-about-toform');
    const locatioN = document.getElementById('location-Pic');
    const maiL = document.getElementById('mail-Pic');
    const placeHoldersFill = () =>{
        const placeHolders = ["Nombre", "Correo", "Asunto", "Mensaje"];
        name.placeholder = placeHolders[0];
        mail.placeholder = placeHolders[1];
        soth.placeholder = placeHolders[2];
        mesaje.placeholder = placeHolders[3];
    }
    boton.addEventListener('mouseover', () =>{
        boton.style.backgroundColor = "rgb(255, 106, 0)"
        boton.style.cursor = "pointer";
    });
    boton.addEventListener('mouseout', () =>{
        boton.style.backgroundColor = "#ff9002";
    });
    maiL.addEventListener('mouseover', () =>{
        maiL.style.cursor = "pointer";
    });
    maiL.addEventListener('click', () =>{
        var newPageOne = window.open("https://outlook.live.com/", '_blank');
        newPageOne.focus();
    });
    locatioN.addEventListener('mouseover', () =>{
        locatioN.style.cursor = "pointer";
    });
    locatioN.addEventListener('click', () =>{
        var newPageTwo = window.open("https://www.google.com/maps/dir//Mazatepec+73902+Pue./@20.015759,-97.419524,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85daf2c3cbfb8f3b:0x7cae0a71bbcccc75!2m2!1d-97.419524!2d20.015759", '_blank');
        newPageTwo.focus();
    });
    placeHoldersFill();
}
window.onload = steps();