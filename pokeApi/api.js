let getAllPokemons = async () => {
    let pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon");

    pokemonData = await pokemonData.json();

    return pokemonData;
}

let getPokemonById = async (id) => {
    /* return pokemon */

    let pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

    pokemonData = await pokemonData.json();

    return pokemonData;
}

let getPokemonSpecies = async (url) => {
    let speciesData = await fetch(url);

    return await speciesData.json();
}


let getPokemonsAbility = async (abilityName) => {
    let pokemonData = await fetch ("https://pokeapi.co/api/v2/ability/" + abilityName);

    pokemonData = await pokemonData.json();

    return pokemonData;
};

let getPokemonType = async (abilityName) => {
    let pokemonData = await fetch ("https://pokeapi.co/api/v2/type/" + abilityName);

    pokemonData = await pokemonData.json();

    return pokemonData;
};

export {getAllPokemons, getPokemonById, getPokemonSpecies, getPokemonsAbility, getPokemonType}