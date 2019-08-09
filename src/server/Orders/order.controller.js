import Order from './order.model';
import { ObjectId } from 'mongodb';
import ApiError from '../ApiError';
import * as R from 'ramda';

export const getAllOrders = async () => {
  const orders = await Order.find({});
  return R.reverse(orders);
};

export const getOrderById = async orderId => {
  const order = await Order.find({ _id: ObjectId(orderId) });
  return order[0];
};

export const deleteOrder = async orderId => {
  if (!ObjectId.isValid(orderId)) {
    throw new ApiError({
      status: 400,
      msg: 'Invalid param',
    });
  }
  const order = await Order.findByIdAndRemove(orderId);
  return order;
};
export const addOrder = async newOrder => {
  const order = await Order.create(newOrder);
  return order;
};
