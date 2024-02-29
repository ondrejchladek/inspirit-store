type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Detaily a popis produktu</h4>
        <p>Bílé tričko Summer Vibes v řadě uiKit s barevným potiskem. <br></br>Vyrobeno z bavlněného jersey. Tričko skvěle ladí s džíny, kalhotami nebo šortkami.</p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Detaily a popis produktu</h4>
        <p>Bílé tričko Summer Vibes v řadě uiKit s barevným potiskem. <br></br>Vyrobeno z bavlněného jersey. Tričko skvěle ladí s džíny, kalhotami nebo šortkami.</p>
      </div>
    </section>
  );
};

export default Description;
