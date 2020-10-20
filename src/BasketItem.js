/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem({ id, title, image, price, rating, hideButton = false }) {
  const [state, dispatch] = useStateValue();

  return (
    <div className="basketItem">
      <div className="basketItem__imageContainer">
        <img className="basketItem__image" src={image} alt={title} />
      </div>
      <div className="basketItem__info">
        <p className="basketItem__title">
          <strong>{title}</strong>
        </p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_BASKET",
                id: id,
              });
            }}
            className="basketItem__removeButton"
          >
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default BasketItem;
