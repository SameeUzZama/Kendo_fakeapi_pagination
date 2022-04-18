export const productReducer = (state = { selectedProduct: [] }, action) => {
  if (action.type === "Selected-Product") {
    return { ...state, selectedProduct: [action.data] };
  }
  return state;
};
