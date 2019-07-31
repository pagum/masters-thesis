import * as R from 'ramda';
export const orderModel = {
  state: { newOrder: [] },
  reducers: {
    onSetAllTools(state, payload) {
      return { ...state, tools: payload };
    },
    onSetToolsList(state, payload) {
      const newTools = payload.filter(tool => !state.newOrder.includes(tool));

      const newOrder = R.concat(state.newOrder, newTools);
      sessionStorage.setItem('newOrder', JSON.stringify(newOrder));
      return { ...state, newOrder };
    },
  },
  effects: {
    createToolList(tools) {
      console.log('creeeeeeee');
      this.onSetToolsList(tools);
    },
  },
  selectors: slice => ({
    getNewOrderList(state) {
      return slice(state => state.newOrder);
    },
  }),
};
