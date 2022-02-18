import React from "react";
import Navbar from "./Navbar";

const Contactus = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "60%",
          height: "500px",
          marginLeft: "20%",
          marginTop: "120px",
          display: "block",
          float: "left",
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Name"
            style={{ width: "300px", height: "40px" }}
          />
          <input
            type="text"
            placeholder="Last Name"
            style={{ width: "300px", height: "40px" }}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          style={{ width: "550px", height: "40px" }}
        />
        <textarea
          type="text"
          placeholder="Object"
          style={{
            width: "550px",
            height: "200px",
            marginLeft: "20%",
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default Contactus;