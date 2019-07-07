import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;
const parameterSchema = new mongoose.Schema({
  _id: ObjectId,
  name: {
    type: String,
    required: true,
  },
  defaultValue: {
    type: String,
  },
  unit: {
    type: String,
  },
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'ToolType' },
});
const schema = 'parameter';
const Parameter = mongoose.model(schema, parameterSchema, schema);

export default Parameter;
