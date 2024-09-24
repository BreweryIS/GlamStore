import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { image } = products;

  // get the single product base on id
  const product = products.find((item) => {
    return item.id === id;
  });
  return (
    <section>
      <div>
        {/* container */}
        <div>
          {/* image */}
          <img src={image} alt="productImg" height={255} width={255} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
