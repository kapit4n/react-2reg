const SAVE_PRODUCT = "SAVE_PRODUCT";
export const INIT_PRODUCT = "INIT_PRODUCT";

export function onSave(product) {
  return {
    type: SAVE_PRODUCT,
    product
  };
}
