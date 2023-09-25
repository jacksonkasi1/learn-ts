import React from "react";

interface Props {
  addItems: (inputText: string) => void;
}

const InputArea: React.FC<Props> = ({ addItems }) => {
  const [inputText, setInputText] = React.useState<string>("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputText(event.target.value);
  };

  const handleAdd = (): void => {
    addItems(inputText);
    setInputText("");
  };

  return (
    <div className="inputFiled">
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default InputArea;
