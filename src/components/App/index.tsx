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

  // api actions: keeping everything as promises, so the
  // consuming components can just .then and be sure that
  // the api action has completed before updating frontend state

  const addPerson = (toAdd: Person) =>
    // add the person, and update local state with the result
    handleApiCall({ verb: "PUT", person: toAdd }).then((person) =>
      setState({
        people: [toAdd, ...state.people],
      })
    );

  const deletePerson = (toDelete: Person) =>
    // delete the person, then use the result to filter out local state
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
