import React from "react";

import { Task } from "../interfaces";

interface Props extends Task {
  handleDelete: (id: number) => void;
}

const TodoItems: React.FC<Props> = ({ id, text, handleDelete }) => {
  return (
    <div className="todoItems">
      <div className="todoItems__item">{text}</div>
      <button className="todoItems__delete" onClick={(): void => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItems;
