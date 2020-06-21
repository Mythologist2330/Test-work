let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let toggle = false; /* Переключатель для бургера */
let slideCaption = document.querySelectorAll('.slide'); /* Блоки описания к слайдам */
let slideImg = document.querySelectorAll('img.slide-img'); /* Сами слайды */
let prev = document.getElementById('prev'); /* Предыдущий слайд */
let next = document.getElementById('next'); /* Следующий слайд */

let h1 = document.querySelector('.caption h1'); /* Заголовок страницы (меняется вместе со слайдом) */
let translateX = 0;
let idx = 0;
let lastScrollTop = 0;
let header = document.querySelector('.header-wrap'); /* Шапка сайта */
let logo = document.getElementById('svg'); /* Лого сайта */
let mail = document.getElementById('mail_svg'); /* Иконка почты */
let phone = document.getElementById('phone_svg'); /* Иконка обратной связи */
let width = document.body.clientWidth; /* Ширина экрана пользователя */

/* Скролл-эффект в шапке */
window.addEventListener('scroll',() => {
    if (width <= 1020) return;
    let st = window.pageYOffset;
    if (st > lastScrollTop) {
        header.classList.add('scroll');
    } else if ( st === 0 ){
        header.classList.remove('scroll');
        header.classList.remove('fill') ;
        addClassWhite()
    } else {
        header.classList.remove('scroll');
        header.classList.add('fill') ;
        addClassWhite()
    }
    lastScrollTop = st;
});

/* При загрузке страницы появляется первый слайд и меняются стили в шапке */
window.addEventListener('load', () => {
    slideImg[0].classList.add('visible');
    if (width >= 1020) {
        addClassWhite()
    }
});

function addClassWhite() {
    logo.classList.add('white');
    mail.classList.add('white');
    phone.classList.add('white');
}

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
