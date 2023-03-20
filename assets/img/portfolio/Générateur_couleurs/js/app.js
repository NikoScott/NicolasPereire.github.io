(function(){ // IIFE

// Modification du body
document.body.style.width = '80vw';
document.body.style.flexWrap = 'wrap';


/////////////////////////////////////
// COULEURS ALEATOIRE
/////////////////////////////////////

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = document.querySelector('input').value;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

let container = document.querySelector('.container');


/////////////////////////////////////
// CREER 16 BLOCKS DE COULEUR
/////////////////////////////////////

for (let i = 0; i < 16; i++) {
  let blockColor = document.createElement('div');
  blockColor.classList.add("color");

  blockColor.style.backgroundColor = getRandomColor();

  container.appendChild(blockColor); // Ajoute blockColor dans la div .container

  blockColor.addEventListener('click', function () {
    let color = getRandomColor();
    let a = opacity.value / 10;

    colorGenerate.innerHTML = `La couleur selectionée est le&nbsp;
    <span style='color:(${color})';opacity:${a}> rgba(${color},${a}) </span>`;
    blockColor.style.border = 'solid red';
  })

  input = document.getElementById('opacity');   ///// Change opacité
  opacity.addEventListener('input', function () {
    a = opacity.value / 10;
    document.querySelector('span').innerHTML = a;
 
  })

};



/////////////////////////////////////
// CASE QUI AFFICHE LE CODE COULEUR
/////////////////////////////////////

let colorGenerate = document.createElement('div');
colorGenerate.classList.add("result");

document.body.appendChild(colorGenerate); // intégrer dans le body


/////////////////////////////////////
// BOUTON QUI GENERE DES NOUVELLES COULEURS
/////////////////////////////////////

let buttonColor = document.createElement('button');

buttonColor.style.width = '100%';
buttonColor.style.height = '50px';
buttonColor.style.textAlign = 'center';
buttonColor.style.backgroundColor = 'blue';
buttonColor.style.color = 'white';

buttonColor.innerHTML = 'CHANGER LES COULEURS';
document.body.appendChild(buttonColor);

let blocs = document.querySelectorAll('.bloc');

buttonColor.addEventListener('click', function () {
  blocs.forEach(function (bloc) {
    bloc.style.backgroundColor = getRandomColor();
  })
});

}());