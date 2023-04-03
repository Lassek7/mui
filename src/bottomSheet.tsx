import * as React from 'react';
import DroneCard from './droneCard';
import MissionCard from './missionCard';
import { Box, Card, Typography, CardActions } from '@mui/material';
import map from "lodash/map";
import range from "lodash/range"


export default function BottomSheet() {
    return (
      <Card sx={{width: "100%", position: "absolute", bottom: "50px", borderRadius: "45px", background: "#000000"}}>
        <CardActions>
        </CardActions>
        
        <CardActions style={{ width: "93%", overflow: "auto", marginLeft: 32, marginBottom: "40px"}}>
          {map(range(10), index => (
              <div style={{ display: "inline-block", marginLeft: index === 0 ? "32px" : "-40px"  }}>
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
      <div style={{width: "514px", margin: "16px -40px" }}>
        <DroneCard />
      </div>
    );
  };

  /*
    return (
          <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
            {map(range(10), _ => (
              <Container />
            ))}
          </div>
      );
}

const Container = () => {
    return (
      <div style={{ height: "2300px", width: "514px", margin: "16px" }}>
            <DroneCard />
      </div>
    );

  */