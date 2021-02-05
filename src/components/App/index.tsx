import React, { useState } from "react";
import NavBar from "../NavBar";
import people from "../../people";
import { isSamePerson } from "../../types/";
import type { Person } from "../../types/";
// import handleApiCall from '../../api'

import "./main.css";

const App = () => {
  const [state, setState] = useState({ people });

  const deletePerson = (toDelete: Person) =>
    setState({
      people: state.people.filter((person) => !isSamePerson(person, toDelete)),
    });

  return (
    <div className="App">
      <NavBar />
      <ul>
        {state.people.map((person) => (
          <li>
            {`${person.name.first} ${person.name.last}: ${person.vocation}`} :{" "}
            <span onClick={(_) => deletePerson(person)}>delete</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
