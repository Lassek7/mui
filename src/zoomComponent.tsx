import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Styles from './styles';

const ZoomControl = () => {
    const handleZoomIn = () => {
      // Implement your zoom in functionality here
    };
  
    const handleZoomOut = () => {
      // Implement your zoom out functionality here
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
  