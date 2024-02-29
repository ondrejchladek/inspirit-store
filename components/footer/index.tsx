import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>E</span>-Shop</h6>
            <p>Navrhujeme oblečení pro mladé, starší a všechny mezi tím – ale nejdůležitější je, že pro ty, kteří mají smysl pro módu.</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Nakupování online</li>
              <li><a href="#">Stav objednávky</a></li>
              <li><a href="#">Doprava a doručení</a></li>
              <li><a href="#">Vrácení zboží</a></li>
              <li><a href="#">Možnosti platby</a></li>
              <li><a href="#">Kontaktujte nás</a></li>
            </ul>
            <ul>
              <li>Informace</li>
              <li><a href="#">Dárkové karty</a></li>
              <li><a href="#">Najít prodejnu</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Staňte se členem</a></li>
              <li><a href="#">Zpětná vazba k webu</a></li>
            </ul>
            <ul>
              <li>Kontakt</li>
              <li><a href="#">obchod@obchod.cz</a></li>
              <li><a href="#">Tel.: +420 123 456 789</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY INSPIRIT - © 2024. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer