const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');              /*Adds active class to navbar in css*/
    })
}

if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');              /*Removes active class to navbar in css*/
    })
}