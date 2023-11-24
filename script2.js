let liste_poke = [];

$(document).ready(function() {
    fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then((response) => response.json())
    .then((json) => {

        liste_poke = json;

    });

});

function toggleAccueil() {

    $(".random").toggle();
    $(".fiche_poke").toggle();

}

function randomPokeAccueil() {

    let random = Math.floor(Math.random() * liste_poke.length);
    var poke = liste_poke[random];
    console.log(poke);
    var types = poke['types'];
    random = Math.floor(Math.random() * 10);
    console.log(types.length);
    console.log(types);

    let sprite = 'regular';

    let code = "";

    if(random === 1) {

        sprite = 'shiny';
        console.log('shiny')

        code += "<img onclick=clickRandomPoke(" + poke['pokedexId'] + ") src='" + poke['sprites']["shiny"] + "'></img><div class='info_random'><p>#" + poke['pokedexId'] + " " + poke['name']['fr'] + "</p><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#FDE966' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-star'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/></svg><div class='types'>";

    }
    else {

        code += "<img onclick=clickRandomPoke(" + poke['pokedexId'] + ") src='" + poke['sprites']["regular"] + "'></img><div class='info_random'><p>#" + poke['pokedexId'] + " " + poke['name']['fr'] + "</p><div class='types'>";

    }

    types.forEach(function (type) {

        code += "<img src='" + type['image'] + "' width='40%'></img>";

    });

    code += "</div></div><br><button onclick='randomPokeAccueil()'>Random</button>"

    $('.random').html(code);

}

function clickRandomPoke(id) {

    let poke = liste_poke[id];

    toggleAccueil();

    fichePokeDetail(poke["pokedexId"], ".fiche_poke");

}

function fichePokeDetail(id, balise) {

    $(balise).html();

    let poke = liste_poke.filter((poke_) => poke_['pokedexId'] == id)[0];
    console.log(poke);

    if(poke['types'] == undefined) {

        let contenu = "<div class='fiche_poke_detail'><h2 style='text-align: center;'>#" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><div class='infos'><img class='img_poke_detail' src='" + poke["sprites"]["regular"] + "' width='25%'><div class='infos_texte'><h3>Types :</h3><br><div class='types'></div><h3>Génération : " + poke["generation"] + "</h3><div class='evolution'>";
        console.log(poke["evolution"]);
        if(poke["evolution"] != null && poke["evolution"]["pre"] != null) {

            contenu += "<h3>Pré-évolution</h3><br>";

            poke["evolution"]["pre"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"] != null && poke["evolution"]["next"] != null) {

            contenu += "<h3>Évolution</h3><br>";

            poke["evolution"]["next"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"] != null && poke["evolution"]["mega"] != null) {

            contenu += "<h3>Méga-évolution</h3><br>";

            poke["evolution"]["mega"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        contenu += "</div></div></div></div>";

        $(balise).html(contenu);

    }
    else if(poke['types'][1] == undefined) {

        console.log("1 type " + poke['types']);

        let contenu = "<div class='fiche_poke_detail'><h2 style='text-align: center;'>#" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><div class='infos'><img class='img_poke_detail' src='" + poke["sprites"]["regular"] + "' width='25%'><div class='infos_texte'><h3>Types :</h3><br><div class='types'><img src='" + poke["types"][0]["image"] + "' width='3%'></div><h3>Génération : " + poke["generation"] + "</h3><div class='evolution'>";
        console.log(poke["evolution"]);
        if(poke["evolution"] != null && poke["evolution"]["pre"] != null) {

            contenu += "<h3>Pré-évolution</h3><br>";

            poke["evolution"]["pre"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"] != null && poke["evolution"]["next"] != null) {

            contenu += "<h3>Évolution</h3><br>";

            poke["evolution"]["next"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"] != null && poke["evolution"]["mega"] != null) {

            contenu += "<h3>Méga-évolution</h3><br>";

            poke["evolution"]["mega"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        contenu += "</div></div></div></div>";

        $(balise).html(contenu);

    }
    else {

        let contenu = "<div class='fiche_poke_detail'><h2 style='text-align: center;'>#" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><div class='infos'><img class='img_poke_detail' src='" + poke["sprites"]["regular"] + "' width='20%'><div class='infos_texte'><h3>Types :</h3><br><div class='types'><img src='" + poke["types"][0]["image"] + "' width='3%'><img src='" + poke["types"][1]["image"] + "' width='3%'></div><h3>Génération : " + poke["generation"] + "</h3><div class='evolution'>";
        console.log(poke["evolution"]);
        if(poke["evolution"] != null && poke["evolution"]["pre"] != null) {

            contenu += "<h3>Pré-évolution</h3><br>";

            poke["evolution"]["pre"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"] != null && poke["evolution"]["next"] != null) {

            contenu += "<h3>Évolution</h3><br>";

            poke["evolution"]["next"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"] != null && poke["evolution"]["mega"] != null) {

            contenu += "<h3>Méga-évolution</h3><br>";

            poke["evolution"]["mega"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        contenu += "</div></div></div></div>";

        $(balise).html(contenu);

    }

}

function fichePokeById(id) {

    let poke = liste_poke.filter((poke_) => poke_['pokedexId'] == id)[0];

    if(poke['types'] == undefined) {

        return "<a onclick='fichePokeDetail(" + poke["pokedexId"] + ")'><div class='fiche'><h2>" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><img class='img_poke' src='" + poke["sprites"]["regular"] + "' width='100%'></div></a>";

    }
    else if(poke['types'][1] == undefined) {

        console.log("1 type " + poke['types']);

        return "<a onclick='fichePokeDetail(" + poke["pokedexId"] + ")'><div class='fiche'><h2>" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><img class='img_poke' src='" + poke["sprites"]["regular"] + "' width='100%'><div class='types'><img src='" + poke["types"][0]["image"] + "'></div></div></a>";

    }
    else {

        return "<a onclick='fichePokeDetail(" + poke["pokedexId"] + ")'><div class='fiche'><h2>" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><img class='img_poke' src='" + poke["sprites"]["regular"] + "' width='100%'><div class='types'><img src='" + poke["types"][0]["image"] + "'><img src='" + poke["types"][1]["image"] + "'></div></div></a>";

    }

}
