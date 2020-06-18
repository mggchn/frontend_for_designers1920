///// ALS EERST JSON DATA INLADEN /////

// Elementen declareren door deze aan te roepen vanuit de HTML
const body = document.querySelector('body');
const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');
var details;

// Laad het JSON bestand in m.b.v. de URL en de regels code (5-14)
let requestURL = 'https://raw.githubusercontent.com/mggchn/frontend_for_designers1920/master/assignments_lessons/opdracht3/mostlovedsongs.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	const songs = request.response;
	showSongs(songs);
}

function showSongs(jsonObj) {
	var details = jsonObj.loved;

	// Elementen voor de slider waar de containers in de <section> komen te zitten
	const myCarouselContainer = document.createElement('div');
	myCarouselContainer.classList.add('carousel-container');
	let myCarouselSlider = document.createElement('ul');
	myCarouselSlider.classList.add('carousel-slider');
	let allSongs = document.createElement('div');
	allSongs.classList.add('allsongs');

	// Elementen voor de container van de buttons
	const myButtonContainer = document.createElement('div');
	myButtonContainer.classList.add('button-container');

	// Als allereerst worden er in deze for loop hieronder allerlei elementen aangemaakt die nodig zijn om de content te tonen. 
	// Deze loops worden aangemaakt om door als het ware door elke array te 'loopen'. 
	for (let i = 0; i < details.length; i++) {
		// console.log(details[i]);

		// Elementen voor de containers waar de informatie van het lied in komt te staan
		const myArticle = document.createElement('article');
		myArticle.classList.add('articlesongs');
		const myAlbumCover = document.createElement('div');
		myAlbumCover.classList.add('albumcover');
		const mySongDetails = document.createElement('div');
		mySongDetails.classList.add('songdetails');

		// Elementen voor de informatie van het lied
		const myImg = document.createElement('img');
		const myPlays = document.createElement('p');
		myPlays.classList.add('plays');
		const mySongTitle = document.createElement('h2');
		const myArtist = document.createElement('p');
		const myAlbumGenre = document.createElement('p');
		myAlbumGenre.classList.add('albumgenre');

		// Aanroepen van JSON data door deze te koppelen aan de elementen voor de informatie aan het lied
		myImg.src = details[i].strTrackThumb;
		myPlays.textContent = details[i].intTotalPlays + " plays";
		mySongTitle.textContent = details[i].strTrack;
		myArtist.textContent = details[i].strArtist;
		myAlbumGenre.textContent = details[i].strAlbum + " — " + details[i].strGenre;

		// De <div> die in de <body> gestopt moet worden
		body.appendChild(myCarouselContainer);
		body.appendChild(myButtonContainer);


		// De <div class="carousel-slider"> die in de <div class="carousel-container"> gestopt moet worden
		myCarouselContainer.appendChild(myCarouselSlider);

		// De <article> die in de <ul class="carousel-slider"> gestopt moet worden
		myCarouselSlider.appendChild(myArticle);
		myCarouselSlider.appendChild(allSongs);

		allSongs.appendChild(myArticle);

		// De <div> die in de <article> gestopt moeten worden
		myArticle.appendChild(myAlbumCover);
		myArticle.appendChild(mySongDetails);

		// De album cover die in de <div class="albumcover" gestopt moet worden
		myAlbumCover.appendChild(myImg);

		// De details van het lied die in de <div class="songdetails"> gestopt moet worden
		mySongDetails.appendChild(myPlays);
		mySongDetails.appendChild(mySongTitle);
		mySongDetails.appendChild(mySongTitle);
		mySongDetails.appendChild(myArtist);
		mySongDetails.appendChild(myAlbumGenre);

		//  De <button> die in de <div class="button-container"> gestopt moet worden
		myButtonContainer.appendChild(previousButton);
		myButtonContainer.appendChild(nextButton);

		mySongs = document.querySelector('article');
		// console.log(mySongs);
	}

	divSongs = document.querySelector('.allsongs');
	// console.log(divSongs);
}


///// HET BEWEGEN VAN DE SLIDER /////

// Hiermee geef ik de huidige plek een positie mee van 0, voordat hij naar links/rechts beweegt. 
var position = 0;

// Bron: https://stackoverflow.com/questions/54169955/trying-to-apply-css-transform-in-javascript
// Als de slider naar links gaat, is de positie -1. Hij zal dan -50% naar links verschuiven.
previousButton.onclick = function () {
	position = (position > 0) ? position - 1 : 0;
	divSongs.style.transform = 'translate(calc(' + (position) * -50 + '%)';
}

// Als de slider naar rechts gaat, is de positie +1. Hij zal dan 50% naar rechts verschuiven.
// Ik geef hier een positie mee van 40. Dit betekent dat hij stopt bij de 40e klik, oftewel: einde van de carousel.
nextButton.onclick = function () {
	position = (position < 40) ? position + 1 : 40;
	divSongs.style.transform = 'translate(calc(' + (position) * -50 + '%)';
}

// De slider laten bewegen met de pijltjes van het toetsenbord.
document.addEventListener('keydown', controls);

// Met 37 of 'W' (pijltje links) ga je naar links.
// Met 39 of 'D' (pijltje rechts) ga je naar rechts.
function controls(e) {
	// console.log(e.which);
	if (e.which === 37 || e.which === 65) {
		previousButton.onclick();
	} else if (e.which === 39 || e.which === 68) {
		nextButton.onclick();
	}
}