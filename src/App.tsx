import React from "react";
import { Typography, AppBar, Box, Card, CardActions, CardMedia,CssBaseline,Grid,Toolbar,Container,BottomNavigation } from "@mui/material";

import SimpleBottomNavigation from "./simpleBottomNavigation";
import DroneCard from "./droneCard";
import DroneListCard from "./droneListCard";
import MissionCardList from "./missionListCard";
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
                    <BottomSheet/>
                    <SimpleBottomNavigation />
                </div>

            </main>
        </Box>
    );
}

export default App; 