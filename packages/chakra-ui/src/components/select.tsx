import { Select } from "@chakra-ui/react"
import { ComponentBaseProps, ComponentUnionProps } from "../interface"


export interface SelectProps extends ComponentUnionProps {
    placeholder?:string
    name:string 
    valueSet:{[name:string]:string}
    multiple?:boolean
    defaultValue?:string|string[]
   
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