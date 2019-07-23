import mongoose from 'mongoose';

const toolTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const schema = 'toolType';
const ToolType = mongoose.model(schema, toolTypeSchema, schema);

export default ToolType;
