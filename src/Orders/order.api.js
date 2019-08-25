import api from '../utils/api';

export const fetchOrders = async () => {
  const response = await api.get('/orders');
  return response;
};

export const fetchOrderById = async orderId => {
  const response = await api.get(`/orders/${orderId}`);

  return response;
};
export const addOrder = async order => {
  const response = await api.post('/addOrder', order);
  return response;
};

export const deleteOrder = async orderId => {
  const response = await api.delete(`/deleteOrder/${orderId}`);
  return response;
};
