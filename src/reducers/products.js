import {
  INIT_PRODUCT,
  UPDATE_NAME,
  UPDATE_CODE,
  ON_SAVE
} from "../actions/products";

const inititalState = {
  product: {}
};

function productApp(state = inititalState, action) {
  switch (action.type) {
    case INIT_PRODUCT:
      return Object.assign({}, state, {
        product: { name: "", code: "" }
      });
    case UPDATE_NAME:
      console.log("Changed name");
      return Object.assign({}, state, {
        product: { name: action.text, code: state.product.code }
      });
    case UPDATE_CODE:
      return Object.assign({}, state, {
        product: { name: state.product.name, code: action.text }
      });
    case ON_SAVE:
      // call rest api here
      console.log(state.product);
      return Object.assign({}, state, {
        product: { name: "", code: "" }
      });

    default:
      return state;
  }
}

export default productApp;
