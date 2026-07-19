import { useEffect, useState } from 'react'
import shawarmaImage from '../../assets/kts-shawarma-hero.png'
import friesImage from '../../assets/kts-peri-peri-fries.png'
import feastImage from '../../assets/kts-story-menu.png'

const shawarmas = [
  ['Chicken Shawarma with Salad', '₹120'], ['Spl. Chicken Shawarma', '₹130'],
  ['Peri-Peri Shawarma', '₹130'], ['Honey Mustard Shawarma', '₹135'],
  ['Chipotle Shawarma', '₹145'], ['Tandoori Shawarma', '₹150'],
  ['Onion Rings Shawarma', '₹175'], ['Jumbo Shawarma', '₹220'],
]

const fries = [['Salted French Fries', '₹99'], ['Peri-Peri French Fries', '₹110']]

const featuredSlides = [
  [shawarmaImage, 'Signature Shawarma', 'Freshly grilled chicken, crisp salad and creamy sauce in every wrap.'],
  [friesImage, 'Peri-Peri Fries', 'Crispy golden fries dusted with our bold peri-peri seasoning.'],
  [feastImage, "KT's Feast", 'Your favourites, made fresh and ready to enjoy together.'],
]

function MenuList({ items }) {
  return <ol className="menu-list">{items.map(([name, price]) => <li key={name}><span>{name}</span><i /><strong>{price}</strong></li>)}</ol>
}

function Flavours() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide(current => (current + 1) % featuredSlides.length), 4500)
    return () => window.clearInterval(timer)
  }, [])

  const [image, title, copy] = featuredSlides[activeSlide]

  return <section className="flavours menu-section" id="flavours">
    <div className="menu-heading"><p className="eyebrow">FRESHLY GRILLED · STEAMED PERFECTION · CRISPY MOMENTS</p><h2>Our <em>Menu.</em></h2><p>Made fresh, grilled to perfection and packed with flavour.</p></div>
    <div className="menu-grid">
      <article className="menu-panel"><div className="menu-panel__image"><img src={shawarmaImage} alt="Grilled chicken shawarma" /></div><div className="menu-panel__body"><p className="menu-label">SHAWARMA</p><MenuList items={shawarmas} /></div></article>
      <article className="menu-panel menu-panel--fries"><div className="menu-panel__image"><img src={friesImage} alt="Crispy peri-peri French fries" /></div><div className="menu-panel__body"><p className="menu-label">FRENCH FRIES</p><MenuList items={fries} /><a className="menu-order" href="/order-now">Order now <span>&rarr;</span></a></div></article>
    </div>
    <section className="featured-slider" aria-label="Featured menu items">
      <div className="featured-slider__image"><img key={image} src={image} alt={title} /></div>
      <div className="featured-slider__content"><p className="eyebrow">FEATURED FAVOURITES</p><span>0{activeSlide + 1} / 0{featuredSlides.length}</span><h3>{title}</h3><p>{copy}</p><a href="/order-now">Order this favourite <b>&rarr;</b></a><div className="featured-slider__dots">{featuredSlides.map(([, slideTitle], index) => <button key={slideTitle} className={index === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(index)} aria-label={`Show ${slideTitle}`} />)}</div></div>
    </section>
  </section>
}

export default Flavours
