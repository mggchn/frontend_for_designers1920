// Section declareren door deze aan te roepen vanuit de HTML
const section = document.querySelector('section');

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
    
    // Als allereerst worden er in deze for loop hieronder allerlei elementen aangemaakt die nodig zijn om de content te tonen. Deze loops worden aangemaakt om door als het ware door elke array te 'loopen'. 
    for (let i = 0; i < 10; i++) {
		console.log(details[i]);

		const myArticle = document.createElement('article');
		const myAlbumCover = document.createElement('div');
		myAlbumCover.classList.add('albumcover');
		const mySongDetails = document.createElement('div');
		mySongDetails.classList.add('songdetails');
		
		const myImg = document.createElement('img');
		const myPlays = document.createElement('p');
		myPlays.classList.add('plays');
		const mySongTitle = document.createElement('h2');
		const myArtist = document.createElement('p');
		const myAlbumGenre = document.createElement('p');
		myAlbumGenre.classList.add('albumgenre');
		
		myImg.src = details[i].strTrackThumb;
		// console.log(myImg.src);
		myPlays.textContent = details[i].intTotalPlays + " plays";
		// console.log(myPlays.textContent);
		mySongTitle.textContent = details[i].strTrack;
		// console.log(mySongTitle.textContent);
		myArtist.textContent = details[i].strArtist;
		// console.log(myArtist.textContent);
		myAlbumGenre.textContent = details[i].strAlbum + " — " + details[i].strGenre;
		// console.log(myAlbumGenre.textContent);

		// De <article> in de <section> gestopt moet worden
		section.appendChild(myArticle);
		// De <div> die in de <article> gestopt moeten worden
		myArticle.appendChild(myAlbumCover);
		myArticle.appendChild(mySongDetails);

		// De details van het lied die in de <div class="songdetails"> gestopt moet worden
		mySongDetails.appendChild(myPlays);
		mySongDetails.appendChild(mySongTitle);
		mySongDetails.appendChild(mySongTitle);
		mySongDetails.appendChild(myArtist);
		mySongDetails.appendChild(myAlbumGenre);

		// De album cover die in de <div class="albumcover" gestopt moet
		myAlbumCover.appendChild(myImg);
	}
}
