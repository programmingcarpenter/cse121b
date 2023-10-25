/* Declare and initialize global variables */
const pokemonElement = document.getElementById('pokemon');
var Pokemon = {};

/* async displayPokemon Function */
function displayPokemon(pokemon) {
    clear();

    document.querySelector('#pageTitle').innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    let img = document.createElement('img');
    img.setAttribute('src', pokemon.sprites.front_default);
    pokemonElement.appendChild(img);

    let abilityHeader = document.createElement('h2');
    abilityHeader.textContent = 'Abilities';
    pokemonElement.appendChild(abilityHeader);

    pokemon.abilities.forEach(ability =>  {
        let abilityNode = document.createElement('p');
        abilityNode.textContent = ability.ability.name;
        pokemonElement.appendChild(abilityNode);
    });

    let moveHeader = document.createElement('h2');
    moveHeader.textContent = 'Moves';
    pokemonElement.appendChild(moveHeader);

    pokemon.moves.forEach(move =>  {
        let moveNode = document.createElement('p');
        moveNode.textContent = move.move.name;
        pokemonElement.appendChild(moveNode);
    });


};


/* async getPokemon Function using fetch()*/
async function getPokemon() {
    let name = document.querySelector('#searchInput').value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    Pokemon = await response.json();
    displayPokemon(Pokemon);
};

document.querySelector('#searchButton').addEventListener('click', getPokemon);

document.querySelector('#clearButton').addEventListener('click', clear);

document.querySelector('#sortButton').addEventListener('click', sortPokemon);

/* Clear Function*/
function clear() {
    pokemonElement.innerHTML = '';
    document.querySelector('#searchInput').value = '';
    document.querySelector('#pageTitle').innerHTML = 'Pokedex'
};

function sortPokemon() {
    let sortedMoves = Pokemon.moves.sort((a, b) => {
        if (a.move.name < b.move.name) return -1;
        else if (a.move.name > b.move.name) return 1;
        else return 0;
    });
    Pokemon.moves = sortedMoves
    displayPokemon(Pokemon)
};