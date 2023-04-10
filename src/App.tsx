import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import SimpleBottomNavigation from "./simpleBottomNavigation";
import CompletedMap from "./completedMap";
import Styles from "./styles";
import DronesList from "./dronesList";
import MissionsList from "./missionsList";
import { drones } from "./mockData";



type ActiveComponent = "drones" | "missions" | "weather" | "history" | "help" | null;

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>(null);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [handleDeleteSelected, setHandleDeleteSelected] = useState<(() => void) | null>(null);
  const [missions, setMissions] = useState<Array<any>>([]);
  const [allDrones, setAllDrones] = useState<Array<any>>(drones); // Added this line
  const [moveDroneInterval, setMoveDroneInterval] = useState<any>(null);

  
  const lerp = (start: number, end: number, t: number) => {
    return start + t * (end - start);
  };
  
  const moveDrone = (droneId: string, destinationLng: number, destinationLat: number) => {
    const drone = allDrones.find((drone) => drone.id === droneId);
    if (drone) {
      const distanceLng = destinationLng - drone.location.lng;
      const distanceLat = destinationLat - drone.location.lat;
  
      // Calculate the unit vector pointing towards the destination
      const distance = Math.sqrt(distanceLng * distanceLng + distanceLat * distanceLat);
      const unitVectorLng = distanceLng / distance;
      const unitVectorLat = distanceLat / distance;
  
      // Update the drone's location based on velocity
      const newLng = drone.location.lng + unitVectorLng * drone.velocity;
      const newLat = drone.location.lat + unitVectorLat * drone.velocity;
  
      // Stop moving if the drone is close enough to the destination
      const stopThreshold = drone.velocity / 2; // You can adjust this threshold value as needed
      if (Math.abs(distanceLng) <= stopThreshold && Math.abs(distanceLat) <= stopThreshold) {
        // Snap the drone's location to the destination
        drone.location.lng = destinationLng;
        drone.location.lat = destinationLat;
  
        // Update the drone's location in the state
        setAllDrones((prevDrones) => [...prevDrones]);
  
        clearInterval(moveDroneInterval);
        setMoveDroneInterval(null);
      } else {
        // Update the drone's location using lerp
        drone.location.lng = lerp(drone.location.lng, newLng, 0.1);
        drone.location.lat = lerp(drone.location.lat, newLat, 0.1);
  
        // Update the drone's location in the state
        setAllDrones((prevDrones) => [...prevDrones]);
      }
    }
  };
  
  

  const startDroneMovement = (droneId: string, destinationLng: number, destinationLat: number) => {
    if (!moveDroneInterval) {
      const interval = setInterval(() => {
        moveDrone(droneId, destinationLng, destinationLat);
      }, 1); // You can change the interval duration (in milliseconds) based on your needs
      setMoveDroneInterval(interval);
    }
  };  

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
        return null; // Replace with the respective components when they are available
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
          <CompletedMap size={activeComponent ? "half" : "full"} onPolygonDrawn={handlePolygonDrawn} isDrawing={isDrawing} setHandleDeleteSelected={setHandleDeleteSelected} onDrawingComplete={() => setIsDrawing(false)} allDrones={allDrones}/>
          {CardComponent && <CardComponent toggleDrawing={toggleDrawing} handleDeleteSelected={handleDeleteSelected} missions={missions} setMissions={setMissions} allDrones={allDrones}/>}
          <SimpleBottomNavigation
            onDronesClick={() => handleButtonClick("drones")}
            onMissionsClick={() => handleButtonClick("missions")}
            onWeatherClick={() => handleButtonClick("weather")}
            onHelpClick={() => handleButtonClick("help")}
            onHistoryClick={() => startDroneMovement("HCC001",9.934, 57.053)}
          />
        </div>
      </main>
    </Box>
  );
};

export default App;

