import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Getthree from './Getthree';
import PageTwo from './PageTwo';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/article-picker">Page One</Link>
            </li>
            <li>
              <Link to="/page-two">Page Two</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/article-picker" component={Getthree} />
        <Route path="/page-two" component={PageTwo} />
      </div>
    </Router>
  );
};

export default App;