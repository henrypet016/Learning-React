// PageOne.js

import React from 'react';
import Home from './App';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PageTwo from './PageTwo';

const PageOne = () => {
  return (
    <div>
      <h2>This is Page One</h2>
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/page-two">Go to Page Two</Link>
    </div>
  );
};

const App2 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/" element={<Home />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </Router>
  );
};

export default App2;
export {
  PageOne,
}
