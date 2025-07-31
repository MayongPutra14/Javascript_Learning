// API Pokemon
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const URLpokemon =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const container = document.getElementById("container");
const limit = 100;
const pokemonBall = document.createElement("div");
pokemonBall.classList.add("pokemon");

function generatePokemon() {
    container.innerHTML = ""
  for (let i = 1; i <= 10; i++) {
    const ranPokemon = Math.floor(Math.random() * limit) + 1;
    const img = document.createElement("img");

    const label = document.createElement("span");
    label.innerText = ranPokemon;
    img.src = URLpokemon + ranPokemon + ".png";
    pokemonBall.appendChild(img);
    pokemonBall.appendChild(label);
    container.append(pokemonBall);
  }
}
