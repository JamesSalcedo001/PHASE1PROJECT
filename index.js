const pokeBox = document.getElementById("pokeBox")

// document.addEventListener("DOMContentLoaded", pokeLoop);



function pokeLoop() {
  let pokeNum = 25;
  for(let i = 1; i < pokeNum; i++) {
    catchPokemon(i)
    document.addEventListener("keydown", (e) => {
      if (e.defaultPrevented) {
        return;
      }
      switch (e.key) {
        case "Enter": catchPokemon(i=i+25);
        replaceChildren();
        break; 
        default:
          return;
      }
      e.preventDefault();
    }, true);
  }
}

pokeLoop()

function catchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(resp => resp.json())
  .then(pokemon => renderPokemon(pokemon))
}




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

  if (darkButton.textContent === "DAZZLING GLEAM") {
    darkButton.textContent = "DARK PULSE"
  } else {
    darkButton.innerText = "DAZZLING GLEAM"
  }
}

let darkButton = document.getElementById("darkMode")

darkButton.addEventListener("click", darkMode)


// document.addEventListener("keydown", (e) => {
//   if (e.defaultPrevented) {
//     return;
//   }
//   switch (e.key) {
//     case "Enter": ;
//     break; 
//     default:
//       return;
//   }
//   e.preventDefault();
// }, true);