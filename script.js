'use strict mode'
const screen = document.querySelector('.screen');
const button = document.querySelectorAll('.item');
const multiply = button[13].textContent;
const divide = button[12].textContent


for (let i = 0; i < 14; i++) {
    button[i].addEventListener('click', function () {
        let value = button[i].textContent;
        screen.value += value;
       
    });
};

button[14].addEventListener('click', function () {
    screen.value = eval(screen.value.replaceAll(multiply,'*').replaceAll(divide,'/'));

})
button[15].addEventListener('click', function () {
    screen.value = ' ';
})
