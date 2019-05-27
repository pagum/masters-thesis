import mongoose from 'mongoose';

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  application: {
    type: String,
  },

  producent: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  units: {
    type: Number,
    required: true,
  },

  notes: {
    type: String,
  },

  id: {
    type: Number,
    required: true,
    unique: true,
  },
});
const schema = 'tools';
const Tool = mongoose.model(schema, toolSchema, schema);

export default Tool;
