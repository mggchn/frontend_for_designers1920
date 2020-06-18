// Section declareren door deze aan te roepen vanuit de HTML
const section = document.querySelector('section');

// Laad het JSON bestand in m.b.v. de URL en de regels code (5-10)
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const movies = request.response;
    // console.log(movies);
    // De functie showsMovies zorgt ervoor dat hier de inhoud wordt aangemaakt en weergegeven in de HTML
    showMovies(movies);
}

function showMovies(jsonObj) {
    const details = jsonObj;
    
    // Als allereerst worden er in deze for loop hieronder allerlei elementen aangemaakt die nodig zijn om de content te tonen. Deze loops worden aangemaakt om door als het ware door elke array te 'loopen'
    for (let i = 0; i < details.length; i++) {
        // console.log(details[i]);
        
        // Article aanmaken voor de filmdetails
        const myArticle = document.createElement('article');
        // h2 aanmaken voor id
        const myH2 = document.createElement('h2');
        // h3 aanmaken voor title
        const myH3 = document.createElement('h3');
        // img aanmaken voor de afbeeldingen
        const myImg = document.createElement('img');
        // p aanmaken voor simple plot
        const myPara1 = document.createElement('p');
        // p aanmaken voor release date
        const myPara2 = document.createElement('p');
        // P aanmaken voor actors
        const myPara3 = document.createElement('p');
        // ul aanmaken voor de lijst van acteurs
        const myList = document.createElement('ul');


        // li aanmaken voor de namen van de acteurs. Omdat dit een array bevat, wordt dit aangemaakt d.m.v. een for loop
        const actors = details[i].actors;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            myList.appendChild(listItem);
            
        }
    
        // De data van de verschillende elemanten die hierboven zijn aangemaakt, worden hier aangeroepen. M.b.v. console.log kan je checken of dit ook de daadwerkeleijke data is die je nodig hebt
        myH2.textContent = details[i].id;
        // console.log(myH2.textContent);
        myH3.textContent = details[i].title;
        // console.log(myH3.textContent);
        myImg.src = details[i].cover;
        myPara1.textContent = details[i].simple_plot;
        // console.log(myPara1.textContent);
        myPara2.textContent = 'Released on: ' + details[i].release_date;
        // console.log(myPara2.textContent);
        myPara3.textContent = 'Actors:';
        // console.log(myPara3.textContent);
        
        // Als laatst worden hieronder alle hierboven aangemaakte elementen in de parent gestopt. De aangeroepen data wordt weergegeven op de HTML-pagina!
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        
        section.appendChild(myArticle);
    }
}