import React from "react";
import NavBar from "../NavBar";
import people from "../../people";
// import handleApiCall from '../../api'

import "./main.css";

const App = () => (
  <div className="App">
    <NavBar />
    <ul>
      {people.map(({ name: { first, last }, vocation }) => (
        <li>{`${first} ${last}: ${vocation}`}</li>
      ))}
    </ul>
  </div>
);

export default App;
