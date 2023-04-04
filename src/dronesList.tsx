import * as React from 'react';
import DroneCard from './droneCard';
import {Card, Typography, CardActions } from '@mui/material';
import Styles from './styles';
import { drones } from './mockData';

interface Drone {
  id: string;
  battery: number;
  altitude: number;
  location: {
    lat: number;
    lng: number;
  };}

export default function DronesList() {
   
  return (
      <Card sx={Styles.mainCard}>
        <CardActions sx={Styles.CardActionsInCards}>
          <Typography sx={Styles.minSizeBold}> Searching Limfjordsbroen</Typography>
        </CardActions>
        <CardActions style={Styles.CardActionsInCards}>
          {drones.map(drone => (
            <div>
              <Container drone={drone} />
            </div>
            ))}
        </CardActions>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
      </Card>
    );
}

const Container = ({ drone }: { drone: Drone }) => {
  return (
    <div style={{ width: "356px", height: "146px"}}> 
      <DroneCard iD={drone.id} altitude={drone.altitude} battery={drone.battery} location={drone.location}/>
    </div>
  );
};
