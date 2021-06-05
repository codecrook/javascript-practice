{
    const btns = document.querySelector('#btns');
    const res = document.querySelector('#res');

    // function evaluate(){}


    btns.addEventListener('click', e => {
        const btnClicked = e.target.id;

        if (btnClicked === 'btnClr') {
            res.innerHTML = '';
        } else if (btnClicked === 'btnEql') {
            // res.innerHTML = evaluate(textToWrite);
        } else {
            const buttonText = e.target.textContent;
            res.innerHTML += buttonText;
        }
    });
}