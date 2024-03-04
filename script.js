const out = document.getElementById('out');
const calculate = document.getElementById('calculate');


calculate.addEventListener('click', e => {
    if (e.target.textContent === 'AC') {
        clearAll();
    } else if (e.target.textContent === 'X') {
        out.textContent += '*';
    } else if (e.target.textContent === '%') {
        let division = out.textContent + '/100';
        out.textContent = eval(division);
    } else if (e.target.textContent === '+/-') {
        out.textContent = '-' + out.textContent;
    } else if (e.target.classList.contains('number')) {
        if (out.textContent === '0' && e.target.textContent !== '.') {
            out.textContent = e.target.textContent;
        } else out.textContent += e.target.textContent;
    } else if (e.target.textContent === '=') {
        out.textContent = eval(out.textContent);
    }
});

function clearAll() {
    out.textContent = '0';
}
