const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

menu.addEventListener('click', () => {
    nav.style.height = "100%";
    menu.style.display = "none";
    close.style.display = "initial";
});

close.addEventListener('click', () => {
    nav.style.height = "10%";
    menu.style.display = "initial";
    close.style.display = "none";
})