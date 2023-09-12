import appStyles from "./App.css";
import { GameGrid } from "./GameGrid/GameGrid";
import { Header } from "./Header/Header";

function App() {
  return (
    <div className={appStyles.app}>
      <Header str="FREE TO PLAY" />
      <GameGrid />
    </div>
  );
}

export default App;
