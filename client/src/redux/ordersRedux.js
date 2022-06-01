import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getLoading = ({ orders }) => orders.loading;

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const CLEAR_LOADING = createActionName('CLEAR_LOADING');

/* action creators */

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });
export const clearLoading = () => ({ type: CLEAR_LOADING });

/* thunk creators */

export const addOrderRequest = (order) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/orders`, order);
      dispatch(endRequest());
    } catch(error) {
      dispatch(errorRequest());
    }
  };
};

/* Initial State */

const initialState = {
  loading: {
    pending: false,
    error: null,
    success: false,
  },
};

/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case START_REQUEST:
      return { ...statePart, loading: { pending: true, error: null, success: false }};
    case END_REQUEST:
      return { ...statePart, loading: { pending: false, error: null, success: true }};
    case ERROR_REQUEST:
      return { ...statePart, loading: { pending: false, error: action.payload.error, success: false }};
    case CLEAR_LOADING:
      return { ...statePart, loading: { pending: false, error: null, success: false}};
    default:
      return statePart;
  }
};
