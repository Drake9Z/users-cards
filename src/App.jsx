import React from "react";
import './App.css'
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <h1>Albums</h1>
      <div className="albums">
        <Card
          picture={"https://picsum.photos/id/27/3264/1836"}
          title={"world tour"}
          album={"new generation"}
          genre={"jazz"}
        />
        <Card
          picture={"https://picsum.photos/id/111/4400/2656"}
          title={"music loud"}
          album={"2005"}
          genre={"rock"}
        />
        <Card
          picture={"https://picsum.photos/id/39/3456/2304"}
          title={"world tour"}
          album={"90s restored"}
          genre={"classical"}
        />
        <Card
          picture={"https://picsum.photos/id/452/4096/2722"}
          title={"coding beats"}
          album={"beats to study"}
          genre={"electronic"}
        />
      </div>
    </div>
  );
};

export default App;
