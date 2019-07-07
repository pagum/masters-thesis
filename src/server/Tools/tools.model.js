import mongoose from 'mongoose';
import Parameter from '../Parameter/parameter.model';
import ToolType from '../ToolType/toolType.model';

const ObjectId = mongoose.Schema.Types.ObjectId;
const toolSchema = new mongoose.Schema({
  _id: ObjectId,
  parameters: [Parameter.schema],
  type: { type: ToolType.schema },
  technicalConditions: {
    condition: {
      type: String,
      required: true,
    },
    timeOfBeingUsed: {
      type: String,
    },
    bought: {
      type: String,
      required: true,
    },
    overhaul: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  info: {
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
  },
});
const schema = 'tools';
const Tool = mongoose.model(schema, toolSchema, schema);

export default Tool;
