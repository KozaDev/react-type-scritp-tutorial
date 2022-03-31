import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const renderList = () => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img
              className="List-img"
              src={person.url}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://gravatar.com/avatar/4b518bfc8b832548287a51298edc556e?s=400&d=robohash&r=x";
              }}
              alt="Image not found"
            />
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
