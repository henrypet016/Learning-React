// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Link to="/page-one">Go to Page One</Link>
      <br />
      <Link to="/page-two">Go to Page Two</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </Router>
  );
};

export default App;
