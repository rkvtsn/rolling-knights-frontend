import "./App.css";
import Market from "./components/Market";
import Bag from "./components/Bag";
import { PlayerProvider } from "./contexts/PlayerContext";

function App() {
  return (
    <PlayerProvider>
      <Bag />
      <Market />
    </PlayerProvider>
  );
}

export default App;
