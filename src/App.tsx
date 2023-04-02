import React from "react";
import { Typography, AppBar, Card, CardActions, CardMedia,CssBaseline,Grid,Toolbar,Container,BottomNavigation } from "@mui/material";

import SimpleBottomNavigation from "./simpleBottomNavigation";
import DroneCard from "./droneCard";
//import DroneCardList from "./droneCardList";
import MissionCardList from "./missionListCard";
import MissionCard from "./missionCard";

const App: React.FC = () => {
    return(
        <>
            <CssBaseline />
            <main>
            <div>
                <DroneCard/>  
                
            </div>
            </main>
          <div>
                <SimpleBottomNavigation />
          </div>
        </>
    );
}

export default App; 