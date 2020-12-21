document.addEventListener("DOMContentLoaded", () => {
    const random = getRandomInt(1, 489)
    fetchData(random)
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        pintarCard(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCard = (pokemon) => {
    console.log(pokemon)

    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.sprites.front_default)
    clone.querySelector('.card-body-title').innerHTML = pokemon.name
    clone.querySelector('.card-body-text').textContent = pokemon.game_indices[6].game_index
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.stats[1].base_stat
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.stats[2].base_stat
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.stats[3].base_stat
    fragment.appendChild(clone)
    flex.appendChild(fragment)

}