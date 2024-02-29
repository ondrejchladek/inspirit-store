import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Výprodej letní kolekce</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Nakupovat nyní</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Proměňte váš dům v domov</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Nakupovat nyní</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Doprava zdarma</h4>
                <p>Při nákupu nad 2000,- Kč</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% spokojených zákazníků</h4>
                <p>Názory našich klientů mluví samy za sebe</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Záruka originality</h4>
                <p>30 dní záruka pro každý produkt z našeho obchodu</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

  )
};

export default PageIntro