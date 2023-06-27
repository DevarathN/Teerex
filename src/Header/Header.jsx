import { Button, IconButton } from "@mui/material";

import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Header = () => {
  const navigate = useNavigate();
  const cart = () => {
    navigate("cart");
  };
  const homeButton = () => {
    navigate("/");
  };
  const productButton = () => {
    navigate("/");
  };
  return (
    <>
      <div className="header1">
        {/* <Button> */}
        <Button
          style={{ textTransform: "none" }}
          variant="text"
          onClick={homeButton}
          size="large"
        >
          <strong style={{ color: "black", fontFamily: "Roboto" }}>
            {"TeeRex Store"}
          </strong>
        </Button>
        <div className="products-cart">
          <Button
            style={{ textTransform: "none", fontFamily: "Roboto" }}
            variant="text"
            onClick={productButton}
            size="large"
          >
            <b style={{ color: "black" }}>Products</b>
          </Button>
          <IconButton
            onClick={cart}
            name="Open shopping cart"
            size="large"
            color="gray"
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </div>
        {/* </Button> */}
      </div>
    </>
  );
};
export default Header;
