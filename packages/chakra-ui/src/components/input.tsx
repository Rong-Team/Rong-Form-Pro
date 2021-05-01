import { Input } from "@chakra-ui/react";
import { ComponentBaseProps,  ComponentUnionProps } from "../interface";
import Password from "./password";



export interface InputProps extends ComponentUnionProps  {
    type:'color'|'text'|'email'|'password'|'url'|'date'| 'datetime-local'|'week'|'month'|'file'

}

const InputComp:React.FC<InputProps>=({type,...props})=>{
    if(type==='password'){
        return <Password {...props} />
    }
    return <Input 
        {...props}
    />
}

export default InputComp