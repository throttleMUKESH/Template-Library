import React from 'react';

const TemplateCard = ({ template, onDownload }) => {
  const handleDownload = () => {
    onDownload(template._id, template.downloadLink);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{template.templateName}</div>
        <p className="text-gray-700 text-base">Author: {template.authorName}</p>
        <p className="text-gray-700 text-base">Description: {template.templateDescription}</p>
        <p className="text-gray-700 text-base">Downloads: {template.downloads}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => window.open(template.liveDemoUrl, '_blank')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Live Preview
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
