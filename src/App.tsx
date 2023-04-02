import React from "react";
import { Typography, AppBar, Card, CardActions, CardMedia,CssBaseline,Grid,Toolbar,Container,BottomNavigation } from "@mui/material";

import SimpleBottomNavigation from "./simpleBottomNavigation";
import DroneCard from "./droneCard";
//import DroneCardList from "./DroneListCard";
import MissionCardList from "./missionListCard";
import MissionCard from "./missionCard";

const App: React.FC = () => {
    return(
        <>
            <CssBaseline />
            <main>
            <div>
                <DroneCard/>  
                <MissionCard/>
            </div>
            </main>
          <div>
                <SimpleBottomNavigation />
          </div>
        </>
    );
}

export default App; 