
import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: { type: String, required: Boolean },
  age: Number,
  breed: String
});
