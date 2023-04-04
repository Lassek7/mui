import * as React from 'react';
import DroneCard from './droneCard';
import MissionCard from './missionCard';
import { Box, Card, Typography, CardActions } from '@mui/material';
import map from "lodash/map";
import range from "lodash/range"
import Styles from './styles';



export default function BottomSheet(props: { cardComponent: React.ComponentType }) {
  const { cardComponent: CardComponent } = props;
  const droneAmount = 10; // number should come from mock data
    return (
      <Card sx={Styles.mainCard}>
        <CardActions sx={Styles.CardActionsInCards}>
          <Typography sx={Styles.minSizeBold}> Searching Limfjordsbroen</Typography>
        </CardActions>
        <CardActions style={Styles.CardActionsInCards}>
          {map(range(droneAmount), _ => (
              <div>
                  <Container cardComponent={CardComponent}/>
              </div>
              ))}
        </CardActions>
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
      </Card>
    );
}

const Container = (props: { cardComponent: React.ComponentType }) => {
  const { cardComponent: CardComponent } = props;
  return (
    <div style={{ width: "356px", height: "146px"}}> 
      <CardComponent />
    </div>
  );
};