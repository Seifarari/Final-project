import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const products = useSelector((state) => state.productReducer.products);

  // const loadProduct = useSelector((state) => state.productReducer.loadProduct);
  return (
    <div>
      <Navbar />
      <div className="image">
        <Link to="/product" style={{ textDecoration: "none" }}>
          <button>Shop now</button>
        </Link>
      </div>
      <div className="text">
        <h1
          style={{
            width: "200px",
            height: "50px",
            fontSize: "30px",
            lineHeight: "60px",
          }}
        >
          Seif Market to make your shopping seamless
        </h1>
        {isAuth ? (
          <Link to="/add" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "120px",
                height: "60px",
                backgroundColor: "white",
                border: "1px black solid",
                color: "white",
                fontSize: "22px",
              }}
            >
              Add{" "}
            </button>
          </Link>
        ) : (
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "120px",
                height: "60px",
                backgroundColor: "black",
                border: "1px black solid",
                color: "white",
                fontSize: "22px",
              }}
            >
              Add{" "}
            </button>
          </Link>
        )}
      </div>

      <div className="footer">
        <p style={{ color: "white", marginLeft: "200px", marginTop: "50px", fontFamily:"cursive" }}>
          SeifMarket@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Home;
