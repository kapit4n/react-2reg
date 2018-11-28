import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, onSave, onChangeName, onChangeCode }) => (
  <form>
    <div className="form-group">
      <label>Product Name</label>
      <input
        type="text"
        className="form-control"
        id="productNameId"
        onChange={onChangeName}
        value={product.name}
        placeholder="Enter Product Name"
      />
    </div>

    <div className="form-group">
      <label>Code</label>
      <input
        type="text"
        className="form-control"
        id="productCodeId"
        onChange={onChangeCode}
        value={product.code}
        placeholder="Enter Product Code"
      />
    </div>
    <button onClick={onSave}>Save</button>
  </form>
);

Product.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeCode: PropTypes.func.isRequired
};

export default Product;
