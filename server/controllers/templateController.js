import Template from '../models/Template.js';

export const createTemplate = async (req, res) => {
  try {
    const newTemplate = new Template(req.body);
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
