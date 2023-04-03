import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';


interface CustomButtonProps {
    text?: string;
    icon?: ReactElement;
    icon2?: ReactElement;
    buttonStyle?: React.CSSProperties;
  }



function CustomButton({text, icon, icon2, buttonStyle}:CustomButtonProps){
    return(
        <Button size="small" variant='contained' startIcon={icon} endIcon={icon2} sx={buttonStyle}>
            <Typography>
                    {text}
            </Typography>
        </Button>
    );
}

export default CustomButton;

