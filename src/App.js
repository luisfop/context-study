import React,{ useState } from "react";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import About from "./pages/about";
import Index from "./pages";

import { UserContext } from "./context/UserContext";


function App() {

  const [value, setValue ] = useState("This a value")
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
        <UserContext.Provider value={{value, setValue}}>
          <Route path="/about/" component={About} />
          <Route path="/" exact component={Index} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
