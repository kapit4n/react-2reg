import {
  INIT_PRODUCT,
  UPDATE_NAME,
  UPDATE_CODE,
  UPDATE_PRICE,
  UPDATE_IMAGE,
  UPDATE_DESCRIPTION,
  ON_SAVE
} from "../actions/products";

const inititalState = {
  product: {},
  products: [{ name: "Coca Cola", code: "CC01X" }]
};

function productApp(state = inititalState, action) {
  switch (action.type) {
    case INIT_PRODUCT:
      return Object.assign({}, state, {
        product: {
          name: "",
          code: "",
          image: "",
          description: "",
          price: 0
        }
      });
    case UPDATE_NAME:
      return Object.assign({}, state, {
        product: Object.assign({}, state.product, { name: action.text })
      });
    case UPDATE_CODE:
      return Object.assign({}, state, {
        product: Object.assign({}, state.product, { code: action.text })
      });
    case UPDATE_PRICE:
      return Object.assign({}, state, {
        product: Object.assign({}, state.product, { price: action.text })
      });
    case UPDATE_DESCRIPTION:
      return Object.assign({}, state, {
        product: Object.assign({}, state.product, { description: action.text })
      });
    case UPDATE_IMAGE:
      return Object.assign({}, state, {
        product: Object.assign({}, state.product, { image: action.text })
      });
    case ON_SAVE:
      // call rest api here
      console.log(state.product);
      return Object.assign({}, state, {
        product: { name: "", code: "", image: "", description: "", price: 0 }
      });

    default:
      return state;
  }
}

export default productApp;
