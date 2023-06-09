import React, { useState } from "react";
import './App.css'
import users from './data/users.json'
import UserCard from "./components/UserCard";

const App = () => {
  
  const [index, setIndex] = useState(1)

  const changeCard = () => {
    setIndex(Math.floor(Math.random() * 10))
  }

  return (
    <div className="App">
      <UserCard
        users={users[index]}
        index={index}
      />
      <button onClick={changeCard}><i className="bx bx-shuffle"></i></button>
    </div>
  );
};

export default App;
