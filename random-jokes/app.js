{
    const [setupDiv, punchlinDiv, punchlineBtn, newJokeBtn, URL] = [
        document.querySelector('#setup'),
        document.querySelector('#punchline'),
        document.querySelector('#punchlineBtn'),
        document.querySelector('#newJokeBtn'),
        'https://official-joke-api.appspot.com/jokes/programming/random'
    ];

    const getJoke = async (url) => {
        const jokePromise = await fetch(url);
        const joke = await jokePromise.json();

        console.log(joke);
    }

    getJoke(URL);
}