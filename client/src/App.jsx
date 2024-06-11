import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmissionPage from "./pages/SubmissionPage";
import TemplateList from "./components/TemplateList"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/submit" element={<SubmissionPage />} />
        <Route path="/" element={<TemplateList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
