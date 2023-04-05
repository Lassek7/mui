import * as React from 'react';
import DroneCard from './droneCard';
import MissionCard from './missionCard';
import { Box, Card, Typography, CardActions, Button } from '@mui/material';
import map from "lodash/map";
import range from "lodash/range"
import Styles from './styles';
import { drones } from './mockData';

type MissionsListProps = {
  toggleDrawing: () => void;
}

export default function MissionsList({ toggleDrawing }: MissionsListProps) {


  return (
      <Card sx={Styles.mainCard}>
        <CardActions sx={Styles.CardActionsInCards}>
          <Typography sx={Styles.minSizeBold}> Searching Limfjordsbroen</Typography>
          <Button onClick={toggleDrawing}> create mission </Button>
          <Button> delete mission </Button>
        </CardActions>
        <CardActions style={Styles.CardActionsInCards}>
          {map(range(10), _ => (
              <div>
                  <Container />
              </div>
              ))}
        </CardActions>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
      </Card>
    );
}

const Container = () => {

  return (
    <div style={{ width: "356px", height: "146px"}}> 
      <MissionCard />
    </div>
  );
};