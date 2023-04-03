import * as React from 'react';
import DroneCard from './droneCard';
import MissionCard from './missionCard';
import { Box, Card, Typography, CardActions } from '@mui/material';
import map from "lodash/map";
import range from "lodash/range"



export default function BottomSheet(props: { cardComponent: React.ComponentType }) {
  const { cardComponent: CardComponent } = props;
  const droneAmount = 10;
    return (
      <Card sx={{width: "calc(100% - 32px)", height: "194px", position: "absolute", marginLeft: "16px", bottom: "88px", borderRadius: "16px", background: "#000000",  }}>
        <CardActions>
        </CardActions>
        

        <CardActions style={{ width: "calc(100% - 32px)", overflow: "auto", marginLeft: "16px", marginTop: "16px"}}>
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