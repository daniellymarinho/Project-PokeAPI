async function consumindoPokeAPI() {
    const loading = document.querySelector("#loading")
    const pokemonsAPI = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(Response => Response.json())
        .then(Response => {
            render(Response.results)

            return Response

        })
        .catch(error => console.log(error))
    loading.classList.add("hidden")

    return pokemonsAPI

}

async function getPokemonByName(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    const response = await fetch(url)
    const payload = await response.json()
    render([{ ...payload, url: `https://pokeapi.co/api/v2/pokemon/${payload.id}/` }])
}

function renderizaSearch() {
    const input = document.querySelector("input")
    const button = document.querySelector("#button-search")

    button.addEventListener("click", () => {
        getPokemonByName(input.value.toLowerCase().trim())
    })
    input.addEventListener('change', ()=>{
        if (input.value === '')
        {consumindoPokeAPI()}
    })
}

renderizaSearch()
consumindoPokeAPI()
