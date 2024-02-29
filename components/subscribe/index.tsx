const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{ backgroundImage: 'url(/images/subscribe.jpg)' }} className="subscribe__content">
          <h4>Přihlaste se k odběru našeho newsletteru a každý týden obdržíte exkluzivní nabídky</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Emailová adresa" />
            <button type="submit" className="btn btn--rounded btn--yellow">Odebírat</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe