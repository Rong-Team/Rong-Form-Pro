import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ComponentUnionProps } from '../interface';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export interface InputProps extends ComponentUnionProps {
  type: string
  inputProps?: {
    min?: any
    max?: any
    step?: any


  }
}

const Input: React.FC<InputProps> = ({ type, inputProps, ...props }) => {
  const classes = useStyles();

  return (<TextField


    type={type}

    className={classes.textField}
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