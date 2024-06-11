import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmissionPage from './pages/SubmissionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/submit" element={<SubmissionPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
