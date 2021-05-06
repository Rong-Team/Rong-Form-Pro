import { IconButton, Input, InputAdornment } from "@material-ui/core";
import React, { useState } from "react";
import { ComponentUnionProps } from "../interface";
import {Visibility,VisibilityOff} from '@material-ui/icons';


const Password: React.FC<ComponentUnionProps> = (props) => {
    const [showPassword, setshowPassword] = useState(false)
    const handleClickShowPassword=()=>{
        setshowPassword(!showPassword)
    }
    return (
        <Input
            {...props}
            type={showPassword ? 'text' : 'password'}
           
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                       
                        onClick={handleClickShowPassword}
                        
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}

export default Password