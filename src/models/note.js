import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { TAGS } from '../constants/tags.js';
import { getAllNotesSchema } from '../validations/notesValidation.js';

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
  },
  { timestamps: true, }
);

getAllNotesSchema.index({ title: "text", content: "text" });

export const Note = model("Note", noteSchema);
