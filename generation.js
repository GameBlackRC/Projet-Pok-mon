function ListeGen() {

    fetch('https://tyradex.tech/api/v1/gen')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            json.forEach(function (item) {

                type = item["generation"];
                console.log(type);
                document.getElementById("Gen").innerHTML += "<p class='boutton' onclick='" + 'CategoryGen(' + item["generation"] + ")'>" + item["generation"]+"</p > "
            });

        });

}
ListeGen()

function CategoryGen(num) {
    document.getElementById("ListeGen").innerHTML = "";
    fetch('https://tyradex.tech/api/v1/gen/'+num)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            json.forEach(function (item) {

                type = item["category"];
                console.log(type);
                document.getElementById("ListeGen").innerHTML += item["name"]["fr"]+ "<br>"


            });
        })
}
        

