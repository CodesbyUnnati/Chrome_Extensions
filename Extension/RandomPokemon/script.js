const spinner=document.getElementById("spinner");
const api='https://pokeapi.co/api/v2/pokemon/';
const random=Math.floor(Math.random()*151)+1;

fetch(api+random)
    .then(data => data.json())
    .then(pokeData => {
        const pokemonElement=document.getElementById("pokemonElement");
        const pokemonNameElement=document.getElementById("pokemonName");
        const pokemonTypeElement=document.getElementById("pokemonType");
        const pokemonAbilityElement=document.getElementById("pokemonAbilities");
        const pokemonName=pokeData.species.name;
        const pokemonImage=pokeData.sprites.front_default;
        const pokemonType=pokeData.types[0].type.name;
        const pokemonAbility=pokeData.abilities[0].ability.name;
        pokemonElement.src=pokemonImage;
        pokemonNameElement.innerHTML=pokemonName;
        pokemonTypeElement.innerHTML=pokemonType;
        pokemonAbilityElement.innerHTML=pokemonAbility;

    })