import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';


interface CustomButtonProps {
    text?: string;
    icon?: ReactElement;
    icon2?: ReactElement;
    buttonStyle?: React.CSSProperties;
    sizeOfIcons?: 'small' | 'medium' | 'large';
    btnColor?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
}



function CustomContainedButtons({text, icon, icon2, buttonStyle, sizeOfIcons, btnColor}:CustomButtonProps){
    return(
        <Button size={sizeOfIcons} variant='contained' startIcon={icon} endIcon={icon2} sx={buttonStyle} color={btnColor}>
            <Typography>
                    {text}
            </Typography>
        </Button>
    );
}

export default CustomContainedButtons;

