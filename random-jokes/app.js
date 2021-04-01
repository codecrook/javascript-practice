{
    const [setupDiv, punchlineDiv, punchlineBtn, newJokeBtn, URL] = [
        document.querySelector('#setup'),
        document.querySelector('#punchline'),
        document.querySelector('#punchlineBtn'),
        document.querySelector('#newJokeBtn'),
        'https://official-joke-api.appspot.com/jokes/programming/random'
    ];
    let punchline = '';

    const getJoke = async (url) => {
        const jokePromise = await fetch(url);
        const joke = await jokePromise.json();

        setupDiv.innerHTML = joke[0].setup;
        punchline = joke[0].punchline;

        punchlineBtn.classList.toggle('hidden');
        newJokeBtn.classList.toggle('hidden');
    };

    const getPunchline = () => {
        punchlineDiv.innerHTML = punchline;
        punchlineDiv.classList.add('bubble');
        punchlineBtn.classList.toggle('hidden');
        newJokeBtn.classList.toggle('hidden');
    };

    punchlineBtn.addEventListener('click', getPunchline);
    getJoke(URL);
}