// src/models/Template.js

const mongoose = require("mongoose")

const templateSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  authorEmail: { type: String, required: true },
  paypalAccount: { type: String, required: true },
  mailblusterApiKey: { type: String, required: true },
  authorWebsite: { type: String, required: true },
  templateName: { type: String, required: true },
  liveDemoUrl: { type: String, required: true },
  downloadLink: { type: String, required: true },
  templateDescription: { type: String, required: true },
  tags: { type: [String], required: true },
  downloads: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Template', templateSchema);
