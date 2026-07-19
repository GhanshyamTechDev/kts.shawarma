import { mediaUrl, promises } from '../../data/siteData'
import shawarmaHero from '../../assets/kts-shawarma-hero.png'

function Intro() {
  return <>
    <section className="promise">{promises.map(([image, title, subtitle]) => <article key={title}><img src={`${mediaUrl}${image}`} alt="" /><h3>{title}<br />{subtitle}</h3></article>)}</section>
    <section className="intro" id="story"><div className="genie"><img src={shawarmaHero} alt="Fresh grilled chicken shawarma" /></div><div><p className="eyebrow">WELCOME TO</p><h2>KT's Shawarma &amp; Grill,<br />where <em>flavour</em><br />comes first.</h2><p>Juicy, flavourful and unforgettable—our shawarmas are made with premium quality meat, fresh ingredients and the perfect grill.</p><a className="underline" href="#flavours">Explore our menu &rarr;</a></div></section>
  </>
}

export default Intro
