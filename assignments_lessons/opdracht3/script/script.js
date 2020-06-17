///// ALS EERST JSON DATA INLADEN /////

// Elementen declareren door deze aan te roepen vanuit de HTML
const body = document.querySelector('body');

// Laad het JSON bestand in m.b.v. de URL en de regels code (5-14)
let requestURL = 'https://raw.githubusercontent.com/mggchn/frontend_for_designers1920/master/assignments_lessons/opdracht3/mostlovedsongs.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const songs = request.response;
	// console.log(songs);
	showSongs(songs);
}

function showSongs(jsonObj) {
	const details = jsonObj.loved;
	// console.log(details);

	// Elementen voor de slider waar de containers in de <section> komen te zitten
	const myCarouselContainer = document.createElement('div');
	myCarouselContainer.classList.add('carousel-container');
	const myCarouselSlider = document.createElement('ul');
	myCarouselSlider.classList.add('carousel-slider');

	///// CONTAINER EN DE BIJBEHORENDE BUTTONS AANMAKEN /////
	// Elementen voor de container van de buttons
	const myButtonContainer = document.createElement('div');
	myButtonContainer.classList.add('button-container');

	// Elementen voor de buttons
	const previousButton = document.createElement('button');
	previousButton.classList.add('previous-button');
	previousButton.innerHTML = '&#8249';
	const nextButton = document.createElement('button');
	nextButton.classList.add('next-button');
	nextButton.innerHTML = '&#8250';

    // Als allereerst worden er in deze for loop hieronder allerlei elementen aangemaakt die nodig zijn om de content te tonen. Deze loops worden aangemaakt om door als het ware door elke array te 'loopen'. 
    for (let i = 0; i < details.length; i++) {
		// console.log(details[i]);

		// Elementen voor de containers waar de informatie van het lied in komt te staan
		const myArticle = document.createElement('article');
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
	}
}

///// DE CAROUSEL CLICKABLE KRIJGEN /////

const songs = document.querySelector('article');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('next-button');
console.log(nextButton);
nextButton.addEventListener('click', nextSong());

function nextSong() {
	currentSong = (currentSong < 11) ? currentSong + 1 : 11;
    songs.style.transform = 'translate(' + (currentSong) * -25 + '%)';
}