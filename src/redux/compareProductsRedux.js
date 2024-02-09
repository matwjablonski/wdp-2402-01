// selectors
export const getCompareProducts = ({ compareProducts }) => compareProducts;

// action name creator
const createActionName = name => `app/compareProducts/${name}`;
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

// actions
export const addCompareProduct = payload => ({ payload, type: ADD_PRODUCT });

// reducer
const compareProductsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
};
export default compareProductsReducer;
