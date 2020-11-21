import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import "./Products.css";
import Loading from "../utils/loading/Loading";

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  const addCart = state.userAPI.addCart;
  const [token] = state.token;
  const [callback, setCallback] = state.productsAPI.callback;

  return (
    <React.Fragment>
      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              product={product}
              isAdmin={isAdmin}
              addCart={addCart}
              token={token}
              callback={callback}
              setCallback={setCallback}
            ></ProductItem>
          );
        })}
      </div>

      {products.length === 0 && <Loading></Loading>}
    </React.Fragment>
  );
};

export default Products;
