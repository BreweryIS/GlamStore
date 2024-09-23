import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const CartItem = ({ item }) => {
  const { id, title, image, quantity, price } = item;
  const {cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);

  return (
    <div className="flex gap-x-3">
      {/* image */}
      <Link
        to={"/product/${id}"}
        className="flexCenter flex-1 m-1 py-1 rounded-xl ring-1 ring-slate-900/5 h-[74px]"
      >
        <img
          src={image}
          alt=""
          height={55}
          width={55}
          className="object-contain aspect-square p-1"
        />
      </Link>
      <div className="flex flex-[4] flex-col gap-y-2 mr-3">
        {/* title and remove icon */}
        <div className="flex justify-between gap-8 items-baseline">
          <div className="medium-14 uppercase line-clamp-2">{title}</div>
          <div className="cursor-pointer text-gray-50">
            <MdClose />
          </div>
        </div>
        {/* cart btns and price */}
        <div className="flexBetween">
          <div className="flexBetween gap-4 ring-1 ring-state-900/5 px-2 rounded-md">
            <FaMinus onClick={decreaseQuantity} className="cursor-pointer"/>
            <span>{quantity}</span>
            <FaPlus onClick={increaseQuantity} className="cursor-pointer"/>
          </div>
          <p>${0}</p>
          {/* final price */}
          <div className="medium-15">final price</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
