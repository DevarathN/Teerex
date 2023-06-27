import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import "./ProductCard.css";
import { useEffect } from "react";

const ProductCard = ({ addToCart, product, addedToCart }) => {
  // Store the updated cart items in localStorage

  useEffect(() => {
    // This code will be executed when counterVal changes
    // Add your logic here that needs to be executed when counterVal changes
    // You can also call a function or perform any other actions here
    // For example, you can update the product quantity in the state
  }, []);

  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        style={{ height: "12rem" }}
        src={product.imageURL}
        alt="Card  cap"
      />
      <div class="card-body">
        <h5 class="card-title">{product.name} </h5>
        <p class="card-title">₹ {product.price} </p>
        <Button
          className="card_footer_add_to_cart_button"
          style={{
            backgroundColor: "black",
            width: "10rem",
            fontFamily: "Oswald",
          }}
          onClick={addToCart}
          variant="contained"
          endIcon={<AddShoppingCartIcon />}
        >
          {addedToCart ? "Added" : "Add to cart"}
        </Button>{" "}
      </div>
    </div>
  );
};
export default ProductCard;
