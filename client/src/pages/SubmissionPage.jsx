import React, { useState } from 'react';
import axios from 'axios';
import './SubmissionPage.css'; // Ensure this path is correct

const SubmissionPage = () => {
  const [authorInfo, setAuthorInfo] = useState({
    authorName: '',
    authorEmail: '',
    paypalAccount: '',
    mailblusterApiKey: '',
    authorWebsite: ''
  });

  const [templateInfo, setTemplateInfo] = useState({
    templateName: '',
    liveDemoUrl: '',
    tags: ''
  });

  const handleAuthorChange = (e) => {
    setAuthorInfo({ ...authorInfo, [e.target.name]: e.target.value });
  };

  const handleTemplateChange = (e) => {
    setTemplateInfo({ ...templateInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...authorInfo,
      ...templateInfo,
      tags: templateInfo.tags.split(',').map(tag => tag.trim())
    };

    try {
      const response = await axios.post('http://localhost:5000/api/templates/submit', data);
      alert('Template submitted successfully!');
    } catch (error) {
      console.error('Error submitting template:', error);
      alert('Failed to submit template');
    }
  };

  return (
    <div className="submission-page">
      <h1>Submit Your Template</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Author Info</h2>
          <label>Name</label>
          <input type="text" name="authorName" value={authorInfo.authorName} onChange={handleAuthorChange} required />
          <label>Email</label>
          <input type="email" name="authorEmail" value={authorInfo.authorEmail} onChange={handleAuthorChange} required />
          <label>Paypal Account</label>
          <input type="text" name="paypalAccount" value={authorInfo.paypalAccount} onChange={handleAuthorChange} required />
          <label>MailBluster API Key</label>
          <input type="text" name="mailblusterApiKey" value={authorInfo.mailblusterApiKey} onChange={handleAuthorChange} required />
          <label>Website</label>
          <input type="url" name="authorWebsite" value={authorInfo.authorWebsite} onChange={handleAuthorChange} required />
        </div>
        <div className="form-group">
          <h2>Template Info</h2>
          <label>Template Name</label>
          <input type="text" name="templateName" value={templateInfo.templateName} onChange={handleTemplateChange} required />
          <label>Live Demo URL</label>
          <input type="url" name="liveDemoUrl" value={templateInfo.liveDemoUrl} onChange={handleTemplateChange} required />
          <label>Tags</label>
          <input type="text" name="tags" value={templateInfo.tags} onChange={handleTemplateChange} placeholder="Comma separated values" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionPage;
