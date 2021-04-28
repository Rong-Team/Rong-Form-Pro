import { Select } from "@chakra-ui/react"
import { ComponentBaseProps } from "../interface"


export interface SelectProps extends ComponentBaseProps {
    placeholder?:string
    size?:'sm'|'md'|'lg'
    varient?:'outline'|'filled'|'flushed'|'unstyled'
    name:string 
    valueSet:{[name:string]:string}
    multiple?:boolean
    defaultValue:string|string[]
   
}


const SelectComp :React.FC<SelectProps>=({valueSet,...props})=>{
    return (
        <Select   {...props}>
            {
                Object.keys(valueSet).map((item,index)=>{
                    return <option value={valueSet[item]} key={name+index}>
                            {item}
                    </option>
                })
            }
        </Select>
    )
}

export default SelectComp