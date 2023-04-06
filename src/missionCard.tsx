import * as React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import area from '@turf/area';

type MissionCardProps = {
    mission: any;

}

export default function MissionCard({mission}: MissionCardProps) {
    return (
        <Card sx={{ maxWidth: '380px',  border: '2px solid #3B82F7', borderRadius:"12px", backgroundColor:'#2F2B3E', color: "#BFBBBB"}}>
            <CardContent sx={{display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5" >
                    {mission.id}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    {mission.area}
                </Typography>
            </CardContent>

            <CardContent sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-40px'}}>
                <Typography variant="h6" component="div" gutterBottom>
                    Pattern: circular         
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    75% completed
                </Typography>
            </CardContent>  
            <CardContent sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-35px'}}>
                <Typography sx={{ mb: 1.5 }}>
                    Speed:
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    5m/s
                </Typography>
            </CardContent>  

            <CardContent sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-50px'}}>
                <Typography sx={{ mb: 1.5 }}>
                    Altitude:
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    500m
                </Typography>
            </CardContent>  

            <CardContent sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-50px'}}>
                <Typography sx={{ mb: 1.5 }}>
                    Vertical Distance:
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    500m
                </Typography>
            </CardContent>  

            <CardContent sx={{display: 'flex', justifyContent: 'space-between', marginTop: '-50px'}}>
                <Typography sx={{ mb: 1.5 }}>
                    Horizontal distance:
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    500m 
                </Typography>
            </CardContent>  
        </Card>
    );
}

