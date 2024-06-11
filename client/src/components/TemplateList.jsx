// src/components/TemplateList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TemplateCard from './templateCard';

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios.get('/api/templates')
      .then(response => {
        setTemplates(response.data);
      })
      .catch(error => {
        console.error('Error fetching templates:', error);
      });
  }, []);

  const handleDownload = async (templateId, downloadLink) => {
    try {
      await axios.post(`/api/templates/${templateId}/download`);
      const updatedTemplates = templates.map(template =>
        template._id === templateId ? { ...template, downloads: template.downloads + 1 } : template
      );
      setTemplates(updatedTemplates);
      window.open(downloadLink, '_blank');
    } catch (error) {
      console.error('Error downloading template:', error);
    }
  };

  return (
    <div>
      <h1>Templates</h1>
      {Array.isArray(templates) && templates.map(template => (
        <TemplateCard key={template._id} template={template} onDownload={handleDownload} />
      ))}
    </div>
  );
};

export default TemplateList;
