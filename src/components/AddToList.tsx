import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        name="name"
        placeholder="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        placeholder="image url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
      />
      <textarea
        name="note"
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      ></textarea>
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
