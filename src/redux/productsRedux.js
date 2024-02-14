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
    default:
      return statePart;
  }
}
