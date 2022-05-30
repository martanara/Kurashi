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
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* action creators */
export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const updateCartAmount = payload => ({ type: UPDATE_CART_AMOUNT, payload });
export const removefromCart = payload => ({ type: REMOVE_FROM_CART, payload });

/* thunk creators */

/* Initial State */

const initialState = [];

/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...statePart, { ...action.payload}];
    case UPDATE_CART_AMOUNT:
      return statePart.map(product => product._id === action.payload.id ? {...product, amount: action.payload.amount, totalPrice: action.payload.totalPrice} : product);
    case REMOVE_FROM_CART:
      return statePart.filter(product => product._id !== action.payload);
    default:
      return statePart;
  }
};
