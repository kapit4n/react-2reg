import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, onSave, onChangeName, onChangeCode }) => (
  <div>
    Name:
    <br />
    <input onChange={onChangeName} value={product.name} />
    <br />
    Code:
    <br />
    <input onChange={onChangeCode} value={product.code} /> <br />
    <button onClick={onSave}>Save</button>
  </div>
);

Product.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeCode: PropTypes.func.isRequired
};

export default Product;
