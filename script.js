// (function(){
window.addEventListener('load', () => {
    let slideImg = document.querySelectorAll('img.slide-img');
    slideImg[0].classList.add('visible');
    if (document.body.clientWidth >= 1020) {
        addClassWhite()
    }
});

/* Скролл-эффект в шапке */
let lastScrollTop = 0;
window.addEventListener('scroll',() => {
    let header = document.querySelector('.header-wrap'); /* Шапка сайта */
    if (document.body.clientWidth <= 1020) return;
    let st = window.pageYOffset;
    if (st > lastScrollTop) {
        header.classList.add('scroll');
    } else if ( st === 0 ){
        header.classList.remove('scroll');
        header.classList.remove('fill');
        addClassWhite()
    } else {
        header.classList.remove('scroll');
        header.classList.add('fill') ;
        addClassWhite()
    }
    lastScrollTop = st;
});
function addClassWhite() {
    let logo = document.getElementById('svg'); /* Лого сайта */
    let mail = document.getElementById('mail_svg'); /* Иконка почты */
    let phone = document.getElementById('phone_svg'); /* Иконка обратной связи */
    logo.classList.add('white');
    mail.classList.add('white');
    phone.classList.add('white');
}

const slideShow = {
    idx: 0,
    slideWidth: -390, /* ширина слайда (350px - ширина блока + 40px отступ) */
    amount: 4, /* количество слайдов */
    prev: document.getElementById('prev'),
    next: document.getElementById('next'),
    get translateX (){
        return this.slideWidth * this.idx
    },
    prevSlide(e) {
        this.next.classList.remove('disabled');
        if (this.translateX === 0) return;
        this.idx--;
        (this.translateX === 0) ? e.target.classList.add('disabled') : {};
        this.changeSlide(this.translateX, this.idx)
    },
    nextSlide(e) {
        this.prev.classList.remove('disabled');
        if (this.idx === (this.amount - 1)) return;
        this.idx++;
        (this.idx === (this.amount -1)) ? e.target.classList.add('disabled') : {};
        this.changeSlide(this.translateX, this.idx)
    },
    changeSlide(translateX, idx) {
        let slideCaption = document.querySelectorAll('.slide'); /* Блоки описания к слайдам */
        let slideImg = document.querySelectorAll('img.slide-img'); /* Сами слайды */
        let h1 = document.querySelector('.caption h1'); /* Заголовок страницы (меняется вместе со слайдом) */

        h1.innerHTML = `Видео конференции (${idx + 1})`;
        slideImg.forEach(img => {
            img.classList.remove('visible');
        });
        slideCaption.forEach((elem, item) => {
            elem.style.transform = `translateX(${translateX}px)`;
            slideImg[idx].classList.add('visible');
            (item !== idx) ? elem.classList.remove('active') : elem.classList.add('active');
        });
    }
};

function toggleBurger(){
    let menu = document.getElementById('menu');
    let burger = document.getElementById('burger');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}

function toggleTooltip() {
    let tooltip = document.querySelector('.tooltip-wrap');
    tooltip.classList.toggle('visible');
}

/*--------------------Modal  window   (started version)------------------*/
const modalWindow = {
    submitComplete: document.getElementById('submitComplete'),
    buttonSubmit: document.getElementById('buttonSubmit')
};

modalWindow.buttonSubmit.onclick = () => {
    modalWindow.submitComplete.style.display = 'flex';
};

let buttonOk = document.getElementById('buttonOk');
buttonOk.onclick = () => {
    let overlay = document.getElementById('overlay');
    modalWindow.submitComplete.style.display = 'none';
    overlay.classList.toggle('active');
};

function togglePopup() {
    let overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');
}

// })();
