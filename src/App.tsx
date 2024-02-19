import { useState } from "react";
import "./App.css";
import Market from "./components/Market";
import { DEFAULT_STATS } from "./constants/defaultStats";

function App() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  return (
    <>
      <Market />
    </>
  );
}

export default App;
