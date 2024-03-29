import mongoose from 'mongoose';
import ToolsToOrder from './toolsToOrder.model';

const orderSchema = new mongoose.Schema({
  date: String,
  tools: [{ type: ToolsToOrder.schema, required: true }],
  sum: Number,
});

const Order = mongoose.model('orders', orderSchema);
export default Order;
