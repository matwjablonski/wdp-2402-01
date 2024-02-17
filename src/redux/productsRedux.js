/* action name */
const createActionName = name => `app/products/${name}`;
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');

/* action creators */
export const toggleFavorite = payload => ({ type: TOGGLE_FAVORITE, payload: payload });

/* selectors */
export const getAll = ({ products }) => products;

export const getCount = ({ products }) => products.length;

export const getFavorite = ({ products }) => products.filter(item => item.isFavorite);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompare = ({ products }) =>
  products.filter(item => item.isCompare === true);

/* action name creator */
const createActionName = name => `app/products/${name}`;
const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');

/* action types */
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return statePart.map(product => {
        if (product.id === action.payload) {
          return { ...product, isFavorite: !product.isFavorite };
        }
        return product;
      });
    case CHANGE_COMPARE: {
      const compareCount = statePart.filter(item => item.isCompare === true).length;
      if (
        compareCount >= 4 &&
        !statePart.find(item => item.id === action.payload).isCompare
      )
        return statePart;
      return statePart.map(item => {
        if (item.id === action.payload) {
          return { ...item, isCompare: !item.isCompare };
        }
        return item;
      });
    }
    default:
      return statePart;
  }
}
