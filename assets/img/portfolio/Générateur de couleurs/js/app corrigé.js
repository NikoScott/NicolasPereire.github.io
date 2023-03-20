(function(){ // IIFE

    const opacity = document.getElementById("opacity");
    // a rendre toutes les variables à l'intérieur locales
    let container = document.querySelector(".container"); // locale

    // rectangles
    for(let i = 1; i <= 16; i++) {
        let color = document.createElement("div");
        color.classList.add("color");
        container.append(color);
        color.addEventListener("click", function(){
            handleColorSelected(this); // je récupère le html de la couleur sur laquelle j'ai cliqué et je le passe en paramètre de handleColorSelected()
        });
    }

    // result
    let resultElem = document.createElement("div");
    resultElem.classList.add("result");
    container.append(resultElem);

    // Button
    let button = document.createElement("button");
    button.setAttribute("id", "search");
    button.innerHTML = "Changer les couleurs";
    container.append(button);

    const colors = document.querySelectorAll(".color");
    const result = document.querySelector(".result");

    function changeColors() {

        for(let i = 0; i<16; i++) {

            let colorR = Math.floor(Math.random() * 256);
            let colorG = Math.floor(Math.random() * 256);
            let colorB = Math.floor(Math.random() * 256);

            colors[i].style.background = `rgb(${colorR},${colorG},${colorB})`; // backticks litteraux de gabarits
            colors[i].innerHTML = `${colorR},${colorG},${colorB}`;
        }

        // réinitialiser le result
        // et les bordures quand une palette de couleur est chargée
        resultElem.innerHTML = "";
        [].forEach.call(colors, function(color) {
            color.classList.remove("border");
        });

    }

    changeColors();

    button.addEventListener("click", changeColors);

    function handleColorSelected(elemHTML) {

        let inputValue = opacity.value / 10;

        // enlever toutes les bordures sur les autres couleurs
        [].forEach.call(colors, function(color) {
            color.classList.remove("border");
        });

        // j'ajoute une bordure rouge à l'élement cliqué
        elemHTML.classList.add("border");

        //  &nbsp fait un espace en HTML
        resultElem.innerHTML = `La couleur selectionée est le&nbsp;
        <span 
            style='color:rgb(${elemHTML.innerHTML});opacity:${inputValue}'> 
            rgba(${elemHTML.innerHTML},
        </span>
        <span 
            style='color:rgb(${elemHTML.innerHTML});opacity:${inputValue}'>
            ${inputValue})
        </span>
        `;

    }

    opacity.addEventListener("change", function() {

        let opacityValue =  opacity.value / 10;

        // modifier la valeurs de l'opacité de toutes mes couleurs
        [].forEach.call(colors, function(color) {
            color.style.opacity = opacityValue;
        });

        if(resultElem.innerHTML != "") {
            // mettre à jour l'opacité du span dans result
            // et sa valeur
            let spans = document.querySelectorAll(".result span");
            [].forEach.call(spans, function(span) {
                span.style.opacity = opacityValue;
            });

            spans[1].innerHTML = opacityValue + ")";

        }

        document.querySelector(".opacity label span").innerHTML = opacityValue;

    });

}());