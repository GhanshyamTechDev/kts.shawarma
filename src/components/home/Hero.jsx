import { mediaUrl } from '../../data/siteData'

function Hero() {
  return <section id="top" className="hero">
    <video autoPlay muted loop playsInline preload="metadata"><source src={`${mediaUrl}Aladdin03.mp4`} type="video/mp4" /></video>
    <div className="hero-overlay" />
    <h1>Craving Something Epic?<br />Your Favourite Shawarma<br />Destination!</h1>
    <a className="scroll-ring" href="#story" aria-label="Scroll to our story">
      <svg viewBox="0 0 180 180" aria-hidden="true"><defs><path id="scroll-ring-path" d="M90,90 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" /></defs><text><textPath href="#scroll-ring-path">SCROLL DOWN · SCROLL DOWN · SCROLL DOWN · </textPath></text></svg>
      <span>&darr;</span>
    </a>
  </section>
}

export default Hero
