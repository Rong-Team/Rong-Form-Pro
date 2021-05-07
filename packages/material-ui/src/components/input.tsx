import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ComponentUnionProps, UIInterface } from '../interface';
import Password from './password';
import { Input as MaterialInput, FilledInput, OutlinedInput, InputAdornment } from '@material-ui/core';


type InputType = ComponentUnionProps & UIInterface
export interface InputProps extends InputType {
  type: string
  inputProps?: {
    min?: any
    max?: any
    step?: any
    accept?: string
  }
  prefix?: string
  postfix?: string
}

const Input: React.FC<InputProps> = ({ type, inputProps, variant, prefix, postfix, ...props }) => {

  if (type === 'password') {
    return <Password {...props} />

  }
  if (variant === 'filled') {
    return (
      <FilledInput

        type={type}

        startAdornment={prefix && <InputAdornment position="start" >
          {prefix}
        </InputAdornment>}
        endAdornment={postfix && <InputAdornment position="end">{postfix}</InputAdornment>}
        {
        ...props
        }
        inputProps={{
          ...inputProps
        }}
      />
    )
  }
  else if (variant === 'outlined') {
    return (
      <OutlinedInput type={type}



        startAdornment={prefix && <InputAdornment position="start" >
          {prefix}
        </InputAdornment>}
        endAdornment={postfix && <InputAdornment position="end">{postfix}</InputAdornment>}
        {
        ...props
        }
        inputProps={{
          ...inputProps
        }} />
    )
  }
  return (<MaterialInput


    type={type}

    startAdornment={prefix && <InputAdornment position="start" >
      {prefix}
    </InputAdornment>}


    endAdornment={postfix && <InputAdornment position="end">{postfix}</InputAdornment>}
    {
    ...props
    }
    inputProps={{
      ...inputProps
    }}
  />)
}

export default Input