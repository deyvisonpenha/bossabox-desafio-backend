import mongoose, { Document, Schema } from 'mongoose';

type Tools = Document & {
  title: string;
  link: string,
  description: string,
  tags: string[]
};

const ToolsSchema = new Schema(
  {
    title: String,
    link: String,
    description: String,
    tags: [String]
  },
  {
    timestamps: true,
  });

export default mongoose.model<Tools>('Tag', ToolsSchema);