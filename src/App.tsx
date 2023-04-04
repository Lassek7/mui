import React, { useState } from "react";
import { Box, CssBaseline, BottomNavigation } from "@mui/material";
import SimpleBottomNavigation from "./simpleBottomNavigation";
import DroneCard from "./droneCard";
import MissionCard from "./missionCard";
import CompletedMap from "./completedMap";
import BottomSheet from "./bottomSheet";
import Styles from "./styles";

type ActiveComponent = "drones" | "missions" | "weather" | "history" | "help" | null;

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>(null);

  const handleButtonClick = (component: ActiveComponent) => {
    setActiveComponent((prevComponent) => (prevComponent === component ? null : component));
  };

  const getCardComponent = () => {
    switch (activeComponent) {
      case "drones":
        return DroneCard;
      case "missions":
        return MissionCard;
      case "weather":
      case "history":
      case "help":
        return MissionCard; // Replace with the respective components when they are available
      default:
        return null;
    }
  };

  const CardComponent = getCardComponent();

  return (
    <Box sx={Styles.appBackground}>
      <CssBaseline />
      <main>
        <div>
          <CompletedMap size={activeComponent ? "half" : "full"} />
          {CardComponent && <BottomSheet cardComponent={CardComponent} />}
          <SimpleBottomNavigation
            onDronesClick={() => handleButtonClick("drones")}
            onMissionsClick={() => handleButtonClick("missions")}
            onWeatherClick={() => handleButtonClick("weather")}
            onHelpClick={() => handleButtonClick("help")}
            onHistoryClick={() => handleButtonClick("history")}
          />
        </div>
      </main>
    </Box>
  );
};

export default App;