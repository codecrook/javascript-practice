{
    const baseURL = "https://api.punkapi.com/v2/beers";
    const filterABV = document.getElementById("filterABV");
    const filterIBU = document.getElementById("filterIBU");
    let [optionsABV, optionsIBU] = ["", ""];

    // filters
    filterABV.addEventListener("change", e => {
        const value = e.target.value;
        optionsABV = {
            "all": "",
            "weak": "abv_lt=4.6",
            "medium": "abv_gt=4.5&abv_lt=7.6",
            "strong": "abv_gt=7.5"
        }[value];

        getBeers();
    });
    filterIBU.addEventListener("change", e => {
        const value = e.target.value;
        optionsIBU = {
            "all": "",
            "weak": "ibu_lt=35",
            "medium": "ibu_gt=34&ibu_lt=75",
            "strong": "ibu_gt=74"
        }[value];

        getBeers();
    });

    async function getBeers() {
        const URL = `${baseURL}?${optionsABV}&${optionsIBU}`;
        // fetch
        const beerPromise = await fetch(URL);
        const beers = await beerPromise.json();

        // render data
        const beersDiv = document.querySelector('.beers');

        let beerHtml = "";

        beers.forEach(beer => {
            beerHtml += `
            <div class='beer-wrapper card'>
                <div class='beer'>
                    <img class='beer__img' src="${beer.image_url}">
                    <h3>${beer.name}</h3>
                    <span class='beer__info'>
                        <span>ABV: ${beer.abv}%</span>
                        <span>IBU: ${beer.ibu}</span>
                    </span>
                </div>

                <div class='beer__content'>
                    <div class='beer__name'>${beer.name}</div>
                    <div class='beer__tagline'>${beer.tagline}</div>
                    <div class='beer__description'>${beer.description}</div>
                    <div class='beer__food-pairing'>
                        Pair with: ${beer.food_pairing.join(', ')}
                    </div>
                </div>
            </div>
            `;
        });

        beersDiv.innerHTML = beerHtml;
    }

    // initial get
    getBeers();
}