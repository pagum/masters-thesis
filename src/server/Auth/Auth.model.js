import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const schema = 'auth';
const Auth = mongoose.model(schema, authSchema, schema);

export default Auth;
