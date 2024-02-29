import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
  <div className="container">
    <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
      <div className="featured-item__content">
        <h3>Novinky jsou nyní na skladě!</h3>
        <a href="#" className="btn btn--rounded">Zobrazit kolekci</a>
      </div>
    </article>
    
    <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
      <div className="featured-item__content">
        <h3>Klasická trička za 199,- Kč</h3>
        <a href="#" className="btn btn--rounded">Více informací</a>
      </div>
    </article>
    
    <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
      <div className="featured-item__content">
        <h3>Slevy toto léto</h3>
        <a href="#" className="btn btn--rounded">ZOBRAZIT VŠE</a>
      </div>
    </article>
  </div>
</section>

<section className="section">
  <div className="container">
    <header className="section__intro">
      <h4>Proč si vybrat nás?</h4>
    </header>

    <ul className="shop-data-items">
      <li>
        <i className="icon-shipping"></i>
        <div className="data-item__content">
          <h4>Doprava zdarma</h4>
          <p>Všechny nákupy nad 2000,- Kč jsou způsobilé pro dopravu zdarma prostřednictvím DPD Parcel.</p>
        </div>
      </li>
      
      <li>
        <i className="icon-payment"></i>
        <div className="data-item__content">
          <h4>Jednoduché platby</h4>
          <p>Všechny platby jsou zpracovány okamžitě přes bezpečný platební protokol.</p>
        </div>
      </li>
      
      <li>
        <i className="icon-cash"></i>
        <div className="data-item__content">
          <h4>Záruka vrácení peněz</h4>
          <p>Pokud dorazila položka poškozená nebo jste si to rozmysleli, můžete ji vrátit a získat plnou náhradu.</p>
        </div>
      </li>
      
      <li>
        <i className="icon-materials"></i>
        <div className="data-item__content">
          <h4>Nejlepší kvalita</h4>
          <p>Navrženo tak, aby vydrželo, každý náš produkt byl vyroben z nejlepších materiálů.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage