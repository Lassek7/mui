import React, { useState } from "react";
import { Box, CssBaseline, BottomNavigation } from "@mui/material";
import SimpleBottomNavigation from "./simpleBottomNavigation";
import DroneCard from "./droneCard";
import MissionCard from "./missionCard";
import CompletedMap from "./completedMap";
import BottomSheet from "./bottomSheet";
import Styles from "./styles";
import DronesList from "./dronesList";
import MissionsList from "./missionsList";



type ActiveComponent = "drones" | "missions" | "weather" | "history" | "help" | null;

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>(null);
  const [polygonArea, setPolygonArea] = useState<number | null>(null);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [handleDeleteSelected, setHandleDeleteSelected] = useState<(() => void) | null>(null);
  const [missions, setMissions] = useState<Array<any>>([]);

  
  const toggleDrawing = () => {
    setIsDrawing(true);
  };

  const handlePolygonDrawn = (area: number) => {
    console.log('Area:', area); // Debugging
    setMissions((prevMissions) => [
      ...prevMissions,
      {
        id: prevMissions.length + 1,
        area
      },
    ]);
  };

  const handleButtonClick = (component: ActiveComponent) => {
    setActiveComponent((prevComponent) => (prevComponent === component ? null : component));
  };

  const getCardComponent = () => {
    switch (activeComponent) {
      case "drones":
        return DronesList;
      case "missions":
        return MissionsList;
      case "weather":
      case "history":
      case "help":
        return MissionsList; // Replace with the respective components when they are available
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
          <CompletedMap size={activeComponent ? "half" : "full"} onPolygonDrawn={handlePolygonDrawn} isDrawing={isDrawing} setHandleDeleteSelected={setHandleDeleteSelected} onDrawingComplete={() => setIsDrawing(false)}/>
          {CardComponent && <CardComponent toggleDrawing={toggleDrawing} handleDeleteSelected={handleDeleteSelected} missions={missions} setMissions={setMissions}/>}
          <SimpleBottomNavigation
            onDronesClick={() => handleButtonClick("drones")}
            onMissionsClick={() => handleButtonClick("missions")}
            onWeatherClick={() => handleButtonClick("weather")}
            onHelpClick={() => handleDeleteSelected && handleDeleteSelected()}
            onHistoryClick={()=> handleButtonClick("history")}
          />
        </div>
      </main>
    </Box>
  );
};

export default App;

