/* selectors */
export const getCart = ({cart}) => cart;
export const getCartTotal = ({cart}) => cart.reduce((acc, curr) => {
  acc += curr.totalPrice;
  return acc;
}, 0);

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const UPDATE_CART_AMOUNT = createActionName('UPDATE_CART_AMOUNT');

/* action creators */
export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const updateCartAmount = payload => ({ type: UPDATE_CART_AMOUNT, payload });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = statePart.find(product => product.id === action.payload.id);
      if(existingProduct) {
        existingProduct.amount = existingProduct.amount + action.payload.amount;
        return statePart;
      } else {
        return [...statePart, { ...action.payload}];
      }
    case UPDATE_CART_AMOUNT:
      console.log(action.payload)
      return statePart.map(product => product.id === action.payload.id ? {...product, amount: action.payload.amount, totalPrice: action.payload.totalPrice} : product);
    default:
      return statePart;
  }
};
