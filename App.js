import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                soldout={true}
                img="katie-zaferes.png"
                rating={5.0}
                ratingLabel="(6)"
                country="USA"
                text="Life lessons with Katie Zaferes"
                rate={136}
            />
        </div>
    )
}