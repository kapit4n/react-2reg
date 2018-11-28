export const ON_SAVE = "ON_SAVE";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CODE = "UPDATE_CODE";
export const INIT_PRODUCT = "INIT_PRODUCT";

export function onSave() {
  return { type: ON_SAVE };
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
