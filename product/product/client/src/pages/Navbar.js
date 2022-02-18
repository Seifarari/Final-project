import React from "react";
import { Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../js/actions/user";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Navbar = ({ searchProduct }) => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "red", fontSize: "18px",fontFamily:"fantasy" }}
      >
        <h1>Seif Market</h1>
      </Link>
      {/* <div className="search">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => searchProduct(e.target.value)}
        />

        <Search />
      </div> */}
      <div className="button">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}
        >
          <h4>Home</h4>
        </Link>
        <Link
          to="/shops"
          style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}
        >
          <h4>Shops</h4>
        </Link>
        <Link
          to="/product"
          style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}
        >
          <h4>Product</h4>
        </Link>
        <Link
          to="/contactUs"
          style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}
        >
          <h4>Contact us</h4>
        </Link>
        {isAuth ? (
          <Link to="/dashbord">
            <AccountBoxIcon style={{ fontSize: "27px", color: "red" }} />
          </Link>
        ) : null}
        {isAuth ? (
          <h4
            className="logout"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </h4>
        ) : (
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "green", fontSize: "18px" }}
          >
            <h4>Login</h4>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
