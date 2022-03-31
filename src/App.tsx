import React, { useState } from "react";
import "./index.css";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://gravatar.com/avatar/4b518bfc8b832548287a51298edc556e?s=400&d=robohash&r=x",
      age: 33,
      note: "He is a good player",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
