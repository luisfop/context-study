import React from "react";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import About from "./pages/about";
import Index from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/about/" component={About}/>
        <Route path="/" exact component={Index}/>
      </div>
    </Router>
  );
}

export default App;
