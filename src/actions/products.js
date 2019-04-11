export const ON_SAVE = "ON_SAVE";
export const ON_NEW = "ON_NEW";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CODE = "UPDATE_CODE";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const INIT_PRODUCT = "INIT_PRODUCT";

export function onSave() {
  return { type: ON_SAVE };
}

export function onNew() {
  return { type: ON_NEW };
}

export function init() {
  return { type: INIT_PRODUCT };
}

export function updateName(text) {
  return { type: UPDATE_NAME, text };
}

export function updateCode(text) {
  return { type: UPDATE_CODE, text };
}

export function updatePrice(text) {
  return { type: UPDATE_PRICE, text };
}

export function updateDescription(text) {
  return { type: UPDATE_DESCRIPTION, text };
}

export function updateImage(text) {
  return { type: UPDATE_IMAGE, text };
}
