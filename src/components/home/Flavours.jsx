import { flavourCards, mediaUrl } from '../../data/siteData'

function Flavours() {
  return <section className="flavours" id="flavours"><p className="eyebrow">MAGIC SERVED DAILY</p><h2>Flavours <em>enchanted.</em> <i>&#10022;</i></h2><div className="cards">{flavourCards.map(([image, title, subtitle, copy], index) => <article key={title}><img src={`${mediaUrl}${image}`} alt="" /><div><span>0{index + 1}</span><h3>{title}<br />{subtitle}</h3><p>{copy}</p></div></article>)}</div></section>
}

export default Flavours
