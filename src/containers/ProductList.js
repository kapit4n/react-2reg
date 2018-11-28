import { connect } from "react-redux";
import ProductListComp from "../comps/ProductListComp";

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispathcToProps = dispatch => {
  return {
    newOpen: event => {
      //dispatch(newOpen());
      event.preventDefault();
    }
  };
};

const ProductList = connect(
  mapStateToProps,
  mapDispathcToProps
)(ProductListComp);

export default ProductList;
