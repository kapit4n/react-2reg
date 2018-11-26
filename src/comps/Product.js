import React from "react";
import PropTypes from "prop-types";

const Product = ({ onSave, onChangeName, onChangeCode }) => (
  <div>
    <input onChange={onChangeName} />
    <button onClick={onSave} />
  </div>
);

Product.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeCode: PropTypes.func.isRequired
};

export default Product;
