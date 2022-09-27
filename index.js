const pokemonNumber = 151;

let dexData = {};

let DOMLoad = document.addEventListener("DOMContentLoaded", (event) => {
  pokemonCatcher(1);
});

function pokemonCatcher(number) {
  let catcher = "https://pokeapi.co/api/v2/pokemon/" + number.toString();
  fetch(catcher)
  .then((res) => res.json())
  .then((data) => console.log(data))
}

pokemonCatcher();