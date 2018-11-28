import React from "react";
import PropTypes from "prop-types";

const ProductDisplayComp = ({ product, onEdit }) => (
  <div className="container">
    <div>
      <div>Name:</div>
      <div>{product.name}</div>
    </div>

    <div>
      <div>Code:</div>
      <div>{product.code}</div>
    </div>
  </div>
);

ProductDisplayComp.propTypes = {
  onEdit: PropTypes.func.isRequired
};

export default ProductDisplayComp;
