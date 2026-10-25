//находим кнопку "+"
const plus = document.querySelector('#button__plus');

//находим кнопку "-"
const minus = document.querySelector('#button__minus');

//находим кнопку обнулить
const nulll = document.querySelector('#button__null');

//находим кнопку счетчик, который будет изменяться
const counter = document.querySelector('#counter');

// создание переменной, которая будет хранить
let i = 0;

//добавление слушателя событий
button__plus.addEventListener('click', () => {
    //когда мы будем нажимать, js будет изменять переменную i
    i = i + 1;

    //теперь вставляем нашу переменную в тег h2 с id="counter"
    counter.textContent = i;

})

//добавление слушателя событий
button__minus.addEventListener('click', () => {
    i = i - 1;
    counter.textContent = i;

})

//добавление слушателя событий
button__null.addEventListener('click', () => {
    i = 0;
    counter.textContent = i;
})