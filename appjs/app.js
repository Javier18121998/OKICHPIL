const steps = () =>{
    const name = document.getElementById('name-input');
    const mail = document.getElementById('mail-input');
    const soth = document.getElementById('soth-input');
    const mesaje = document.getElementById('mesaje-input');
    const placeHoldersFill = () =>{
        const placeHolders = ["Nombre", "Correo", "Asunto", "Mensaje"];
        name.placeholder = placeHolders[0];
        mail.placeholder = placeHolders[1];
        soth.placeholder = placeHolders[2];
        mesaje.placeholder = placeHolders[3];
    }
    placeHoldersFill();
}
window.onload = steps();