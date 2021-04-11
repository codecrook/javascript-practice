{
    const baseURL = "https://api.punkapi.com/v2/beers?page=";
    const filterABV = document.getElementById("filterABV");
    const filterIBU = document.getElementById("filterIBU");
    const pageText = document.getElementById("pageNumber");
    const prevPage = document.getElementById("prevPage");
    const nextPage = document.getElementById("nextPage");
    let [optionsABV, optionsIBU, page] = ["", "", 1];

    // filters
    filterABV.addEventListener("change", e => {
        const value = e.target.value;
        optionsABV = {
            "all": "",
            "weak": "&abv_lt=4.6",
            "medium": "&abv_gt=4.5&abv_lt=7.6",
            "strong": "&abv_gt=7.5"
        }[value];

        page = 1;
        getBeers();
    });
    filterIBU.addEventListener("change", e => {
        const value = e.target.value;
        optionsIBU = {
            "all": "",
            "weak": "&ibu_lt=35",
            "medium": "&ibu_gt=34&ibu_lt=75",
            "strong": "&ibu_gt=74"
        }[value];

        page = 1;
        getBeers();
    });

    async function getBeers() {
        const URL = `${baseURL}${page}${optionsABV}${optionsIBU}`;
        // fetch
        const beerPromise = await fetch(URL);
        const beers = await beerPromise.json();

        // pagination
        pageText.innerText = page;

        prevPage.disabled = (page === 1);
        nextPage.disabled = (beers.length < 25);

        // render data
        const beersDiv = document.querySelector('.beers');

        let beerHtml = "";
        const genericBottle = 'https://cdn.pixabay.com/photo/2014/12/22/00/04/bottle-576717_960_720.png';

        beers.forEach(beer => {
            beerHtml += `
            <div class='beer-wrapper card'>
                <div class='beer'>
                    <img class='beer__img' src="${beer.image_url || genericBottle}">
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

    // pagination
    prevPage.addEventListener('click', () => {
        --page;
        getBeers();
    });
    nextPage.addEventListener('click', () => {
        ++page;
        getBeers();
    });

    // initial get
    getBeers();
}