const card = document.querySelector('.card');
const heart = document.querySelector('i');
const cursor = document.querySelector('.cursor');
const body = document.querySelector('body');

//like feature
card.addEventListener('dblclick', () => {
    heart.style.opacity = "1";
    heart.style.scale = "1.2";

    setTimeout(() => {
        heart.style.opacity = "0";
        heart.style.scale = "0";
    }, 400);
});

card.addEventListener('mouseenter', () => {
    cursor.style.scale = "2";
});

card.addEventListener('mouseleave', () => {
    cursor.style.scale = "1";
});

body.addEventListener('mousemove', (event) => {
    cursor.style.left = (event.x + 5) + "px";
    cursor.style.top = (event.y + 3) + "px";
});

card.addEventListener('mousemove', (event) => {
    cursor.style.left = (event.x + 5) + "px";
    cursor.style.top = (event.y + 3) + "px";
    cursor.style.mixBlendMode = "difference";
});








