import * as React from 'react';
import DroneCard from './droneCard';
import {Card, Typography, CardActions } from '@mui/material';
import Styles from './styles';

type DronesListProps = {
  drones: Array<Drones>;
}

interface Drones {
  id: string;
  battery: number;
  altitude: number;
  location: {
    lat: number;
    lng: number;
  };}


export default function DronesList({ drones }: DronesListProps) {
   
  return (
      <Card sx={Styles.mainCard}>
        <CardActions sx={Styles.CardActionsInCards}>
          <Typography sx={Styles.minSizeBold}> Searching Limfjordsbroen</Typography>
        </CardActions>
        <CardActions style={Styles.CardActionsInCards}>
          {drones.map(drones => (
            <div>
              <DroneCard iD={drones.id} altitude={drones.altitude} battery={drones.battery} location={drones.location} />
            </div>
            ))}
        </CardActions>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
      </Card>
    );
}

const Container = ({ drones }: { drones: Drones }) => {
  return (
    <div style={{ width: "356px", height: "146px"}}> 
      <DroneCard iD={drones.id} altitude={drones.altitude} battery={drones.battery} location={drones.location}/>
    </div>
  );
};
