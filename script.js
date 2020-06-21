let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let toggle = false;
let slideCaption = document.querySelectorAll('.slide');
let slideImg = document.querySelectorAll('img.slide-img');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let h1 = document.querySelector('.caption h1');
let translateX = 0;
let idx = 0;

/* При загрузке страницы появляется первый слайд */
window.addEventListener('load', () => {
    slideImg[0].classList.add('visible');
});

prev.addEventListener('click',() => {
    next.classList.remove('disabled');
    if (translateX === 0) return;
    translateX += 390; /* 350px - ширина блока + 40px отступ */
    idx--;
    (translateX === 0) ? prev.classList.add('disabled') : {};
    changeTranslateX(translateX, idx)
});

next.addEventListener('click',() => {
    prev.classList.remove('disabled');
    if (translateX === -1170) return; /* Всего 4 блока по 390px */
    translateX -= 390;
    idx++;
    (translateX === -1170) ? next.classList.add('disabled') : {};
    changeTranslateX(translateX, idx)
});

function changeTranslateX(translateX, idx){

    /* Меняем заголовок слайда */
    h1.innerHTML = `Видео конференции (${idx + 1})`;
    /* Меняем картинки */
    slideImg.forEach(img => {
        img.classList.remove('visible');
    });
    /* Листаем описание справа */
    slideCaption.forEach((elem, item) => {
        elem.style.transform = `translateX(${translateX}px)`;
        slideImg[idx].classList.add('visible');
        (item !== idx) ? elem.classList.remove('active') : elem.classList.add('active');
    });
}

/* Бургер меню */
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
