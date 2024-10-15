import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {

    const cardData = Data.map(obj => {
        return <Card
            key={obj.id}
            img={obj.coverImg}
            rating={obj.stats.rating}
            reviewCount={obj.stats.reviewCount}
            location={obj.location}
            title={obj.title}
            price={obj.price}
        />
    });

    // <Hero />
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cardData}
            </section>
        </div>
    )
}