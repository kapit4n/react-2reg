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
    },

    onChangeName: event => {
      console.log(event.target.value);
    },

    onChangeCode: event => {
      console.log(event.target.value);
    }
  };
};

const ProductRegister = connect(
  mapStateToProps,
  mapDispathcToProps
)(Product);

export default ProductRegister;
