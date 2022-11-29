export const add = (products) => {
  return {
    type: 'add',
    payload: products,
  };
};

export const remove = (id) => {
  return {
    type: 'remove',
    payload: id,
  };
};

const actions = {
  add,
  remove,
};

export default actions;
