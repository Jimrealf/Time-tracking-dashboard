import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Profile from "./Profile";
import Activities from "./Activities";

function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");

  const handleTimeframeClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  return (
    <main>
      <div className="main">
        <Profile
          data={data}
          selectedTimeframe={selectedTimeframe}
          handleTimeframeClick={handleTimeframeClick}
        />
        <Activities data={data} selectedTimeframe={selectedTimeframe} />
      </div>
    </main>
  );
}

export default App;
