// Header en section declareren door deze aan te roepen vanuit de HTML.
const header = document.querySelector('header');
const section = document.querySelector('section');

// Laad het JSON bestand in m.b.v. de URL .
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const movies = request.response;
    // De functie populateHeader zorgt ervoor dat header gevuld wordt met content.
    populateHeader(movies);
    // De functie showDetailsMovies zorgt ervoor dat hier de inhoud wordt aangemaakt en weergegeven in de HTML.
    showMovies(movies);
}

// De functie populateHeader wordt hier uitgeschreven in detail. Hierin worden de elementen voor in de header vam de HTML aangemaakt.
function populateHeader(jsonObj) {
    // Aanmaken van een H1 in de header. 
    const idOfMovie = document.createElement('h1');
    // textContent convert de JSON data in text in HTML.
    idOfMovie.textContent = jsonObj[0]['id'];
    // Voegt de aangeroepen content toe in de header.
    header.appendChild(idOfMovie);

    // In de header wordt er een titel van de film toegevoegd.  
    const titleOfMovie = document.createElement('h2');
    titleOfMovie.textContent = 'Movie: ' + jsonObj[0]['title'];
    header.appendChild(titleOfMovie);
}

function showMovies(jsonObj) {
    const heroes = jsonObj['members'];

    for (let i = 0; i < heroes.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        const superPowers = heroes[i].powers;
        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}