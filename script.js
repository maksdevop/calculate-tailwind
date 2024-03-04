// Каррированные функции для арифметических операций
const add = x => y => x + y;
const subtract = x => y => x - y;
const multiply = x => y => x * y;
const divide = x => y => (y !== 0 ? x / y : 'Ошибка!');

// Обработчики событий для кнопок
const out = document.getElementById('out');
const buttons = document.querySelectorAll('.number');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const button = e.target;
        const buttonText = button.textContent;
        if (buttonText === 'AC') {
            clearAll();
        } else if (buttonText === '+/-') {
            toggleSign();
        } else if (buttonText === '=') {
            calculateResult();
        } else if (button.classList.contains('number')) {
            appendNumber(buttonText);
            console.log(buttonText);
        }
    });
});

function clearAll() {
    out.textContent = '0';
}

function toggleSign() {
    out.textContent = -parseFloat(out.textContent);
}

function appendNumber(number) {
    if (out.textContent === '0' && number !== '.') {
        out.textContent = number;
    } else {
        out.textContent += number;
    }
}

function calculateResult() {
    const expression = out.textContent;
    const parts = expression.split(/([0-9]+)([+-/*x])([0-9]+)/);
    const first = parseFloat(parts[1]);
    const operator = parts[2];
    const second = parseFloat(parts[3]);
    console.log(first , operator , second)
    let result;
    switch (operator) {
        case '+':
            result = add(first)(second);
            break;
        case '-':
            result = subtract(first)(second);
            break;
        case 'x':
            result = multiply(first)(second);
            break;
        case '/':
            result = divide(first)(second);
            break;
        default:
            result = 'Ошибка';
    }

    out.textContent = result;
}
