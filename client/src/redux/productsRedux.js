/* selectors */
export const getAllProducts = ({products}) => products;
export const getProductsByCategory = ({products}, categoryName) => products.filter(product => product.categories.includes(categoryName));
export const getProductById = ({products}, productId) => products.find(product => product.id === productId);

/* action name creator */
//const reducerName = 'products';
//const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

/* action creators */

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
