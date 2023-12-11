let pokeButton = document.getElementById("pokeBtn")
let image = document.getElementById("img")
let pokeNumber = document.getElementById("number")
let pokeName = document.getElementById("name")
let inputPokeName = document.getElementById("inputName")
let inputButton = document.getElementById("inputBtn")

const devinePokemon = (name) => {
    pokeName.textContent = "Nig"
    name = "Nig"
    if(inputPokeName == name){
        console.log("true")
        return true
    }else{
        console.log("false")
        return false
    }
}

const changePokemon = async() => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; //nombre aleatoire entre 1 et 151

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
    console.log(requestString) //route vers un pokemon avec l'id généré aleatoirement

    let data = await fetch(requestString) //appelle de la requete vers la route requestString
    console.log(data)

    let response = await data.json() //conversion des données recup en json pour les lires
    console.log(response)

    image.src = response.sprites.front_default // recup l'image dans la requete
    pokeName.textContent = response.name // recup name
    console.log(typeof(response.name))
    stringPokeName = response.name
    pokeNumber.textContent = `#${response.id}` //recup l'id sous cette forme #1
}
changePokemon()
devinePokemon(pokeName.textContent)
pokeButton.addEventListener("click", changePokemon)
//inputButton.addEventListener("click",devinePokemon(pokeName.textContent))