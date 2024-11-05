// const heading = document.querySelector('h1');
// const button = document.querySelector('button');
// const body = document.querySelector('body');

// button.addEventListener('click', ()=> {
//     heading.innerHTML = "how are you?";
//     heading.style.color = "red";
//     const para = document.createElement('p');
//     para.innerHTML = "I am a paragraph";
//     body.appendChild(para);
//     button.remove();
// })



const form = document.querySelector('form');
const ul = document.querySelector('ul');
const inp = document.querySelector('input');

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const inpVal = event.target.inputTag.value;
    ul.innerHTML = `<li>${inpVal}</li>`;
    inp.value = "";
})