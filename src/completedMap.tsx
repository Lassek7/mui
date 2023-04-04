import * as React from 'react';
import MapComponent from './mapComponent';
import { Box, IconButton } from '@mui/material';
import { LayersOutlined, WarningAmber } from '@mui/icons-material';
import Styles from './styles';
import ZoomControl from './zoomComponent';



const CompletedMap: React.FC = () => {
    return (
      <Box sx={Styles.fullMap}>
        <MapComponent />
          <Box sx={{position: "absolute", top: 10, right: 10}}>
            <IconButton  sx={Styles.emergency}>
                <WarningAmber/>
            </IconButton>
          </Box>
          <Box sx={{position: "absolute", bottom: 10, right: 10, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <ZoomControl />           
            </Box>  
              <IconButton  sx={Styles.layerBtn}>
                <LayersOutlined />
              </IconButton>          
          </Box>
      </Box>
    );
  };

export default CompletedMap;
