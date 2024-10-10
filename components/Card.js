import React from "react"

export default function Card(props) {
  return (
    <section className="cards">
      <div className="card">
        <div className="card--soldout" style={{ display: props.soldout ? "block" : "none" }}>SOLD OUT</div>
        <img src={`../images/${props.img}`} className="card--photo" />
        <div className="card--rating">
          <img src="../images/star.png" className="card--rating-star" />
          <span>{props.rating.toFixed(1)}</span>
          <span className="card--rating-label">{props.ratingLabel} &#x2022; </span>
          <span>{props.country}</span>
        </div>
        <p className="card--text">{props.text}</p>
        <p className="card--text"><a className="card--amount">From ${props.rate}</a> / person </p>
      </div>
    </section>
  )
}