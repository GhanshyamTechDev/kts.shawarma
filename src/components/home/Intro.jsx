import { mediaUrl, promises } from '../../data/siteData'

function Intro() {
  return <>
    <section className="promise">{promises.map(([image, title, subtitle]) => <article key={title}><img src={`${mediaUrl}${image}`} alt="" /><h3>{title}<br />{subtitle}</h3></article>)}</section>
    <section className="intro" id="story"><div className="genie"><img src="https://aladdinshawarma.in/wp-content/uploads/2024/12/cartoon-jinnee-illustration-png.webp" alt="Aladdin genie illustration" /></div><div><p className="eyebrow">WELCOME TO</p><h2>Aladdin Shawarma,<br />where <em>flavours</em><br />and magic collide.</h2><p>Enter a world where every bite tells a story. Our kitchen brings the rich legacy of Middle Eastern and Turkish cuisine to life, with a little magic in every wrap.</p><a className="underline" href="#flavours">Discover our story &rarr;</a></div></section>
  </>
}

export default Intro
