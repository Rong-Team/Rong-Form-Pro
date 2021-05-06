import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { ComponentUnionProps } from "../interface";


export interface RadioProps extends ComponentUnionProps {
    row?:boolean
    valueSet?:{[name:string]:string}
    name:string
}

const RadioComo:React.FC<RadioProps>=({valueSet,name,checked,onChange,...props})=>{
    if(!valueSet){
        console.error(`field ${name} doesn't contain valueSet`)
        return <></>
    }
    return (
        <RadioGroup  {...props}>
            {
                Object.keys(valueSet).map((item,index)=>{
                    return (
                        <FormControlLabel   key={item+index} checked={checked } onChange={e=>onChange(e)} value={valueSet[item]} label={item} control={<Radio/>} />
                    )
                })
            }
        </RadioGroup>
    )
} 

export default RadioComo