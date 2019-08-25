import mongoose from 'mongoose';

const toolsToOrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  application: {
    type: String,
    required: true,
  },
  producent: {
    type: String,
  },
  units: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  amount: {
    type: String,
    required: true,
  },
});

const ToolsToOrder = mongoose.model('toolsToOrder', toolsToOrderSchema);
export default ToolsToOrder;
