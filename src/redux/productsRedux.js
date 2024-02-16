/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const allPromoted = ({ promoted }) => promoted;

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
