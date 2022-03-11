var elList = document.querySelector("#list");


for (const item of pokemons) {
    var newItem = document.createElement("LI");
    newItem.setAttribute("class", "d-flex flex-column align-items-center col-3 mb-5")


    var newDiv = document.createElement("DIV");
    newDiv.setAttribute("class", "bg-white align-content-center py-3 px-5 rounded-3 shadow")


    var newImg = document.createElement("IMG");
    newImg.setAttribute("class", "d-block");
    newImg.setAttribute("src", item.img);
    newImg.setAttribute("alt", "image");
    newImg.setAttribute("width", "200");
    newImg.setAttribute("height", "200");

    var newH3 = document.createElement("H3");
    newH3.setAttribute("class", "mb-5");
    newH3.textContent = item.name;

    var newH4 = document.createElement("H4");
    newH4.setAttribute("class", "h6");
    newH4.textContent = item.type;

    var newP1 = document.createElement("P");
    newP1.classList.add("h6");
    newP1.textContent = item.weight;
   

    var newP2 = document.createElement("P");
    newP2.classList.add("h6");
    newP2.textContent = item.height;
  

    newDiv.appendChild(newImg);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newH4);
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);

    newItem.appendChild(newDiv)
    elList.appendChild(newItem)

}