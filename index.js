const pokeBox = document.getElementById("pokeBox")

const pokeNum = 25;



function pokeLoop() {
  for(let i = 1; i < pokeNum; i++) {
    catchPokemon(i)
  }
}

function catchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(resp => resp.json())
  .then(pokemon => renderPokemon(pokemon))
}


pokeLoop();

function renderPokemon(pokemon) {
  const pCard = document.createElement("div")
  const name = document.createElement("h2")
  const img = document.createElement("img")

  pCard.className = "pCard"

  name.textContent = pokemon.name.toUpperCase();

  img.src = pokemon.sprites.front_default
  img.className = "pokeImg"

  pCard.append(name, img)
  pokeBox.append(pCard)

}


function darkMode() {
  let elem = document.body;
  elem.classList.toggle("darkTheme");
}

let darkButton = document.getElementById("darkMode")

darkButton.addEventListener("click", darkMode)