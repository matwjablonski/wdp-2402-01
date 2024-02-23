/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const product = statePart.products.find(item => item.id === action.payload.id);
      if (product) {
        return {
          ...statePart,
          products: statePart.products.map(item =>
            item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item
          ),
          summary: statePart.summary + action.payload.price,
        };
      } else
        return {
          ...statePart,
          products: [...statePart.products, action.payload],
          summary: statePart.summary + action.payload.price,
          delivery: statePart.delivery ? statePart.delivery : 20,
        };
    }
    default:
      return statePart;
  }
}
