import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;
const toolTypeSchema = new mongoose.Schema({
  _id: ObjectId,
  name: {
    type: String,
    required: true,
  },
});
const schema = 'toolType';
const ToolType = mongoose.model(schema, toolTypeSchema, schema);

export default ToolType;
