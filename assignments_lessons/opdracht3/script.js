// Section declareren door deze aan te roepen vanuit de HTML
const section = document.querySelector('section');

// Laad het JSON bestand in m.b.v. de URL en de regels code (5-10)
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
    
    // Als allereerst worden er in deze for loop hieronder allerlei elementen aangemaakt die nodig zijn om de content te tonen. Deze loops worden aangemaakt om door als het ware door elke array te 'loopen'
    for (let i = 0; i < 5; i++) {
		console.log(details[i]);

		const myArticle = document.createElement('article');
		const myTitle = document.createElement('h1');
		const mySongTitle = document.createElement('h2');
		const myArtist = document.createElement('p');
		const myPlays = document.createElement('p');
		const myImg = document.createElement('img');
		const myAudio = document.createElement('audio');
		const myAlbum = document.createElement('p');
		const myGenre = document.createElement('p');
		
		mySongTitle.textContent = details[i].strTrack;
		// console.log(mySongTitle.textContent);
		myAudio.src = details[i].strAudio;
		console.log(myAudio.src);


		myArticle.appendChild(myTitle);
		myArticle.appendChild(myAudio);
		section.appendChild(myArticle);
	}
}
