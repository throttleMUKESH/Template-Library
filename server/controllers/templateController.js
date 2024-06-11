// src/controllers/templateController.js

const Template = require("../models/Template.js")

 const createTemplate = async (req, res) => {
  try {
    const newTemplate = new Template(req.body);
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 const getTemplates = async (req, res) => {
  try {
    const templates = await Template.find();
    res.status(200).json(templates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 const getTemplateById = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.status(200).json(template);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 const downloadTemplate = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    template.downloads += 1;
    await template.save();
    res.status(200).json({ message: 'Download successful' });
  } catch (error) {
    res.status500().json({ message: error.message });
  }
};


module.exports= {
    createTemplate,
    getTemplateById,
    getTemplates,
    downloadTemplate
}