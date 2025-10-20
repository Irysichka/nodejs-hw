import { Schema,model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      default: "",
    },
    tag: {
      type: String,
      default: "Todo",
      enum: TAGS,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
      index: true,
    },
  },
  { timestamps: true, }
);

noteSchema.index({ title: "text", content: "text" });

export const Note = model("Note", noteSchema);
