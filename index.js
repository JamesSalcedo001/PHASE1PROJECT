const pokeBox = document.getElementById("pokeBox")

document.addEventListener("DOMContentLoaded", catchPokemon)






function catchPokemon() {
  fetch("http://localhost:3000/pokemon")
  .then(resp => resp.json())
  .then(pokemon => pokemon.forEach(pokemon => renderPokemon(pokemon)))
}


function renderPokemon(pokemon) {
  const pCard = document.createElement("div")
  const name = document.createElement("h2")
  const img = document.createElement("img")
  const type1 = document.createElement("h5")
  const btn = document.createElement("button")
  const likeNum = document.createElement("h5")

  pCard.className = "pCard"
  type1.innerText = pokemon.types
  type1.className = "type1"
  type1.textContent = pokemon.type.toUpperCase();
  name.textContent = pokemon.name.toUpperCase();
  btn.textContent = "♥";
  btn.className = "btn"
  likeNum.textContent = pokemon.likeNum
  btn.addEventListener("mouseover", function() {
    ++likeNum.innerText;
  })


  img.src = pokemon.image
  img.className = "pokeImg"

  pCard.append(name, type1, btn, img, likeNum)
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













//OG CODE WITH API


// const pokeBox = document.getElementById("pokeBox")

// document.addEventListener("DOMContentLoaded", catchPokemon)



// let adder = 0



// function pokeLoop() {
//   let pokeNum = 25;
//   for(let i = 1; i < pokeNum; i++) {
    
//     catchPokemon(i)
//     document.addEventListener("keydown", (e) => {
//       if (e.defaultPrevented) {
//         return;
//       }
//       switch (e.key) {
//         case "Enter": catchPokemon(i=i+24);
//         pokeBox.replaceChildren();
//         let pokeNum = 50 + adder
//         for(let i = 27 + adder; i < pokeNum; i++) {
//           catchPokemon(i)
//         }
//         adder = adder + 24
//         break;
//         default:
//           return;
//       }
//       e.preventDefault();
//     }, true);
//   }
// }



// function catchPokemon(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   .then(resp => resp.json())
//   .then(pokemon => {
//     renderPokemon(pokemon)
//   })
//   .catch(error => alert(`Your Error is:  ${error}`))
// }


// function renderPokemon(pokemon) {
//   const pCard = document.createElement("div")
//   const name = document.createElement("h2")
//   const img = document.createElement("img")
//   const type1 = document.createElement("h5")
//   const btn = document.createElement("button")
//   const num = document.createElement("h5")

//   pCard.className = "pCard"
//   type1.innerText = pokemon.types["0"].type.name
//   type1.className = "type1"
//   type1.textContent = pokemon.types["0"].type.name.toUpperCase();
//   name.textContent = pokemon.name.toUpperCase();
//   btn.textContent = "♥";
//   btn.className = "btn"
//   num.textContent = "0"
//   btn.addEventListener("mouseover", function() {
//     ++num.innerText;
//   })


//   img.src = pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]["front_default"];
//   img.className = "pokeImg"

//   pCard.append(name, type1, btn, num)
//   pokeBox.append(pCard)

// }