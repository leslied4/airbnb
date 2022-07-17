import airBnbLogo from "./assets/airbnb.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={ airBnbLogo } alt="React Logo" className="small-logo"/>
    </div>
  )
}