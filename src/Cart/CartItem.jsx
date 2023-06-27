import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import "./CartItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
const CartItem = ({ product, removeFromCart, handleQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    handleQuantity(product.id, quantity);
  });
  const remove = () => {
    removeFromCart(product);
  };
  const addToCounter = () => {
    if (quantity + 1 <= product.quantity) {
      setQuantity(quantity + 1);
    } else {
      enqueueSnackbar("Out of Stock", { variant: "error" });
    }
  };
  const subtractCounter = () => {
    if (quantity - 1 === 0) {
      enqueueSnackbar("Product Removed from Cart");
      remove();
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart-box">
      <div className="cart-image">
        <img
          src={product.imageURL}
          alt={product.name}
          style={{ height: "4rem", margin: "20px" }}
        />
      </div>
      <div>
        <span style={{ margin: "20px" }}>{product.name}</span>
        <span style={{ margin: "20px" }}>₹ {product.price}</span>
      </div>
      <div>
        <Button
          style={{
            backgroundColor: "gray",
            margin: "20px",
          }}
          className="cart-rows-add-or-remove"
          variant="contained"
          endIcon={<AddIcon onClick={addToCounter} />}
          startIcon={<RemoveIcon onClick={subtractCounter} />}
        >
          {quantity}{" "}
        </Button>{" "}
        <Button
          onClick={remove}
          color="inherit"
          variant="contained"
          startIcon={<DeleteIcon />}
          style={{ margin: "20px", fontFamily: "Oswald" }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
export default CartItem;
