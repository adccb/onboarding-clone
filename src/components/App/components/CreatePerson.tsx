import React, { useState } from "react";

import type { Person, Vocation } from "../../../types/";
import { vocations, isPerson, getPerson } from "../../../types/";

type CreatePersonProps = {
  createPerson: (arg0: Person) => Promise<void>;
};

type CreatePersonState = {
  first: string;
  last: string;
  vocation: Vocation;
};

const defaultState: CreatePersonState = {
  first: "",
  last: "",
  vocation: Object.values(vocations)[0],
};

const CreatePerson: React.FC<CreatePersonProps> = ({ createPerson }) => {
  const [formState, updateFormState] = useState(defaultState);

  const submit = () => {
    const maybePerson = getPerson({ first, last, vocation });
    if (isPerson(maybePerson))
      createPerson(maybePerson).then(() => {
        updateFormState(() => defaultState);
      });
    else alert("whoops");
  };

  const { first, last, vocation } = formState;

  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        value={first}
        onChange={(e) =>
          updateFormState({ ...formState, first: e.target.value })
        }
      />

      <input
        name="last"
        type="text"
        placeholder="last name"
        value={last}
        onChange={(e) =>
          updateFormState({ ...formState, last: e.target.value })
        }
      />

      <select
        name="vocation"
        value={vocation}
        onChange={(e) =>
          updateFormState({
            ...formState,
            vocation: e.target.value as Vocation,
          })
        }
      >
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
