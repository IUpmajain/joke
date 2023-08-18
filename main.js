let button = document.querySelector('button')
let tag = document.querySelector('h5')
let quote = document.querySelector('p')
let authr = document.querySelector('h6')
let container = document.querySelector('.container-fluid')
let card = document.querySelector('.card')


const getquote = (async (e)=>{
    e.preventDefault();
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319")
    const data = await res.json()
    console.log(data)
    container.style.backgroundImage = `url("https://source.unsplash.com/random/?${data.category})`
    container.style.backgoundPosition = `center`
    container.style.backgroundSize = 'cover'

    card.style.backgroundImage = `url("https://source.unsplash.com/random/?${data.joke})`
    card.style.backgoundPosition = `center`
    card.style.backgroundSize = 'cover'
    tag.innerText = data.category
    quote.innerText = `"${data.joke}"`
})
button.addEventListener('click', getquote)