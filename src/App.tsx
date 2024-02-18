import { useState } from "react";
import "./App.css";
import GloryStat from "./components/GloryStat";
import { DEFAULT_STATS } from "./constants/defaultStats";
import HappyStat from "./components/HappyStat";

function App() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  return (
    <>
      <div>HELLo</div>
      <GloryStat value={stats.glory} />
      <HappyStat value={stats.happy} />
    </>
  );
}

export default App;
