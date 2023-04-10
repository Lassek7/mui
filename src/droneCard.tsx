import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomContainedButton from './customContainedButtons';
import { Airplay, NearMe } from '@mui/icons-material';
import Styles from './styles';

interface droneProps {
  iD: string;
  battery: number;
  altitude: number;
  location: {
    lat: number;
    lng: number;
  };  
  velocity: number;
}

export default function DroneCard(props: droneProps) {
  const { iD, battery, location, altitude } = props;
  const { lat, lng } = location;  return (
    <Card sx={Styles.droneCard}>
      <CardContent sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-8px' }}>
        <Typography sx={Styles.minSizeBold} >
          {iD} 
        </Typography>
        <Typography sx={Styles.minSizeReg}>
          {battery}%
        </Typography>
      </CardContent>
      <CardContent sx={{ marginTop: '-37px' }}>
        <Typography sx={Styles.minSizeReg}>
          {parseFloat(lat.toFixed(4))}, {parseFloat(lng.toFixed(4))}, {altitude}
        </Typography>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <CustomContainedButton buttonStyle={Styles.droneCardButtons} icon={<Airplay />} text='video'/>
        <CustomContainedButton buttonStyle={Styles.droneCardButtons} icon={<NearMe />} text='follow'/>
      </CardActions>
      </CardContent>
    </Card>
  );
}
