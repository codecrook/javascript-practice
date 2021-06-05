{
    const btns = document.querySelector('#btns');
    const res = document.querySelector('#res');

    function evaluate(expression) {
        const numbers = expression.match(/\d+/g).map(n => parseInt(n, 2)).slice(0, 2);
        const operator = expression.match(/\+|-|\*|\//)[0];
        const operations = {
            "+": (n1, n2) => n1 + n2,
            "-": (n1, n2) => n1 - n2,
            "*": (n1, n2) => n1 * n2,
            "/": (n1, n2) => n1 / n2,
        };

        return operations[operator](...numbers).toString(2);
    }
    btns.addEventListener('click', e => {
        const btnClicked = e.target.id;

        if (btnClicked === 'btnClr') {
            res.innerHTML = '';
        } else if (btnClicked === 'btnEql') {
            res.innerHTML = evaluate(res.innerHTML);
        } else {
            const buttonText = e.target.textContent;
            res.innerHTML += buttonText;
        }
    });
}