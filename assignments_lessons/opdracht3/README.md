# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga ik een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers mijn ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Top 50 Most Loved Songs
Voor dit project heb ik een pagina gecodeerd waarop de Top 50 Most Loved Songs te bekijken zijn in een vorm van een carousel.
De carousel is navigeerbaar met behulp van de links/rechts knoppen onder de liedjes en ook via de links/rechts – W/D knoppen op het toetsenbord.

De data die ik voor dit project heb gebruikt, is te vinden in [dit JSON file](https://www.theaudiodb.com/api/v1/json/5d656564694f534d656564/mostloved.php?format=track&format=track).

Bekijk hier [mijn uitgewerkte opdracht](https://mggchn.github.io/frontend_for_designers1920/assignments_lessons/opdracht3/).




## Principles of User Interface Design
In mijn ontwerp heb ik interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Deze zijn hieronder toegelicht:

### 04. Keep users in control
Dit principle is binnen mijn ontwerp terug te vinden bij de twee buttons, met elk een pijl op de button aangegeven die naar links of rechts wijst. Deze geven duidelijk aan wat er zal gaan gebeuren als er op de button gedrukt wordt, namelijk het naar links of rechts navigeren.

### 08. Provide a natural next step
Dit principle is binnen mijn ontwerp te vinden bij de carousel. De liedjes aan de buitenkant worden niet volledig weergegeven in de slider, wat betekent dat er nog iets achter zit. De gebruiker zal dit ook verwachten en zal dus m.b.v. de buttons of de toetsen navigeren, zodat de liedjes volledig in beeld te zien zijn.
Op de buttons zijn er een hoverstate aanwezig. Dit laat een sein bij de gebruiker achter dat deze buttons klikbaar zijn.

### 09. Appearance follows behavior
Dit principle is binnen mijn ontwerp verwerkt door de buttons er ook klikbaar uit te laten zien. Dit is toegepast door een schaduw toe te voegen en een randje toe te voegen aan de knop om het als een blokje uit te laten zien.

### 11. Strong visual hierarchies work best
De visuele hiërarchie is binnen mijn ontwerp terug te zien binnen de teksten op de pagina. De headings zijn groter dan de broodtekst en dikgedrukt. Voor de broodtekst is er in het algemeen sprake van een reguliere font-weight, maar voor sommige stukken tekst is dit een uitzondering. Voor het x aantal plays dat wordt laten zien bij elk lied is deze bijvoorbeeld grijs gemaakt en is deze in hoofdletters weergegeven, zodat er extra contrast met de rest van de tekst zit. 

## States

## Code