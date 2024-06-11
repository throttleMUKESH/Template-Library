import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  authorEmail: { type: String, required: true },
  paypalAccount: { type: String, required: true },
  mailblusterApiKey: { type: String, required: true },
  authorWebsite: { type: String, required: true },
  templateName: { type: String, required: true },
  liveDemoUrl: { type: String, required: true },
  tags: { type: [String], required: true },
}, { timestamps: true });

export default mongoose.model('Template', templateSchema);
