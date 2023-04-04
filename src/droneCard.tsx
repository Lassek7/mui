import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomContainedButton from './customContainedButtons';
import { Airplay, NearMe } from '@mui/icons-material';
import Styles from './styles';


export default function DroneCard() {
  return (
    <Card sx={Styles.droneCard}>
      <CardContent sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-8px' }}>
        <Typography sx={Styles.minSizeBold} >
          HCC01 
        </Typography>
        <Typography sx={Styles.minSizeReg}>
          30%
        </Typography>
      </CardContent>
      <CardContent sx={{ marginTop: '-37px' }}>
        <Typography sx={Styles.minSizeReg}>
          57.076423, 10.015043, 9.990
        </Typography>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <CustomContainedButton buttonStyle={Styles.droneCardButtons} icon={<Airplay />} text='video'/>
        <CustomContainedButton buttonStyle={Styles.droneCardButtons} icon={<NearMe />} text='follow'/>
      </CardActions>
      </CardContent>
    </Card>
  );
}
