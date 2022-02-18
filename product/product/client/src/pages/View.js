import React, { useEffect } from "react";
import { getOne } from "../js/actions/product";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./View.css";
const View = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch]);

  const product = useSelector((state) => state.productReducer.product);
  const loadProduct = useSelector((state) => state.productReducer.loadProduct);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            height: "250px",
            border: "1px black solid",
          }}
        >
          <img
            style={{ height: "100%" }}
            alt="product"
            src={product ? product.image : <h1>Loading...</h1>}
          />
        </div>
        <h1>Price: {product ? product.Price : <h1>Loading...</h1>}dt</h1>
        <span style={{ display: "inline-block", float: "right" }}>
          <h2>Owner: {product.Shop}</h2>
          <h2>Phone: {product.Phone}</h2>
          <h2>Location: {product.Location}</h2>
          <h2>
            Date:{" "}
            {product.createdAt ? (
              product.createdAt.substr(0, 10)
            ) : (
              <h2>Loading...</h2>
            )}
          </h2>
        </span>
        <h2 style={{ marginTop: "50px" }}>Name: {product.Name}</h2>
        <p style={{ marginTop: "100px", fontSize: "20px" }}>{product.Descrption}</p>
      </div>
    </div>
  );
};

export default View;
