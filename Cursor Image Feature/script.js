const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.childNodes[3].style.opacity = "1";
    });

    element.addEventListener('mouseover', (event) => {
        element.childNodes[3].style.left = `${event.x}px`;
    });

    element.addEventListener('mouseleave', () => {
        element.childNodes[3].style.opacity = "0";
    })
})