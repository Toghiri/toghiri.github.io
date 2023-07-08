const resposiveMenuButton = document.getElementById('responsiveMenuToggleButton');

const navBarLinks = document.querySelector('.nav-links');

resposiveMenuButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('open');
    resposiveMenuButton.classList.toggle('open');
})

const allNavLinks = document.querySelectorAll('.nav-links li');

allNavLinks.forEach(link => {
    link.addEventListener('click', () =>{
        navBarLinks.classList.remove('open');
        resposiveMenuButton.classList.remove('open');
    })
})

const linkLogo = document.querySelector('.logo a');

linkLogo.addEventListener('click', () => {
    navBarLinks.classList.remove('open');
    resposiveMenuButton.classList.remove('open');
})