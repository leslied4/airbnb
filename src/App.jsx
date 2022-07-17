import "./App.css"
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Card from "./Card";
import cardData from "./data"

export default function App() {
  const cardElements = cardData.map(function (cardElement) {
    return (
      <Card 
        key={cardElement.id}
        item={cardElement}
      />

    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
      {/* <Footer /> */}
    </>
  )
}