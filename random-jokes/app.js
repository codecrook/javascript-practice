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
        try {
            const jokePromise = await fetch(url);
            if (jokePromise.ok) {
                const joke = await jokePromise.json();

                setupDiv.innerHTML = joke[0].setup;
                punchline = joke[0].punchline;

                punchlineDiv.innerHTML = "";
                punchlineDiv.classList.remove('bubble');

                punchlineBtn.classList.toggle('hidden');
                newJokeBtn.classList.toggle('hidden');
            } else {
                throw new Error(jokePromise.status);
            }
        } catch (e) {
            console.error(e);
            setupDiv.innerHTML = 'Problem getting joke. Please try again!';
            newJokeBtn.classList.remove('hidden');
        }
    };

    const getPunchline = () => {
        punchlineDiv.innerHTML = punchline;
        punchlineDiv.classList.add('bubble');

        punchlineBtn.classList.toggle('hidden');
        newJokeBtn.classList.toggle('hidden');
    };

    punchlineBtn.addEventListener('click', getPunchline);
    newJokeBtn.addEventListener('click', getJoke.bind(null, [URL]));
    getJoke(URL);
}