import * as React from 'react';
import DroneCard from './droneCard';
import {Card, Typography, CardActions } from '@mui/material';
import Styles from './styles';

type DronesListProps = {
  allDrones: Array<allDrones>;
}

interface allDrones {
  id: string;
  battery: number;
  altitude: number;
  location: {
    lat: number;
    lng: number;
  };
  velocity: number;
}


export default function DronesList({ allDrones }: DronesListProps) {
   
  return (
      <Card sx={Styles.mainCard}>
        <CardActions sx={Styles.CardActionsInCards}>
          <Typography sx={Styles.minSizeBold}> Searching Limfjordsbroen</Typography>
        </CardActions>
        <CardActions style={Styles.CardActionsInCards}>
          {allDrones.map(allDrones => (
            <div>
              <DroneCard iD={allDrones.id} altitude={allDrones.altitude} battery={allDrones.battery} location={allDrones.location} velocity={allDrones.velocity}/>
            </div>
            ))}
        </CardActions>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
      </Card>
    );
}

const Container = ({ allDrones }: { allDrones: allDrones }) => {
  return (
    <div style={{ width: "356px", height: "146px"}}> 
      <DroneCard iD={allDrones.id} altitude={allDrones.altitude} battery={allDrones.battery} location={allDrones.location} velocity={allDrones.velocity}/>
    </div>
  );
};
