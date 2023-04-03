import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Home } from '@mui/icons-material';

export default function SimpleBottomNavigation() {

  return (
    <Box sx={{width: '100%', position: 'fixed', bottom: 0}}>
        <BottomNavigation
          sx={{height: "90px", display: 'flex', justifyContent: 'space-between' , backgroundColor:'#2F2E32'}}>

          <Box sx={{marginTop: "25px"}}>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} showLabel sx={{ color: '#BFBBBB' }} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} showLabel sx={{ color: '#BFBBBB' }}/>
          </Box>
          
          <Box sx={{marginTop: "25px"}}>
            <BottomNavigationAction label="Nearby" icon={<Home />} showLabel sx={{ color: '#BFBBBB' }}/>
            <BottomNavigationAction label="Nearby" icon={<Home />} showLabel sx={{ color: '#BFBBBB' }}/>
          </Box>
       
        </BottomNavigation>
    </Box>
  );
}