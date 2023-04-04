import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { HistoryOutlined, HelpOutline, CloudQueue, PolylineOutlined, FlightTakeoff } from '@mui/icons-material';
import Styles from './styles';
import DronesList from './dronesList';

interface SimpleBottomNavigationProps {
  onDronesClick: () => void;
  onMissionsClick: () => void;
  onWeatherClick: () => void;
  onHistoryClick: () => void;
  onHelpClick: () => void;
}

export default function SimpleBottomNavigation({
  onDronesClick,
  onMissionsClick,
  onWeatherClick,
  onHistoryClick,
  onHelpClick,
  }: SimpleBottomNavigationProps) {
  
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0}}>
      <BottomNavigation sx={Styles.bottomMenu}>
        <Box>
          <BottomNavigationAction label="Help" icon={<HelpOutline  />} showLabel sx={Styles.bottomMenuLabels} onClick={onHelpClick}/>
          <BottomNavigationAction label="Weather" icon={<CloudQueue  />} showLabel sx={Styles.bottomMenuLabels} onClick={onWeatherClick} />
          <BottomNavigationAction label="History" icon={<HistoryOutlined  />} showLabel sx={Styles.bottomMenuLabels} onClick={onHistoryClick} />
        </Box>

        <Box>
          <BottomNavigationAction label="Missions" icon={<PolylineOutlined  />} showLabel sx={Styles.bottomMenuLabels} onClick={onMissionsClick}/>
          <BottomNavigationAction label="Drones" icon={<FlightTakeoff  />} showLabel sx={Styles.bottomMenuLabels} onClick={onDronesClick} />
        </Box>
      </BottomNavigation>
    </Box>
  );
}