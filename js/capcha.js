let letters = document.querySelectorAll('.letter')

let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let key = ''
let textCapch = document.querySelector('.input_capch')
let button = document.querySelector('.send_capch')
let singIn = document.querySelector('.singIn')
var name1 = document.querySelector('#name')
let email = document.querySelector('#email')
let pass1 = document.querySelector('#pass1')
let pass2 = document.querySelector('#pass2')

function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}


const generateTextCapcha = () => {
    key = ''
    for (let i = 0; i < letters.length; i++) {
        letters[i].textContent = possible[getRandomArbitrary(0, possible.length - 1)]
        letters[i].style.left = `${getRandomArbitrary(10 + (i) * 50, ((i + 1) * 50 - letters[i].offsetWidth / 3))}px`
        letters[i].style.top = `${getRandomArbitrary(0, 80 - letters[i].offsetHeight)}px`
        letters[i].style.transform = `rotate(${getRandomArbitrary(-65, 65)}deg)`
        key += letters[i].textContent
    }
}


const isEmpty = (str) => {
    if (str.trim().length === 0) {
        return true
    }
    return false
}

generateTextCapcha()

button.addEventListener('click', () => {
    console.log(isEmpty(textCapch.value));
    if (isEmpty(textCapch.value)) return;
    if (textCapch.value.trim() === key && typeof key === 'string') {
        button.setAttribute("disabled", "disabled")
        singIn.removeAttribute('disabled')
    } else if (typeof key === 'string') {
        generateTextCapcha()
        return;
    }
})


singIn.addEventListener('click', (e) => {
    if (isEmpty(name1.value)){
        alert("Вы не ввели имя!")
        e.preventDefault();
    }
    else if (isEmpty(email.value)){
        alert("Вы не ввели email!")
        e.preventDefault();
    }
    else if (isEmpty(pass1.value)){
        alert("Вы не ввели пароль!")
        e.preventDefault();
    }
    else if (isEmpty(pass2.value)){
        alert("Повторите пароль!")
        e.preventDefault();
    }
    else if (pass1.value===pass2.value){
        alert("Вы зарегистрировались!")
        e.preventDefault();
    }
    else
    alert("Пароли не совпадают!")
})
