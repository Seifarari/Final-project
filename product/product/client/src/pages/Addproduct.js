import { sliderClasses } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../js/actions/product";
import "./Addproduct.css";
const Addproduct = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const id = isAuth ? user._id : null;
  const owner = isAuth ? user.name : null;

  const [product, setproduct] = useState({
    Price: "",
    Name: "",
    Descreption: "",
    Image: "image"  ,
    
Category: "",
    user_id: id,
    shop: owner,
    phone: "",
    localtion: "",
  });

  const dispatch = useDispatch();
  return (
    <div className="con">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            width: "200px",
            color: "white",
            backgroundColor: "gray",
            marginLeft: "50%",
          }}
        >
          Close
        </button>
      </Link>
      <div className="add">
        <h3>Name:</h3>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setproduct({ ...product, Name: e.target.value })}
        />
      </div>
      <div className="add">
        <h3>Price:</h3>
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => setproduct({ ...product, Price: e.target.value })}
        />
      </div>
      <div className="add">
        <h3>Number Phone:</h3>
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setproduct({ ...product, Phone: e.target.value })}
        />
      </div>
      <div className="add">
        <h3>Location:</h3>
        <input
          type="text"
          placeholder="Location"
          onChange={(e) =>
            setproduct({ ...product, Location: e.target.value })
          }
        />
      </div>
      <div className="add">
        <h3>Image:</h3>
        <input
          type="text"
          placeholder="Image"
          onChange={(e) => setproduct({ ...product, Image: e.target.value })}
        />
      </div>
      <div className="add">
        <h3>Category:</h3>
        <input
          type="text"
          placeholder="Category"
          onChange={(e) =>
            setproduct({ ...product,Category: e.target.value })
          }
        />
      </div>
      <div className="added">
        <h3>Description:</h3>
        <textarea
          type="text"
          placeholder="Description"
          onChange={(e) => setproduct({ ...product, Description: e.target.value })}
        />
      </div>

      <a href="/product">
        <button
          onClick={() => {
            dispatch(addProduct(product));
          }}
        >
          Save
        </button>
      </a>
    </div>
  );
};

export default Addproduct;
