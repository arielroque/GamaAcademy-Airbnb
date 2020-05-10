let url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

let xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);

xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {

        let data = JSON.parse(xhttp.responseText);

        for (let i = 0; i < data.length; i++) {

            console.log(data[i]);

            let card = document.createElement("div");
            card.innerHTML = " <div class=\"card\" style=\"width: 18rem;\">\n" +
                "                <img class=\"card-img-top\" src=" + data[i].photo + " alt=\"Card image cap\">\n" +
                "                <div class=\"card-body\">\n" +
                "<h6 class=\"card-subtitle mb-2 text-muted\">"+data[i].property_type+"</h6>" +
                "                <p class=\"card-text\">" + data[i].name + "</p>\n" +
                "<span class=\"badge badge-price\">" +"R$ "+ data[i].price + " / noite"+ "</span>"+
                "            </div>\n" +
                "            </div>"
            document.getElementById("places").appendChild(card);
        }
    }
}

//Continues if the server no yet answer
xhttp.send();
