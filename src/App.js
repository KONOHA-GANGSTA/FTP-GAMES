import appStyles from "./App.css";
import { GameGrid } from "./GameGrid/GameGrid";
import { Header } from "./Header/Header";
import { CardSkeleton } from "./CardSkeleton/CardSkeleton";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className={appStyles.app}>
      {/* <CardSkeleton /> */}
      {/* <Header str="FREE TO PLAY" /> */}
      <GameGrid />
    </div>
    </ThemeProvider>
  );
}

export default App;
