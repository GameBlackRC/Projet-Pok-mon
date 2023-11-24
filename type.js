
tableau = [];

$(document).ready(function () {
    fetch('https://tyradex.vercel.app/api/v1/pokemon')
        .then((response) => response.json())
        .then((json) => {

            tableau = json;
          tableau.shift()

        });

});

function CategoryType(type) {
    document.getElementById("ListeType").innerHTML = "";
    console.log("ok " + type);
    console.log(tableau);
  
let Liste = tableau.filter((poke)=>poke["types"][0]["name"]==type || (poke["types"].lenght && poke["types"][1]["name"]==type));
Liste.forEach (function (item) { 
    console.log(item)
    document.getElementById("ListeType").innerHTML += "<div class='feu'><p>" + item["name"]["fr"] + "</p>"});
   
}        
        
function TypeFiche () {
      
    fetch('https://tyradex.tech/api/v1/types')
        .then((response) => response.json())
        .then((json) => { console.log(json)

            json.forEach(function (item) {

                type = item["name"]["fr"];
                console.log(type);
                document.getElementById("type").innerHTML += "<img src='"+item ["sprites"]+"' class='titre_liste' onclick=" + '"CategoryType(' + "'" + item["name"]["fr"] + "'" + ')"/>';
               

            });

        });

}
TypeFiche()
