window.addEventListener('scroll', function(){
    const toUpp = document.getElementById('toUpp')
    const goingWhatsApp = document.getElementById('goingWhatsApp')
    const header = document.getElementById('header')
    const headerHeigth = ((header.clientHeight)*0.8)
    toUpp.classList.toggle("active", window.scrollY > headerHeigth)
    goingWhatsApp.classList.toggle("active", window.scrollY > headerHeigth)
})