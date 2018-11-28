import { connect } from "react-redux";
import ProductDisplayComp from "../comps/ProductDisplayComp";

const mapStateToProps = state => {
  return {
    product: state.productDisplay
  };
};

const mapDispathcToProps = dispatch => {
  return {
    onEdit: event => {
      //dispatch(newOpen());
      event.preventDefault();
    }
  };
};

const ProductDisplay = connect(
  mapStateToProps,
  mapDispathcToProps
)(ProductDisplayComp);

export default ProductDisplay;
