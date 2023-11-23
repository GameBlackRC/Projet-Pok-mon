
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
    document.getElementById("ListeType").innerHTML = ""
  
let Liste= tableau.filter((poke)=>poke["types"]["name"]==type
)
Liste.forEach (function (item) { 
    console.log(item)
    document.getElementById("ListeType").innerHTML += "<div class='feu'><p>" + item["name"]["fr"] + "</p>"});
   
}        
        
function TypeFiche () {
      
    fetch('https://tyradex.tech/api/v1/types')
        .then((response) => response.json())
        .then((json) => { console.log(json)

            json.forEach(function (item) {

                document.getElementById("type").innerHTML += "<img src='"+item ["sprites"]+"' class='titre_liste' onclick='CategoryType(\""+item["name"]["fr"]+"\")'/>";
               

            });

        });

}
TypeFiche()