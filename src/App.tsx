import { Header } from "./components/header/header";
import { MainComponent } from "./components/main-component/main-component";
import { Player } from "./components/player/player";
import { Body } from "./components/body/body";
import "./App.css";
import { Table } from "./components/table/table";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState(true);

  return (
    <Body>
      <MainComponent>
        <Header player={player} setPlayer={setPlayer} />
        <Table player={player} setPlayer={setPlayer} />
      </MainComponent>
      <Player />
    </Body>
  );
}

export default App;
