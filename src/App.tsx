import React from "react";
import { Typography, AppBar, Box, Card, CardActions, CardMedia,CssBaseline,Grid,Toolbar,Container,BottomNavigation } from "@mui/material";

import SimpleBottomNavigation from "./simpleBottomNavigation";
import DroneCard from "./droneCard";
import MissionCard from "./missionCard";
import CompletedMap from "./completedMap";
import BottomSheet from "./bottomSheet";



const App: React.FC = () => {
    return(
        <Box
        sx={{
          backgroundColor: '#FFFFFF', // Replace with your desired color
          width: '100%',
          minHeight: '100vh', // Ensure the background color covers the full viewport height
        }}>
            <CssBaseline />
            <main>
                <div>
                    <CompletedMap />
                    <BottomSheet cardComponent={DroneCard}/>
                    <SimpleBottomNavigation />
                </div>

            </main>
        </Box>
    );
}

export default App; 