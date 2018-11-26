import { connect } from "react-redux";
import Product from "../comps/Product";
import { onSave } from "../actions/products";

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispathcToProps = dispatch => {
  return {
    onSave: id => {
      dispatch(onSave(id));
    }
  };
};

const ProductRegister = connect(
  mapStateToProps,
  mapDispathcToProps
)(Product);

export default ProductRegister;
