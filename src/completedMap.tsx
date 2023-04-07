import * as React from 'react';
import { useEffect, useState } from 'react';
import MapComponent from './mapComponent';
import { Box, IconButton } from '@mui/material';
import { LayersOutlined, WarningAmber } from '@mui/icons-material';
import Styles from './styles';
import ZoomControl from './zoomComponent';

type CompletedMapProps = {
  size: "full" | "half";
  onPolygonDrawn: (area: number) => void;
  isDrawing: boolean;
  setHandleDeleteSelected: (fn: () => void) => void;
  onDrawingComplete: () => void; // Add this line
  drones: Array<Drones>;
};

interface Drones {
  id: string;
  battery: number;
  altitude: number;
  location: {
    lat: number;
    lng: number;
  };}

const CompletedMap: React.FC<CompletedMapProps> = ({ size, onPolygonDrawn, isDrawing, setHandleDeleteSelected, onDrawingComplete, drones }) => {
  const mapStyle = size === "full" ? Styles.fullMap : Styles.halfMap;
  const mapComponentRef = React.useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);


  useEffect(() => {
    if (mapComponentRef.current) {
      setHandleDeleteSelected(() => mapComponentRef.current.handleDeleteSelected);
    }
  }, [mapComponentRef, setHandleDeleteSelected]);

    return (
      <Box sx={mapStyle}  className="mapContainer">
      <MapComponent ref={mapComponentRef} onPolygonDrawn={onPolygonDrawn} isDrawing={isDrawing} onDrawingComplete={onDrawingComplete} onMapLoaded={() => setIsMapLoaded(true)} drones={drones}/>
          <Box sx={{position: "absolute", top: 10, right: 10}}>
            <IconButton  sx={Styles.emergency}>
                <WarningAmber/>
            </IconButton>
          </Box>
          <Box sx={{position: "absolute", bottom: 10, right: 10, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
            {isMapLoaded && <ZoomControl map={mapComponentRef.current?.map} />}

          </Box>  
              <IconButton  sx={Styles.layerBtn}>
                <LayersOutlined />
              </IconButton>          
          </Box>
      </Box>
    );
  };

export default CompletedMap;
