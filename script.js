let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let toggle = false;
let slide = document.getElementById('slide-wrap');
let slideCaption = document.querySelectorAll('.slide');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let translateX = 0;
let idx = 0;


window.addEventListener('load', () => {
    slide.style.filter = 'opacity(1)';
});

burger.addEventListener('click', () => {
    toggle = !toggle;
    if (toggle) {
        menu.classList.add('active');
        burger.classList.add('active');
    } else {
        menu.classList.remove('active');
        burger.classList.remove('active');
    }
});

prev.addEventListener('click',() => {
    next.classList.remove('disabled');
    if (translateX === 0) return;
    translateX += 350;
    idx--;
    (translateX === 0) ? prev.classList.add('disabled') : {};
    changeTranslateX(translateX, idx)
});

next.addEventListener('click',() => {
    prev.classList.remove('disabled');
    if (translateX === -350) return;
    translateX -= 350;
    idx++;
    (translateX === -350) ? next.classList.add('disabled') : {};
    changeTranslateX(translateX, idx)
});

function changeTranslateX(translateX, idx){
    slideCaption.forEach((elem, item) => {
        elem.style.transform = `translateX(${translateX}px)`;
        (item !== idx) ? elem.classList.remove('active') : elem.classList.add('active');
    });
}


