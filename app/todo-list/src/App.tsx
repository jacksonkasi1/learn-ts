import React, { FC } from "react";

// ** import components **
import InputArea from "./components/InputArea";
import { Task } from "./interfaces";
import TodoItems from "./components/TodoItems";

const App: FC = () => {
  const [items, setItems] = React.useState<Task[]>([]);

  const addItems = (inputText: string): void => {
    setItems((prevItems: Task[]): Task[] => {
      return [
        ...prevItems,
        { id: Math.floor(Math.random() * (100 - 1)) + 1, text: inputText },
      ];
    });
  };

  console.log(items);

  const handleDelete = (id: number): void => {
    setItems((prevItems: Task[]): Task[] => {
      return prevItems.filter((item: Task) => item.id !== id);
    });
  };

  return (
    <div className="app">
      <div className="app__title">
        <h1>Todo List</h1>
      </div>
      <InputArea addItems={addItems} />
      <br />

      {items.length === 0 ? (
        <h1>Nothing to do</h1>
      ) : (
        items.map((item: Task, index: number) => (
          <TodoItems key={index} {...item} handleDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default App;
