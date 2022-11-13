import React from "react";

export default function MenuCart({}) {
  const [listItems, setListItems, countItems, totalPrice] =
    useContext(ListItems);
  function CloseMenuCart() {
    setStyleMenuCart(preStyleMenuCart => {
      const styleMenuCart = { ...preStyleMenuCart, right: "-400px" };
      return styleMenuCart;
    });
  }
  return (
    <React.Fragment>
      <div
        className="background-wrap-menu-cart"
        style={{
          width: window.innerWidth,
          height: window.innerWidth,
          display: `${styleMenuCart.right == "-400px" ? "none" : "block"}`,
        }}
        onClick={CloseMenuCart}></div>
      <div
        className="menu-cart-wrap"
        style={{ right: styleMenuCart.right, height: "100%" }}>
        <div className="menu-cart">
          <div className="menu-cart__header">
            <div className="menu-cart__header-title">
              Cart: {countItems} Items
            </div>
            <div className="menu-cart__header-close" onClick={CloseMenuCart}>
              <i className="fa-solid fa-xmark btnclose"></i>
            </div>
          </div>
          <div className="menu-cart__body">
            {(listItems.length > 0 &&
              listItems.map(([key, value], idx) => {
                return (
                  <div className="menu-cart-item" key={idx} id={key.id}>
                    <div className="product-quantity">
                      <button
                        className="quantity-btn quantity-btn--active"
                        onClick={IncreaseItem}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <span>{value}</span>
                      {(value == 1 && (
                        <button className="quantity-btn">
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      )) || (
                        <button
                          className="quantity-btn quantity-btn--active"
                          onClick={DecreaseItem}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      )}
                    </div>
                    <div className="product-info">
                      <div
                        className="product-img"
                        style={{ backgroundImage: `url(${key.images})` }}></div>
                      <div className="product-description">
                        <div className="product-name"> {key.product_name}</div>
                        <div className="product-price">
                          {" "}
                          {key.price.toLocaleString("vi")}đ x {value}
                        </div>
                        <div className="product-total-price">
                          {(value * key.price).toLocaleString("vi")}đ
                        </div>
                      </div>
                    </div>
                    <div className="product-button-close" onClick={RemoveItem}>
                      <i className="fa-solid fa-xmark btnclose"></i>
                    </div>
                  </div>
                );
              })) || (
              <div className="no-products">
                <img
                  className="no-products-img"
                  src="https://www.leoasher.dev/static/media/sadCat.2335333f.png"
                />
                <h3 className="no-products-title">
                  {" "}
                  There's no item in cart!{" "}
                </h3>
              </div>
            )}
          </div>
          <div className="menu-cart__footer">
            <button type="button" className="menu-cart-btn btn-primary">
              Checkout ({totalPrice})
            </button>
            <button type="button" className="menu-cart-btn btn-view-cart">
              View Cart
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
