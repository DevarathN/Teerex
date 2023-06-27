import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import "./LandingPage.css";
import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Filter from "../Filter/Filter";
import PageviewIcon from "@mui/icons-material/Pageview";
const LandingPage = ({ cart, setCart, counter }) => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [debounceTimerId, setDebounceTimerId] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sidebar, setSideBar] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    if (debounceTimerId !== 0) {
      clearTimeout(debounceTimerId);
    }
    const newTimerId = setTimeout(() => {
      apiCall(searchText);
    }, 800);
    setDebounceTimerId(newTimerId);
  }, [searchText]);
  async function apiCall(searchVal) {
    let url =
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

    const resp = await axios.get(url);
    const filteredData = resp.data.filter((item) =>
      item.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setProducts(filteredData);
  }

  const addToCart = (item) => {
    if (cart.find((p) => p.id === item.id)) {
      setCart((prev) => prev.filter((p) => p.id !== item.id));
    } else {
      if (item.quantity > 0) {
        setCart([...cart, { ...item, cartquantity: 1 }]);
      } else alert("Sorry, This Item is Out Of Stock");
    }
  };
  const handleFilters = () => {
    // Get the state of the checkboxes
    let filteredData = products;
    const colorFilters = Array.from(
      document.querySelectorAll('input[name="color"]:checked')
    );
    const genderFilters = Array.from(
      document.querySelectorAll('input[name="gender"]:checked')
    );
    const priceFilters = Array.from(
      document.querySelectorAll('input[name="price"]:checked')
    );
    const typeFilters = Array.from(
      document.querySelectorAll('input[name="type"]:checked')
    );

    // Filter the products based on the checkboxes

    if (colorFilters.length > 0) {
      filteredData = filteredData.filter((item) =>
        colorFilters.some((el) => el.value === item.color)
      );
      setIsFilter(true);
    }
    if (genderFilters.length > 0) {
      filteredData = filteredData.filter((item) =>
        genderFilters.some((el) => el.value === item.gender)
      );
      setIsFilter(true);
    }
    if (priceFilters.length > 0) {
      filteredData = filteredData.filter((item) =>
        priceFilters.some((el) => {
          const [min, max] = el.value.split("-");
          return item.price >= parseInt(min) && item.price <= parseInt(max);
        })
      );
      setIsFilter(true);
    }
    if (typeFilters.length > 0) {
      filteredData = filteredData.filter((item) =>
        typeFilters.some((el) => el.value === item.type)
      );
      setIsFilter(true);
    }

    // Update the state with the filtered data

    setFilteredProducts(filteredData);
  };

  const toggleSidebar = () => {
    setSideBar(!sidebar);
  };
  const handleSearch = (e) => {
    setIsFilter(false);
    setSearchText(e.target.value);
  };
  return (
    <div className="product-listing">
      <div className="searchbar">
        <TextField
          className="searchtext-area"
          value={searchText}
          onChange={handleSearch}
          style={{
            width: "20rem",
          }}
          variant="standard"
          placeholder="Search for products ..."
        />
        <div className="large_screen_searchicon">
          <SearchIcon
            id="search-icon"
            style={{
              color: "rgb(153, 153, 153)",
              fontSize: "2rem",
            }}
          />
        </div>
        <div className="small_screen_searchicon">
          <PageviewIcon
            id="page-view-icon"
            style={{
              fontSize: "2.2rem",
            }}
          />
        </div>

        <div className="small_screen_filtericon">
          <FilterAltOutlinedIcon
            id="filter-icon"
            onClick={toggleSidebar}
            style={{
              background: "black",
              color: "white",
              borderRadius: "5px",
              fontSize: "1.5rem",
            }}
          />
        </div>
      </div>
      <div className="large_screen__filter">
        <Filter handleFilters={handleFilters} />
      </div>
      {sidebar && (
        <div className="small_screen__filter">
          <Filter handleFilters={handleFilters} />
        </div>
      )}
      <div className="products">
        <Grid container spacing={10}>
          {" "}
          {isFilter
            ? filteredProducts.map((item) => {
                let addedToCart = cart.find((p) => p.id === item.id);
                return (
                  <Grid item xs={12} lg={4} md={6} xl={3}>
                    <ProductCard
                      product={item}
                      imgLink={item.imageURL}
                      productTitle={item.name}
                      productPrice={item.price}
                      productQuantity={item.quantity}
                      addedToCart={addedToCart}
                      key={item.id}
                      addToCart={() => addToCart(item)}
                    />{" "}
                  </Grid>
                );
              })
            : products.map((item) => {
                let addedToCart = cart.find((p) => p.id === item.id);
                return (
                  <Grid item xs={12} sm={6} lg={4} md={6} xl={3}>
                    <ProductCard
                      product={item}
                      imgLink={item.imageURL}
                      productTitle={item.name}
                      productPrice={item.price}
                      productQuantity={item.quantity}
                      productId={item.id}
                      addToCart={() => addToCart(item)}
                      addedToCart={addedToCart}
                    />{" "}
                  </Grid>
                );
              })}{" "}
        </Grid>{" "}
      </div>{" "}
    </div>
  );
};
export default LandingPage;
