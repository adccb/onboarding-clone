import React from "react";

import type { Person } from "../../../types/";

type ListItemsProps = {
  items: Person[];
  deleteItem: (arg0: Person) => void;
};

const ListItems: React.FC<ListItemsProps> = ({ items, deleteItem }) => (
  <ul>
    {items.map((item) => (
      <li>
        {`${item.name.first} ${item.name.last}, ${item.vocation}`} :{" "}
        <span onClick={(_) => deleteItem(item)}>delete</span>
      </li>
    ))}
  </ul>
);

export default ListItems;
