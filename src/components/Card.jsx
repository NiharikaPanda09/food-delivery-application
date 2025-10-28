import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

const Card = (props) => {
  const dispatch = useDispatchCart();
  const data = useCart();

  const options = props.options || {};
  const optionKeys = Object.keys(options);
  const priceRef = useRef();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  // set default size when options become available
  useEffect(() => {
    if (optionKeys.length > 0 && !size) {
      setSize(optionKeys[0]);
    }
  }, [optionKeys, size]);

  const handleAddToCart = async () => {
    // Guard clause: prevent adding invalid data
    if (!size || !options[size]) {
      alert("Please select a valid size before adding to cart!");
      return;
    }

    const finalPrice = qty * parseInt(options[size]);
    const existingItem = data.find(
      (item) => item.id === props.foodItem._id && item.size === size
    );

    if (existingItem) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: finalPrice,
        qty,
        size,
      });
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty,
        size,
        img: props.foodItem.img,
      });
    }

    console.log("Added:", {
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty,
      size,
    });
  };

  const finalPrice =
    size && options[size] ? qty * parseInt(options[size]) : 0;

  return (
    <div>
      <div className="card me-5" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          className="card-img-top"
          src={props.foodItem.img}
          alt={props.foodItem.name}
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>

          <div className="container w-100 p-0">
            <select
              className="m-2 h-100 w-20 bg-success rounded"
              onChange={(e) => setQty(Number(e.target.value))}
              value={qty}
            >
              {Array.from(Array(6), (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              className="m-2 h-100 w-20 bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
              value={size}
            >
              {optionKeys.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            <div className="d-inline h-full fs-5">{finalPrice}/-</div>
          </div>
        </div>
        <hr />
        <button
          className="btn btn-success justify center ms-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;