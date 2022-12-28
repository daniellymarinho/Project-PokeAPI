
function render(array){
    const list = document.querySelector("ul")
    list.innerHTML = ''

    array.forEach(Element => {
        const card = createCard(Element)
        list.appendChild(card)
    })

}

function createCard(pokemon){
    const li = document.createElement("li")
    const div = document.createElement("div")
    const img = document.createElement("img")
    const nome = document.createElement("span")

    const numeroNaPokedex = pokemon.url.slice(34, -1) // https://pokeapi.co/api/v2/pokemon/${payload.id}/
      
    const name = pokemon.name[0].toUpperCase() + pokemon.name.substr(1)

    img.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png`;
    nome.innerText = name

    li.classList.add("pokemons")
    div.classList.add("pokemon")
    img.classList.add("image-pokemon")
    nome.classList.add("name-pokemon")
    
    div.append(img, nome)
    li.appendChild(div)

    return li
}