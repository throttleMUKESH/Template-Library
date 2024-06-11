const express = require('express');
const {createTemplate, downloadTemplate, getTemplates, getTemplateById} = require('../controllers/templateController.js');

const router = express.Router();

// Route to submit a new template
router.post('/submit', createTemplate);

// Route to download a template by ID
router.post('/:id/download', downloadTemplate);

// Route to get all templates
router.get('/', getTemplates);

// Route to get a template by ID
router.get('/:id', getTemplateById);

module.exports = router;
