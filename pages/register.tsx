import Layout from '../layouts/Main';
import Link from 'next/link';

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a><i className="icon-left"></i> Zpět do e-shopu</a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">Vytvořte si účet a objevte benefity registrace</h2>
          <p className="form-block__description">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          
          <form className="form">
            <div className="form__input-row">
              <input className="form__input" placeholder="Jméno" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="Příjmení" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="E-mail" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" type="Password" placeholder="Heslo" />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>Souhlasím s obchodními podmínkami</p>
                </label>
              </div>
            </div>

            <button type="button" className="btn btn--rounded btn--yellow btn-submit">Registrovat</button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Jste už naším zákazníkem?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
  
export default RegisterPage
  