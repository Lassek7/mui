import React from "react";
import { Typography, AppBar, Box, Card, CardActions, CardMedia,CssBaseline,Grid,Toolbar,Container,BottomNavigation } from "@mui/material";

import SimpleBottomNavigation from "./simpleBottomNavigation";
import DroneCard from "./droneCard";
import MissionCard from "./missionCard";
import CompletedMap from "./completedMap";
import BottomSheet from "./bottomSheet";
import Styles from "./styles";



const App: React.FC = () => {
    return(
        <Box
        sx={Styles.appBackground}>
            <CssBaseline />
            <main>
                <div>
                    <CompletedMap />
                    <SimpleBottomNavigation />
                </div>

            </main>
        </Box>
    );
}

export default App; 