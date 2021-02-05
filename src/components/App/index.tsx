import React, { useState } from "react";
import NavBar from "../NavBar";
import people from "../../people";
import { isSamePerson } from "../../types/";
import type { Person } from "../../types/";
import ListItems from "./components/ListItems";
import CreatePerson from "./components/CreatePerson";
import handleApiCall from "../../api";

import "./main.css";

const App = () => {
  const [state, setState] = useState({ people });

  // add the person, and update local state with the result
  const addPerson = (toAdd: Person) =>
    handleApiCall({ verb: "PUT", person: toAdd }).then((person) =>
      setState({
        people: [toAdd, ...state.people],
      })
    );

  // delete the person, then use the result to filter out local state
  const deletePerson = (toDelete: Person) =>
    handleApiCall({ verb: "DELETE", person: toDelete }).then((person) =>
      setState({
        people: state.people.filter(
          (person) => !isSamePerson(person, toDelete)
        ),
      })
    );

  return (
    <div className="App">
      <NavBar />
      <CreatePerson createPerson={addPerson} />
      <ListItems items={state.people} deleteItem={deletePerson} />
    </div>
  );
};

export default App;
