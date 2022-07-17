import groupPhoto from "./assets/group-photo-1.png";

export default function Hero(params) {
    return (
        <div className="hero">
            <img src={ groupPhoto } alt="Group Photo" className="group-photo" />
            <div className="hero-title">
                Online Experiences
            </div>
            <div className="hero-subtitle">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </div>
        </div>
    )
}