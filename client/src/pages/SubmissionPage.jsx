import React, { useState } from 'react';

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
    downloadLink: '',
    templateDescription: '',
    tags: ''
  });

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setAuthorInfo({
      ...authorInfo,
      [name]: value
    });
  };

  const handleTemplateChange = (e) => {
    const { name, value } = e.target;
    setTemplateInfo({
      ...templateInfo,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      authorInfo,
      templateInfo
    };

    try {
      const response = await fetch('http://localhost:5000/api/templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      // Optionally, reset the form or show a success message
    } catch (error) {
      console.error('Error:', error);
      // Optionally, show an error message
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-8 text-center">Submit Your Template</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Author Info</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="authorName"
                value={authorInfo.authorName}
                onChange={handleAuthorChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="authorEmail"
                value={authorInfo.authorEmail}
                onChange={handleAuthorChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Paypal Account</label>
              <input
                type="text"
                name="paypalAccount"
                value={authorInfo.paypalAccount}
                onChange={handleAuthorChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">MailBluster API Key</label>
              <input
                type="text"
                name="mailblusterApiKey"
                value={authorInfo.mailblusterApiKey}
                onChange={handleAuthorChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Website</label>
              <input
                type="url"
                name="authorWebsite"
                value={authorInfo.authorWebsite}
                onChange={handleAuthorChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Template Info</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Template Name</label>
              <input
                type="text"
                name="templateName"
                value={templateInfo.templateName}
                onChange={handleTemplateChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Live Demo URL</label>
              <input
                type="url"
                name="liveDemoUrl"
                value={templateInfo.liveDemoUrl}
                onChange={handleTemplateChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Download Link</label>
              <input
                type="url"
                name="downloadLink"
                value={templateInfo.downloadLink}
                onChange={handleTemplateChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Template Description</label>
              <textarea
                name="templateDescription"
                value={templateInfo.templateDescription}
                onChange={handleTemplateChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tags</label>
              <input
                type="text"
                name="tags"
                value={templateInfo.tags}
                onChange={handleTemplateChange}
                placeholder="Comma separated values"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmissionPage;
