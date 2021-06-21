(function (d) {
    const URL = 'https://apis.scrimba.com/bored/api/activity';

    const appTitle = d.querySelector('#app-title');
    const activityDisplay = d.querySelector('#activity-display');
    const getActivityBtn = d.querySelector('#get-activity');

    getActivityBtn.addEventListener('click', () => {
        fetch(URL).then(res => res.json()).then(data => {
            const { activity } = data;

            d.body.classList.add("fun");
            activityDisplay.textContent = activity;
            appTitle.textContent = "🦾 HappyBot🦿";
        })
    });
})(document);