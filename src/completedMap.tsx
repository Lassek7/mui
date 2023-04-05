import * as React from 'react';
import MapComponent from './mapComponent';
import { Box, IconButton } from '@mui/material';
import { LayersOutlined, WarningAmber } from '@mui/icons-material';
import Styles from './styles';
import ZoomControl from './zoomComponent';

type CompletedMapProps = {
  size: "full" | "half";
  onPolygonDrawn: (area: number) => void;
};


const CompletedMap: React.FC<CompletedMapProps> = ({ size, onPolygonDrawn }) => {
  const mapStyle = size === "full" ? Styles.fullMap : Styles.halfMap;
      return (
      <Box sx={mapStyle}  className="mapContainer">
      <MapComponent onPolygonDrawn={onPolygonDrawn} />
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
