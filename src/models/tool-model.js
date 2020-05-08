const Schema = mongoose.Schema;
import mongoose from 'mongoose';

const ObjectId = Schema.ObjectId;

const ToolSchema = new Schema({
  id: ObjectId,

  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  tags: [{
    type: String,
    require: false,
  }]
});

const tool = mongoose.model('tool', ToolSchema);

export default tool;
