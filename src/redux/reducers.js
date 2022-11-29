import { combineReducers } from 'redux';

const getDbProduct = () => {
  let dbData = localStorage.getItem('pros');
  return dbData ? JSON.parse(dbData) : [];
};

const saveDbProduct = (products) => {
  localStorage.setItem('pros', JSON.stringify(products));
};

const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'add':
      saveDbProduct(payload);
      state = getDbProduct();
      return state;
    case 'remove':
      state = getDbProduct();
      let pds = state.filter((p) => p.id !== payload);
      saveDbProduct(pds);
      state = getDbProduct();
      return;
    default:
      state = getDbProduct();
      return state;
  }
};

const reducers = combineReducers({
  products: productReducer,
});

export default reducers;
