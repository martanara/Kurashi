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
const CLEAR_CART = createActionName('CLEAR_CART');

/* action creators */
export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const updateCartAmount = payload => ({ type: UPDATE_CART_AMOUNT, payload });
export const removefromCart = payload => ({ type: REMOVE_FROM_CART, payload });
export const clearCart = () => ({ type: CLEAR_CART });

/* thunk creators */

/* Initial State */

const initialState = [];

/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      // eslint-disable-next-line
      const existingProduct = statePart.find(product => product._id === action.payload._id);
      if(existingProduct) {
        existingProduct.amount = existingProduct.amount + action.payload.amount;
        existingProduct.totalPrice += action.payload.totalPrice;
        return statePart;
      } else {
        return [...statePart, { ...action.payload}];
      }
    case UPDATE_CART_AMOUNT:
      console.log(action.payload);
      return statePart.map(product => product._id === action.payload._id ? {...product, amount: action.payload.amount, totalPrice: action.payload.totalPrice} : product);
    case REMOVE_FROM_CART:
      return statePart.filter(product => product._id !== action.payload);
    case CLEAR_CART:
      return statePart = [];
    default:
      return statePart;
  }
};


//return [...statePart, { ...action.payload}];
