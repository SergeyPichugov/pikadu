

// создаём переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// создаём переменную, в которую положим кнопку меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки, т.е. она никуда не видет и ничего не случается
    event.preventDefault()
    // вешаем класс на меню, когда кликнули по кнопкеменю
    menu.classList.toggle('visible');
    
})