import star from "./assets/star.svg";

export default function Card({item}) {
  const img=`./${item.coverImg}`
  let badgeText
  if (item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (item.location === "Online") {
      badgeText = "ONLINE"
  } else {
    badgeText = null
  }

  return (
    <div className="card">
      <div className="my-card">
        <img src={img} alt="Card Image" className="card-image"/>
        {badgeText != null && <div className="card-status">{badgeText}</div>}
      </div>
      <div className="card-box">
        <div className="card-rating">
          <img src={ star } alt=" Star Badge" className="card-star" />  
          {item.stats.rating} ({item.stats.reviewCount}) • {item.location}
        </div>
        <div className="card-info">{item.title}</div>
        <div className="card-pricing">From ${item.price}  
          <span className="card-pricing-span"> / person</span>
        </div>
      </div>
    </div>
  )
}