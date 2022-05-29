import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as productsReducer } from './productsRedux';
import { reducer as ordersReducer } from './ordersRedux';
import { reducer as cartReducer } from './cartRedux';

// define reducers
const reducers = {
  products: productsReducer,
  orders: ordersReducer,
  cart: cartReducer,
};

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
