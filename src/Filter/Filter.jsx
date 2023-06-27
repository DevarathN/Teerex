import "./Filter.css";
const Filter = ({ handleFilters }) => {
  return (
    <div className="sidebar-container" id="sidebar-container">
      <p
        style={{
          textAlign: "left",
          fontSize: "small",
        }}
      >
        <strong className="categories"> Colour </strong>{" "}
      </p>{" "}
      <div className="checkbox-label">
        <input
          name="color"
          value={"Red"}
          type="checkbox"
          onChange={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            <strong> Red </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="checkbox-label">
        <input
          name="color"
          value={"Blue"}
          type="checkbox"
          onChange={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            {" "}
            <strong> Blue </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="checkbox-label">
        <input
          name="color"
          value={"Green"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            <strong> Green </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <p
        style={{
          textAlign: "left",
          fontSize: "small",
        }}
      >
        <strong className="categories"> Gender </strong>{" "}
      </p>{" "}
      <div className="checkbox-label">
        <input
          name="gender"
          value={"Men"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            <strong> Male </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="checkbox-label">
        <input
          name="gender"
          value={"Women"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            {" "}
            <strong> Female </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>
      <p
        style={{
          textAlign: "left",
          fontSize: "small",
        }}
      >
        <strong className="categories"> Price </strong>{" "}
      </p>{" "}
      <div className="checkbox-label">
        <input
          name="price"
          value={" 0 - 250"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            <strong> ₹0 - ₹250 </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="checkbox-label">
        <input
          name="price"
          value={"250 - 450"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            {" "}
            <strong> ₹250 - ₹450 </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="checkbox-label">
        <input
          name="price"
          value={"450-"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            {" "}
            <strong> ₹450 & above </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <p
        style={{
          textAlign: "left",
          fontSize: "small",
        }}
      >
        <strong className="categories"> Type </strong>{" "}
      </p>{" "}
      <div className="checkbox-label">
        <input
          name="type"
          value={"Polo"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            <strong> Polo </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="checkbox-label">
        <input
          name="type"
          value={"Hoodie"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            {" "}
            <strong> Hoodie </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="checkbox-label">
        <input
          name="type"
          value={"Basic"}
          type="checkbox"
          onClick={handleFilters}
        />{" "}
        <div className="label-div">
          <label>
            {" "}
            <strong> Basic </strong>{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Filter;
