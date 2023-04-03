import * as React from 'react';
import MapComponent from './mapComponent';
import CustomButton from './customButtons';
import { Box } from '@mui/material';
import { Padding, WarningAmber } from '@mui/icons-material';
import Styles from './styles';
import SimpleBottomNavigation from './simpleBottomNavigation';



const CompletedMap: React.FC = () => {
    return (
      <Box sx={Styles.halfMap}>
        <MapComponent />
        <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
        </Box>
      </Box>
    );
  };

export default CompletedMap;
       // <Box sx={{ position: 'absolute', left: '10px', right: '10px', top: '10px', bottom: '65px' }}>
//            <Box sx={{ padding: "15px", borderRadius: "10px", overflow: "hidden" }}>
