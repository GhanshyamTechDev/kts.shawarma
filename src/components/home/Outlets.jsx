import { outlets } from '../../data/siteData'

function Outlets() {
  const mapUrl = 'https://maps.app.goo.gl/3jggny7TkfsFKSB59'
  return <section className="outlets" id="outlets"><article><p className="eyebrow">VISIT US TODAY</p><h2>Our <em>Location.</em></h2><p>Drop in for premium shawarma, fresh flavours and service made for your cravings.</p></article><div>{outlets.map(([name, phone], index) => <a key={name} href={mapUrl} target="_blank" rel="noreferrer"><small>{String(index + 1).padStart(2, '0')}</small><span>KT's <b>{name}</b><em>{phone}</em></span><strong>&nearr;</strong></a>)}<div className="location-map"><iframe title="KT's Shawarma & Grill location" src="https://www.google.com/maps?q=Gajjalaramaram%20Road&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps &nearr;</a></div></div></section>
}

export default Outlets
