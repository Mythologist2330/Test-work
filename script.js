let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let toggle = false;

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
