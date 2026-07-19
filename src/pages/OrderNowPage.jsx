import shawarmaHero from '../assets/kts-shawarma-hero.png'

function OrderNowPage() {
  return <main className="order-page" style={{ '--order-image': `url(${shawarmaHero})` }}>
    <div className="order-page__overlay" />
    <section className="order-page__content">
      <p className="eyebrow">KT'S SHAWARMA &amp; GRILL</p>
      <h1>Enjoy KT's Shawarma<br />At Your Place.</h1>
      <p className="order-page__intro">Craving juicy, flavourful shawarma from the comfort of home? Order now for delivery or takeaway.</p>
      <div className="order-page__choices">
        <article><strong className="delivery-brand swiggy">Swiggy</strong><a href="https://www.swiggy.com/search?query=KT%27s%20Shawarma%20%26%20Grill" target="_blank" rel="noreferrer">Order on Swiggy <span>&rarr;</span></a></article>
        <article><strong className="delivery-brand zomato">zomato</strong><a href="https://www.zomato.com/" target="_blank" rel="noreferrer">Order on Zomato <span>&rarr;</span></a></article>
      </div>
      <a className="order-page__call" href="tel:+918977263080">Prefer to call? +91 89772 63080</a>
    </section>
  </main>
}

export default OrderNowPage
