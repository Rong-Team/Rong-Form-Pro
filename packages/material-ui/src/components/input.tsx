import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ComponentUnionProps } from '../interface';
import Password from './password';



export interface InputProps extends ComponentUnionProps {
  type: string
  inputProps?: {
    min?: any
    max?: any
    step?: any
    accept?:string

  }
}

const Input: React.FC<InputProps> = ({ type, inputProps, ...props }) => {
  
  if(type==='password'){
    return <Password {...props}/>
  }
  return (<TextField


    type={type}

    
    InputLabelProps={{
      shrink: true,
    }}
    {
    ...props
    }
    inputProps={{
      ...inputProps
    }}
  />)
}

export default Input