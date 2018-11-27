import React from "react";
import PropTypes from "prop-types";

const Product = ({ onSave, onChangeName, onChangeCode }) => (
  <div>
    Name:
    <br />
    <input onChange={onChangeName} />
    <br />
    Code:
    <br />
    <input onChange={onChangeCode} /> <br />
    <button onClick={onSave}>Save</button>
  </div>
);

Product.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeCode: PropTypes.func.isRequired
};

export default Product;
