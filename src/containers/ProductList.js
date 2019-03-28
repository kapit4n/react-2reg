import { connect } from "react-redux";
import ProductListComp from "../comps/ProductListComp";
import {onNew} from "../actions/products"

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => ({
  onNew: data => dispatch(onNew(data))
});

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListComp);

export default ProductList;
