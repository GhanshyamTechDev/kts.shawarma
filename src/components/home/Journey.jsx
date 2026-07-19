import { mediaUrl } from '../../data/siteData'

function Journey() {
  return <><div className="ticker">MAGIC SERVED &#10022; MAGIC SERVED &#10022; MAGIC SERVED &#10022; MAGIC SERVED &#10022;</div><section className="journey"><div><img src={`${mediaUrl}Items-1-png.webp`} alt="Shawarma ingredients" /></div><article><p className="eyebrow">OUR STORY</p><h2>Our Magical Journey:<br /><em>The Legend of Aladdin Shawarma</em></h2><p>From a single spark of inspiration grew a place for people who believe food should feel extraordinary. We honour old-world recipes while creating a delicious ritual for every guest.</p><a className="purple-button" href="#partner">Be our partner &rarr;</a></article></section></>
}

export default Journey
