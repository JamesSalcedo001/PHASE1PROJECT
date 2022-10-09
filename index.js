const pokeBox = document.getElementById("pokeBox")

document.addEventListener("DOMContentLoaded", pokeLoop)


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
        pokeBox.replaceChildren();
        let pokeNum = 50
        for(let i = 26; i < pokeNum; i++) {
          catchPokemon(i)
        }
        break; 
        default:
          return;
      }
      e.preventDefault();
    }, true);
  }
}
// pokeLoop();


function catchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(resp => resp.json())
  .then(pokemon => renderPokemon(pokemon))
}




function renderPokemon(pokemon) {
  const pCard = document.createElement("div")
  const name = document.createElement("h2")
  const img = document.createElement("img")
  const type1 = document.createElement("h5")

  pCard.className = "pCard"
  type1.innerText = pokemon.types["0"].type.name
  type1.className = "type1"
  type1.textContent = pokemon.types["0"].type.name.toUpperCase();
  name.textContent = pokemon.name.toUpperCase();

  img.src = pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]["front_default"];
  img.className = "pokeImg"

  pCard.append(name, img, type1)
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





"added more css effects to dark mode button with a hover effect moving the button when it's hovered over. added css to title, J.S. POKEDEX, similar hover effect but different color. added some more css to cards to make them move when hovered over, and changed the images to a different type, as well as added another attribute (pokemon type). managed to get the javascript keydown event handler to loop through another set of 25 items, as well as remove the previous ones from the page, however it still has some issues where the cards don't display evenly and it won't retrieve an additional 25 pokemon it just keeps it at the second set. "





// THIS WORKS TO ADD NEW POKEMON TO THE PAGE HOWEVER IT IS BUGGY

// function pokeLoop() {
//   let pokeNum = 25;
//   for(let i = 1; i < pokeNum; i++) {
    
//     catchPokemon(i)
//     document.addEventListener("keydown", (e) => {
//       if (e.defaultPrevented) {
//         return;
//       }
//       switch (e.key) {
//         case "Enter": catchPokemon(i=i+25);
//         pokeBox.replaceChildren();
//         let pokeNum = 50
//         for(let i = 26; i < pokeNum; i++) {
//           catchPokemon(i)
//         }
//         break; 
//         default:
//           return;
//       }
//       e.preventDefault();
//     }, true);
//   }
// }
