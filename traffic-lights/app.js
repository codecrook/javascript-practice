const lights = document.querySelectorAll('.circle');
let active = 0;

const switchLight = (currentLight) => {
    currentLight.classList.add(currentLight.getAttribute('color'));
};

const turnOffLight = (currentLight) => {
    currentLight.className = 'circle';
};

const changeLight = () => new Promise((res, rej) => {
    let currentLight = lights[active];
    switchLight(currentLight);
    setTimeout(() => {
        turnOffLight(currentLight);
        active += active === 2 ? -2 : 1;
        res(active);
    }, 2000);
});

(async () => {
    try {
        await changeLight();
        await changeLight();
        await changeLight();
    } catch (err) {
        console.log(err);
    }
})();