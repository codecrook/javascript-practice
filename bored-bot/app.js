(function (d) {
    const URL = 'https://apis.scrimba.com/bored/api/activity';
    const activityDisplay = d.querySelector('#activity-display');
    const getActivityBtn = d.querySelector('#get-activity');

    getActivityBtn.addEventListener('click', () => {
        fetch(URL).then(res => res.json()).then(data => {
            const { activity } = data;
            activityDisplay.textContent = activity;
        })
    });
})(document);