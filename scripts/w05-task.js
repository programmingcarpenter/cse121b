/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');
var templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    }
)};


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */

function reset() {
    templesElement.innerHTML = '';
}

/* sortBy Function */

function sortBy(temples) {
    reset();
    let filter = document.getElementById('#sortBy').value;
    let filteredTemples = [];
    switch (filter) {
        case 'utah':
            filteredTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(filteredTemples);
        case 'nonutah':
            filteredTemples = temples.filter(temple => !temple.location.includes('Utah'));
            displayTemples(filteredTemples);
        case 'older':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(filteredTemples);
        case 'all':
            filteredTemples = temples;
            displayTemples(filteredTemples);
    }
}

getTemples();

/* Event Listener */

document.getElementById('sortBy').addEventListener('change', () => sortBy(templeList));
