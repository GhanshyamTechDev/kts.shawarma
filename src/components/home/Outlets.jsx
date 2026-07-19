import { outlets } from '../../data/siteData'

function Outlets() {
  return <section className="outlets" id="outlets"><article><p className="eyebrow">FIND THE MAGIC NEAR YOU</p><h2>Our <em>Outlets.</em></h2><p>From Bengaluru to Chennai and beyond, your next shawarma adventure is close by.</p></article><div>{outlets.map(([name, phone], index) => <a key={name} href={`tel:${phone.replaceAll(' ', '')}`}><small>{String(index + 1).padStart(2, '0')}</small><span>Aladdin <b>{name}</b><em>{phone}</em></span><strong>&nearr;</strong></a>)}</div></section>
}

export default Outlets
