import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Styles from './styles';
import { Map as MapboxMap } from 'mapbox-gl';
import {useEffect, useState} from 'react';

interface ZoomControlProps {
  map?: MapboxMap | null;
}

const ZoomControl: React.FC<ZoomControlProps> = ({ map }) => {
  const [currentMap, setCurrentMap] = useState<MapboxMap | null>(map || null);
  
  useEffect(() => {
    if (map !== undefined) {
      setCurrentMap(map);
    }  }, [map]);

  
  const handleZoomIn = () => {
      if (currentMap){
        currentMap.zoomIn()
      }
    };
  
    const handleZoomOut = () => {
        if(currentMap){
          currentMap.zoomOut();
        }
    };
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton onClick={handleZoomIn} size="small" sx={Styles.plusBtn}>
          <AddIcon />
        </IconButton>
        <Box sx={{ width: '100%', height: 1, bgcolor: '#FFFFFF' }} />
        <IconButton onClick={handleZoomOut} size="small" sx={Styles.minusBtn}>
          <RemoveIcon />
        </IconButton>
      </Box>
    );
  };

  export default ZoomControl;
