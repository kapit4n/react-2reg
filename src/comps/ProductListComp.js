import React from "react";
import PropTypes from "prop-types";

const ProductListComp = ({ products, openNew }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, i) => {
        return (
          <tr key={i}>
            <td>{product.name}</td>
            <td>{product.code}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ProductListComp.propTypes = {
  onNew: PropTypes.func.isRequired
};

export default ProductListComp;
