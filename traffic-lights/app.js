const lights = document.querySelectorAll('.circles');
let active = 0;

const switchLight = (currentLight) => {
    currentLight.classList.add(currentLight.getAttribute('color'));
};

const turnOffLight = (currentLight) => {
    currentLight.className = 'circle';
};

const changeLight = () => new Promise((res, rej) => { });

(async () => {
    try {
        await changeLight();
        await changeLight();
        await changeLight();
    } catch (err) {
        console.log(err);
    }
});