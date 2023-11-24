let liste_poke = [];

$(document).ready(function() {
    fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then((response) => response.json())
    .then((json) => {

        liste_poke = json;
        console.log(liste_poke);

    });

});

function recherche() {

    document.getElementById("resultat").innerHTML = "";

    let txt = document.getElementById('recherche_txt').value;
    let mode = document.getElementById('mode').value;

    console.log(txt);
    console.log(mode);

    let result = false;

    if(mode == "type") {

        let liste = liste_poke.filter((poke)=>(poke["types"] != undefined && poke["types"][0]["name"].toLowerCase().includes(txt.toLowerCase())) || (poke["types"] != undefined && poke["types"].lenght > 1 && poke["types"][1]["name"].toLowerCase().includes(txt.toLowerCase())));

        if(liste.length != 0) {

            liste.forEach(function (poke) {

                fichePoke(poke, "#resultat");

            })

        }
        else {

            $("#resultat").html("Il n'y a aucun résultat pour cette recherche");

        }

    }
    else if(mode == "num") {

        let liste = liste_poke.filter((poke)=>poke["pokedexId"] == txt);

        if(liste.length != 0) {

            liste.forEach(function (poke) {

                fichePoke(poke, "#resultat");

            })

        }
        else {

            $("#resultat").html("Il n'y a aucun résultat pour cette recherche");

        }

    }
    else {

        let liste = liste_poke.filter((poke)=>poke["name"]["fr"].toLowerCase().includes(txt.toLowerCase()));

        if(liste.length != 0) {

            liste.forEach(function (poke) {

                fichePoke(poke, "#resultat");

            })

        }
        else {

            $("#resultat").html("Il n'y a aucun résultat pour cette recherche");

        }

    }

}

function fichePoke(poke, balise) {

    if(poke['types'] == undefined) {

        $(balise).append("<div class='fiche' onclick='fichePokeDetail(" + poke["pokedexId"] + ',"' + balise + '"' + ")'><h2>" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><img class='img_poke' src='" + poke["sprites"]["regular"] + "' width='100%'></div>")

    }
    else if(poke['types'][1] == undefined) {

        console.log("1 type " + poke['types']);

        $(balise).append("<div class='fiche' onclick='fichePokeDetail(" + poke["pokedexId"] + ',"' + balise + '"' + ")'><h2>" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><img class='img_poke' src='" + poke["sprites"]["regular"] + "' width='100%'><div class='types'><img src='" + poke["types"][0]["image"] + "'></div></div>")

    }
    else {

        $(balise).append("<div class='fiche' onclick='fichePokeDetail(" + poke["pokedexId"] + ',"' + balise + '"' + ")'><h2>" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><img class='img_poke' src='" + poke["sprites"]["regular"] + "' width='100%'><div class='types'><img src='" + poke["types"][0]["image"] + "'><img src='" + poke["types"][1]["image"] + "'></div></div>")

    }

}

function fichePokeById(id) {

    let poke = liste_poke.filter((poke_) => poke_['pokedexId'] == id)[0];

    console.log(id);
    console.log(poke);

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

function fichePokeDetail(id, balise) {

    $(balise).html();

    let poke = liste_poke.filter((poke_) => poke_['pokedexId'] == id)[0];

    console.log(id);
    console.log(poke);

    if(poke['types'] == undefined) {

        let contenu = "<div class='fiche_poke_detail'><h2 style='text-align: center;'>#" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><div class='infos'><img class='img_poke_detail' src='" + poke["sprites"]["regular"] + "' width='25%'><div class='infos_texte'><h3>Types :</h3><br><div class='types'></div><h3>Génération : " + poke["generation"] + "</h3><div class='evolution'>";
        console.log(poke["evolution"]);
        if(poke["evolution"]["pre"] != null) {

            contenu += "<h3>Pré-évolution</h3><br>";

            poke["evolution"]["pre"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"]["next"] != null) {

            contenu += "<h3>Évolution</h3><br>";

            poke["evolution"]["next"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        contenu += "</div></div></div></div>";

    }
    else if(poke['types'][1] == undefined) {

        console.log("1 type " + poke['types']);

        let contenu = "<div class='fiche_poke_detail'><h2 style='text-align: center;'>#" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><div class='infos'><img class='img_poke_detail' src='" + poke["sprites"]["regular"] + "' width='25%'><div class='infos_texte'><h3>Types :</h3><br><div class='types'><img src='" + poke["types"][0]["image"] + "' width='3%'></div><h3>Génération : " + poke["generation"] + "</h3><div class='evolution'>";
        console.log(poke["evolution"]);
        if(poke["evolution"]["pre"] != null) {

            contenu += "<h3>Pré-évolution</h3><br>";

            poke["evolution"]["pre"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"]["next"] != null) {

            contenu += "<h3>Évolution</h3><br>";

            poke["evolution"]["next"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        contenu += "</div></div></div></div>";

    }
    else {

        let contenu = "<div class='fiche_poke_detail'><h2 style='text-align: center;'>#" + poke["pokedexId"] + " " + poke["name"]["fr"] + "</h2><div class='infos'><img class='img_poke_detail' src='" + poke["sprites"]["regular"] + "' width='20%'><div class='infos_texte'><h3>Types :</h3><br><div class='types'><img src='" + poke["types"][0]["image"] + "' width='3%'><img src='" + poke["types"][1]["image"] + "' width='3%'></div><h3>Génération : " + poke["generation"] + "</h3><div class='evolution'>";
        console.log(poke["evolution"]);
        if(poke["evolution"]["pre"] != null) {

            contenu += "<h3>Pré-évolution</h3><br>";

            poke["evolution"]["pre"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        if(poke["evolution"]["next"] != null) {

            contenu += "<h3>Évolution</h3><br>";

            poke["evolution"]["next"].forEach((evo) => {

                contenu += fichePokeById(evo["pokedexId"]);

            })

        }
        contenu += "</div></div></div></div>";

        $(balise).html(contenu);

    }

}
