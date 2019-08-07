import * as R from 'ramda';
import {
  addOrder,
  fetchOrders,
  deleteOrder,
  fetchOrderById,
} from './order.api';
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
    onSetOrderList(state, payload) {
      console.log(payload);
      return { ...state, orders: payload };
    },
  },
  effects: {
    createToolList(tools) {
      this.onSetToolsList(tools);
    },
    async createOrder(newOrderList) {
      await addOrder(newOrderList);
      this.getAllOrders();
    },
    async getAllOrders() {
      const { data } = await fetchOrders();
      this.onSetOrderList(data);
      return data;
    },
    async getOrderById(id) {
      const { data } = await fetchOrderById(id);
      return data;
    },
    async deleteOrder(id) {
      await deleteOrder(id);
      this.getAllOrders();
    },
  },
  selectors: slice => ({
    getNewOrderList(state) {
      return slice(state => state.newOrder);
    },
    getPreviousOrders(state) {
      return slice(state => state.orders);
    },
  }),
};
