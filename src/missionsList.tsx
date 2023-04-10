import * as React from 'react';
import DroneCard from './droneCard';
import MissionCard from './missionCard';
import { Box, Card, Typography, CardActions, Button } from '@mui/material';
import map from "lodash/map";
import range from "lodash/range"
import Styles from './styles';

type MissionsListProps = {
  toggleDrawing: () => void;
  handleDeleteSelected: (() => void) | null;
  missions: Array<any>;
  setMissions: React.Dispatch<React.SetStateAction<Array<any>>>;
}

export default function MissionsList({ toggleDrawing , handleDeleteSelected, missions, setMissions}: MissionsListProps) {


  return (
      <Card sx={Styles.mainCard}>
        <CardActions sx={Styles.CardActionsInCards}>
          <Typography sx={Styles.minSizeBold}> Searching Limfjordsbroen</Typography>
          <Button onClick={toggleDrawing}> create mission </Button>
          <Button onClick={() => handleDeleteSelected && handleDeleteSelected()}> delete mission </Button>
        </CardActions>
        <CardActions style={Styles.CardActionsInCards}>
        {missions.map((mission) => (
          <div key={mission.id}>
            <Container mission={mission} />
          </div>
        ))}
        </CardActions>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
      </Card>
    );
}

type ContainerProps = {
  mission: any;
};


const Container = ({ mission }: ContainerProps) => {

  return (
    <div style={{ width: "356px", height: "146px"}}> 
      <MissionCard mission={mission} />
    </div>
  );
};