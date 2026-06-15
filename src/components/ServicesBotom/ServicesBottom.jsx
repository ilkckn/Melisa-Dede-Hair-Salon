import "./ServicesBottom.css";
import priceList from "./ServiceData";

function ServicesBottom() {
  return (
    <div className="services-bottom-container">
      {priceList.map((category, index) => (
        <section className="service-category" key={index}>
          <div className="category-head">
            {category.icon && (
              <div className="icon">
                <img src={category.icon} alt={category.category} />
              </div>
            )}
            <h1>{category.category}</h1>
          </div>

          <div className="category-items">
            {category.items.map((item, i) => (
              <div className="price-row" key={i}>
                <div className="item-left">
                  <h2>{item.name}</h2>
                  {item.note && <span className="note">{item.note}</span>}
                </div>
                <span className="price">{item.price}</span>
              </div>
            ))}

            {category.footnote && (
              <p className="category-footnote">{category.footnote}</p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ServicesBottom;