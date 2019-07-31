import mongoose from 'mongoose';
import Parameter from '../Parameter/parameter.model';
import ToolType from '../ToolType/toolType.model';

const toolSchema = new mongoose.Schema({
  parameters: [Parameter.schema],
  type: { type: ToolType.schema, required: true },
  technicalConditions: {
    condition: {
      type: String,
      required: true,
    },
    timeOfBeingUsed: {
      type: String,
      required: true,
    },
    bought: {
      type: String,
    },
    overhaul: {
      type: String,
    },
  },
  info: {
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
    location: {
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
  },
});

const Tool = mongoose.model('tools', toolSchema);
export default Tool;
