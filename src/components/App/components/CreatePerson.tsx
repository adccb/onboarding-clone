import React, { useState } from "react";

import type { Person, Vocation } from "../../../types/";
import { vocations, isPerson, getPerson } from "../../../types/";

type CreatePersonProps = {
  createPerson: (arg0: Person) => void;
};

type CreatePersonState = {
  first?: string;
  last?: string;
  vocation?: Vocation;
};

const defaultState: CreatePersonState = {
  first: undefined,
  last: undefined,
  vocation: Object.values(vocations)[0],
};

const CreatePerson: React.FC<CreatePersonProps> = ({ createPerson }) => {
  const [formState, updateFormState] = useState(defaultState);

  const update = ({
    currentTarget,
  }:
    | React.KeyboardEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>) =>
    updateFormState({
      ...formState,
      [currentTarget.name]: currentTarget.value,
    });

  const submit = () => {
    const maybePerson = getPerson({ first, last, vocation });
    if (isPerson(maybePerson)) {
      createPerson(maybePerson);
      updateFormState(defaultState);
    } else alert("whoops");
  };

  const { first, last, vocation } = formState;

  return (
    <div>
      <input
        name="first"
        type="text"
        placeholder="first name"
        onKeyUp={update}
      />

      <input name="last" type="text" placeholder="last name" onKeyUp={update} />

      <select name="vocation" value={vocation} onChange={update}>
        {Object.values(vocations).map((vocation) => (
          <option value={vocation}>{vocation}</option>
        ))}
      </select>

      <button type="button" onClick={submit}>
        add
      </button>
    </div>
  );
};

export default CreatePerson;
