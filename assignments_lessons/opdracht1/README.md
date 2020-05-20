# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Case: foto's filteren op kleur
Voor dit project heb ik voor de case: 'foto's filteren op kleur' gekozen. Hierbij is het de bedoeling dat je een aantal foto's hebt met verschillende kleuren en alleen de foto's weergeeft van de gekozen kleur van het filter. De overige kleuren die er niet bij horen zullen dan verdwijnen.

Bekijk hier [mijn uitgewerkte opdracht](https://mggchn.github.io/frontend_for_designers1920/assignments_lessons/opdracht1/).

## interface
Leg de interface uit. In de demo heb je de interface design principles 04 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?


## code
### HTML
In de HTML code te zien, bestaat deze voornamelijk uit divs. Hier heb ik bewust voor gekozen, zodat de vlakken van de divs naast elkaar komen te staan als een kolom. Deze kolommen heb ik telkens een class gegeven genaamd "container".

Binnen de eerste container bij regel 13 heb ik een div gemaakt voor de "side-nav", deze is voor de filters. Deze heb ik gevormd door er een ul van te maken. 

Bij de volgende drie containers (regel 24, 29 en 34) komen de zogenaamde foto's. In elke van deze 3 containers zitten er weer 3 divs die de foto aanduiden. Deze heb ik zichtbaar laten maken door ze elk een andere kleur te geven in CSS. 

Als laatst heb ik bovenaan de /body bij regel 40 de link naar mijn javascript.

### CSS


### JAVASCRIPT
Bij regel 1 en 3 heb ik m.b.v. document.querySelectorAll(). Dit zorgt ervoor dat er een array wordt aangemaakt van alle elementen die ik heb geselecteerd. In dit geval heb ik dus alle foto's en ook de foto's die rood zijn apart gedeclareerd in de code met const foto en rood.

Bij regel 2 heb ik m.b.v. document.getElementById() de id uit mijn HTML aangeroepen in js en gedeclareerd aan de const rood_filter.

Bij regel 5 heb ik een status gemaakt voor de const rood. Deze heb ik een boolean gegeven met als waarde false;. Deze wordt gebruikt om de filter te kunnen togglen.

Op regel 6 is er een onclick function aangemaakt met een if/else statement. Binnen de if/else zit er een for loop. Deze gaat altijd door de code heen wanneer er wordt geklikt op rood_filter.


Binnen de function zit er dus een if/else statement. Er wordt eigenlijk met de code bedoeld:

als de rood_status == false, dan zal hij door de for loop gaan die binnen de if statement is gemaakt. Deze zegt het volgende:

als er in de classList van foto "rood" ( == true) bevat (dit wordt getriggered door .classList.contains), dan worden de rode foto's als het ware geblokkeerd en blijven de staan. De overige foto's verdwijnen dan. rood_status wordt dan true, want er is al een keertje op geklikt.

Bij de else statement binnen de function zegt hij eigenlijk precies het tegenovergestelde van de if statement. als .classList.contains("rood") == false, dan wordt hij geblokkeerd. Dit betekent dan eigenlijk dat alle foto's geblokkeerd worden en op de pagina wordt weergegeven.

