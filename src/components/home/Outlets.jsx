import { outlets } from '../../data/siteData'

function Outlets() {
  return <section className="outlets" id="outlets"><article><p className="eyebrow">VISIT US TODAY</p><h2>Our <em>Location.</em></h2><p>Drop in for premium shawarma, fresh flavours and service made for your cravings.</p></article><div>{outlets.map(([name, phone], index) => <a key={name} href={`tel:${phone.replaceAll(' ', '')}`}><small>{String(index + 1).padStart(2, '0')}</small><span>KT's <b>{name}</b><em>{phone}</em></span><strong>&nearr;</strong></a>)}</div></section>
}

export default Outlets
