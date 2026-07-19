import { mediaUrl } from '../../data/siteData'

function Hero() {
  return <section id="top" className="hero">
    <video autoPlay muted loop playsInline preload="metadata"><source src={`${mediaUrl}Aladdin03.mp4`} type="video/mp4" /></video>
    <div className="hero-overlay" />
    <h1>Craving Something Epic?<br />Your Favourite Shawarma<br />Destination!</h1>
    <div className="scroll-ring">SCROLL DOWN &middot; SCROLL DOWN &middot; &darr;</div>
  </section>
}

export default Hero
