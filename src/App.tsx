import { useState } from "react";
import "./App.css";
import StatGlory from "./components/StatGlory";
import StatHappy from "./components/StatHappy";
import { DEFAULT_STATS } from "./constants/defaultStats";
import Skills from "./components/Skills";

function App() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  return (
    <>
      <StatGlory value={stats.glory} />
      <StatHappy value={stats.happy} />
      <Skills str={stats.str} agi={stats.agi} int={stats.int} />
    </>
  );
}

export default App;
