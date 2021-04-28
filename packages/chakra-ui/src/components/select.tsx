import { Select } from "@chakra-ui/react"


export interface SelectProps {
    placeholder?:string
    size?:'sm'|'md'|'lg'
    varient?:'outline'|'filled'|'flushed'|'unstyled'
    name:string 
    valueSet:{[name:string]:string}
    multiple?:boolean
    defaultValues:string|string[]
    disabled?:boolean,
    readonly?:boolean
}


const SelectComp :React.FC<SelectProps>=({placeholder,size,varient,name,valueSet,disabled,readonly})=>{
    return (
        <Select size={size} variant={varient} name={name} placeholder={placeholder} isDisabled={disabled} isReadOnly={readonly}>
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