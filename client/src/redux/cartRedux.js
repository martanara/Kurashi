/* selectors */
export const getCart = ({cart}) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');

/* action creators */
export const addToCart = payload => ({ type: ADD_TO_CART, payload });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = statePart.find(product => product.id === action.payload.id && product.selectedVariant === action.payload.selectedVariant);
      if(existingProduct) {
        existingProduct.amount = existingProduct.amount + action.payload.amount;
        return statePart;
      } else {
        return [...statePart, { ...action.payload}];
      }
    default:
      return statePart;
  }
};
