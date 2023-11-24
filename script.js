
tableau = [];

$(document).ready(function () {
    fetch('https://tyradex.vercel.app/api/v1/pokemon')
        .then((response) => response.json())
        .then((json) => {

            tableau = json;
            showListTitle();

        });

});

function toggleDetailList() {

    $("#detail").toggle();
    $("#demo").toggle();

}
// pour ListeTypes
function showListTitle() {

    document.getElementById("demo").innerHTML = "<h1>Liste des pokémon :</h1>";

    tableau.forEach(function (poke) {

        fetch('https://tyradex.vercel.app/api/v1/pokemon')
            .then((response) => response.json())
            .then((json) => {
                //ajouter les pokémons > à la ligne 
                document.getElementById("demo").innerHTML += poke['name']["fr"] + "<br>"




            });

        //console.log(item);

    });

}

