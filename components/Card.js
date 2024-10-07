import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <section className="cards">
      <div className="card">
        <div className="card--soldout">SOLD OUT</div>
        <img src="../images/katie-zaferes.png" className="card--photo" />
        <div className="card--rating">
          <img src="../images/star.png" className="card--rating-star" />
          <span>5.0</span>
          <span className="card--rating-label">(6) &#x2022; </span>
          <span>USA</span>
        </div>
        <p className="card--text">Life lessons with Katie Zaferes</p>
        <p className="card--text"><a className="card--amount">From $136</a> / person </p>
      </div>
    </section>
  )
}