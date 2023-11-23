function showListTitle() {

    document.getElementById("demo").innerHTML = "<h1>Liste des pokémon :</h1>";

    tableau.forEach(function (item) {

        fetch('https://tyradex.vercel.app/api/v1/pokemon' + item['userId'])
            .then((response) => response.json())
            .then((json) => {

                document.getElementById("demo").innerHTML += "<div class='titre_liste' onclick='clickTitre(" + item["id"] + ")'><h2>" + item["title"] + "</h2><p>Créateur / Créatrice : " + json['name'] + "</p></div><br>";

            });

        //console.log(item);
    
    });

}