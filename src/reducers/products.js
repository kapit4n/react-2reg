import { INIT_PRODUCT } from "../actions/products";

const inititalState = {
  product: {}
};

function productApp(state = inititalState, action) {
  switch (action) {
    case INIT_PRODUCT:
      return Object.assign({}, state, {
        product: { name: "init product", code: "000" }
      });

    default:
      return state;
  }
}

export default productApp;
