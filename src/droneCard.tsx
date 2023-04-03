import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import CustomButton from './customButtons';
import { Air, Airplay, NearMe } from '@mui/icons-material';
import Styles from './styles';


export default function DroneCard() {
  return (
    <Card sx={{ maxWidth: '308px',maxHeight: '159px',  border: '1px solid #3B82F7', borderRadius:"12px", backgroundColor:'#2F2B3E', color: "#BFBBBB"}}>
      <CardContent sx={{display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" >
          HCC001
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          30%
        </Typography>
      </CardContent>
      <CardContent sx={{marginTop: '-30px'}}>
        <Typography variant="h6" component="div" gutterBottom>
          Limfjordsbroen         
        </Typography>
        <Typography sx={{ mb: 1.5, marginTop: '-10px' }}>
          57.076423, 10.015043, 9.990
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-25px', marginLeft: "5px", marginRight:"5px", marginBottom: "5px"}}>
        <CustomButton buttonStyle={Styles.menuCTA} icon={<Airplay />} text='start video'/>
        <CustomButton buttonStyle={Styles.menuCTA} icon={<NearMe />} text='follow drone'/>
      </CardActions>
    </Card>
  );
  
}