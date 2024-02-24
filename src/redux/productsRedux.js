/* selectors */
export const getAll = ({ products }) => products;

export const getCount = ({ products }) => products.length;

export const getFavorite = ({ products }) => products.filter(item => item.isFavorite);
export const getProductsByCategory = ({ products }, category) =>
  products.filter(item => item.category === category);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const allPromoted = ({ promoted }) => promoted;

export const getCompare = ({ products }) =>
  products.filter(item => item.isCompare === true);

/* action name creator */
const createActionName = name => `app/products/${name}`;
const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');
const EDIT_USER_STARS = createActionName('EDIT_USER_STARS');
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');

/* action types */
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });
export const toggleFavorite = payload => ({ type: TOGGLE_FAVORITE, payload: payload });
export const updateUserStars = payload => ({ payload, type: EDIT_USER_STARS });

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
    case EDIT_USER_STARS: {
      return statePart.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    }
    default:
      return statePart;
  }
}
