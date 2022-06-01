import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAllProducts = ({products}) => products.data;
export const getProductsByCategory = ({products}, categoryName) => products.data.filter(product => product.categories.includes(categoryName));
export const getProductById = ({products}, productId) => products.data.find(product => product._id === productId);
export const getProductByName = ({products}, productName) => products.data.find(product => product.name === productName);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* action creators */

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* thunk creators */

export const loadProductsRequest = () => {
  return (dispatch) => {
    dispatch(startRequest({ name: 'LOAD_PRODUCTS' }));

    axios
      .get(`${API_URL}/products`)
      .then(res => {
        dispatch(loadProducts(res.data));
        dispatch(endRequest({ name: 'LOAD_PRODUCTS' }));
      })
      .catch(err => {
        dispatch(errorRequest({ name: 'LOAD_PRODUCTS', error: err.message }));
      });
  };
};

/* Initial State */

const initialState = {
  data: [],
  requests: [],
};

/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, requests: {...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false }} };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true }} };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false }} };
    default:
      return statePart;
  }
};
