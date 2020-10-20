import React, { forwardRef } from "react";
import FlipMove from "react-flip-move";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import BasketItem from "./BasketItem";

const FunctionalArticle = forwardRef((props, ref) => (
  <div ref={ref}>
    {props.articleName}
    <BasketItem
      id={props.itemId}
      title={props.itemTitle}
      rating={props.itemRating}
      price={props.itemPrice}
      image={props.itemImage}
      key={props.itemId}
    />
  </div>
));

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://www.bmconsulting.in/blog/wp-content/uploads/2017/03/download.jpg"
          alt="Ad Banner"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* <FlipMove>
            {basket.map((item, index) => (
              <BasketItem
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.image}
                key={item.id + "_" + index}
              />
            ))}
          </FlipMove> */}

          <FlipMove>
            {basket.map((item, index) => (
              <FunctionalArticle
                itemId={item.id}
                itemTitle={item.title}
                itemRating={item.rating}
                itemPrice={item.price}
                itemImage={item.image}
                key={item.id + "_" + index}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
