let liste_poke = [];

$(document).ready(function() {
    fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then((response) => response.json())
    .then((json) => {

        liste_poke = json;
        randomPokeAccueil();

    });

});

function toggleAccueil() {

    $(".random").toggle();
    $(".fiche_poke").toggle();

}

function randomPokeAccueil() {

    let random = Math.floor(Math.random() * liste_poke.length);
    var poke = liste_poke[random];
    var types = poke['types'];
    random = Math.floor(Math.random() * 10);
    console.log(types.length);
    console.log(types);

    let sprite = 'regular';


    if(random === 1) {

        sprite = 'shiny';
        console.log('shiny')

    }

    let code = "";

    code += "<img onclick=clickRandomPoke(" + poke['pokedexId'] + ") src='" + poke['sprites'][sprite] + "'></img><div class='info_random'><p>#" + poke['pokedexId'] + " " + poke['name']['fr'] + "</p><div class='types'>";

    types.forEach(function (type) {

        code += "<img src='" + type['image'] + "'></img>";

    });

    code += "</div></div><br><button onclick='randomPokeAccueil()'>Random</button>"

    $('.random').html(code);

}

function clickRandomPoke(id) {

    let poke = liste_poke[id];

    toggleAccueil();

    $('.fiche_poke').html("<img src='" + poke['sprites']['regular'] + "'></img>")

}

function recherche() {

    let txt = document.getElementById('recherche_txt').value;
    let mode = document.getElementById('mode').value;

    console.log(txt);
    console.log(mode);

    let result = false;

    if(mode == "type") {



    }
    else if(mode == "num") {



    }
    else {

        liste_poke.forEach(function (poke) {

            if(poke['name']['fr'])

        })

    }

    if(!result) {

        $(".resultat").html("Il n'y a aucun résultat pour cette recherche");

    }

}
