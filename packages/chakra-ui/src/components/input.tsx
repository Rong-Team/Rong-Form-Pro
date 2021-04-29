import { Input } from "@chakra-ui/react";
import { ComponentBaseProps, ComponentUIProps, ComponentUnionProps } from "../interface";



export interface InputProps extends ComponentUnionProps  {
    type:'color'|'text'|'email'|'password'|'url'|'date'| 'datetime-local'|'week'|'month'|'file'
    placeholder?:string
    onChange?:any
    value?:any
}

const InputComp:React.FC<InputProps>=({...props})=>{
    return <Input 
        {...props}
    />
}

export default InputComp