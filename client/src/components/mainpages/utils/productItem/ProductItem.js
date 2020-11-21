import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
import axios from "axios";
import Loading from "../loading/Loading";

const ProductItem = ({
  product,
  isAdmin,
  addCart,
  token,
  callback,
  setCallback,
}) => {
  const [loading, setLoading] = useState(false);

  const deleteProduct = async () => {
    try {
      setLoading(true);
      const destroyImg = axios.post(
        "/api/destroy",
        {
          public_id: product.images.public_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const deleteProduct = axios.delete(
        `/api/products/${product._id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      await destroyImg;
      await deleteProduct;
      setLoading(false);
      setCallback(!callback);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  if (loading) {
    return (
      <div className="product_card">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div className="product_card">
      
      <img src={product.images.url} alt=""></img>

      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>

      <div className="row_btn">
        {isAdmin ? (
          <React.Fragment>
            <Link id="btn_buy" to="#!" onClick={deleteProduct}>
              Delete
            </Link>
            <Link id="btn_view" to={`/edit_product/${product._id}`}>
              Edit
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
              Buy
            </Link>
            <Link id="btn_view" to={`/detail/${product._id}`}>
              View
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
