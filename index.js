import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))






/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const pokewrapped = pokemon.map((pokemon) => {
    return `<p>${pokemon}</p>`
})
//should return an array of strings
console.log(pokewrapped);