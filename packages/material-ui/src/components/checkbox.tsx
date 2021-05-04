import { Checkbox, FormControl, FormControlLabel, FormGroup } from "@material-ui/core";
import { useState } from "react";
import { ComponentUnionProps } from "../interface";


export interface CheckBoxProps extends Omit<ComponentUnionProps,'disabled'> {
    valueSet:{[name:string]:string}
    name:string
    title:string
    disabled?:string[]
   
}
const CheckBox:React.FC<CheckBoxProps>=({valueSet,value,onChange,name,disabled,})=>{
    const [values, setvalues] = useState<string[]>(value)

    const triggerChange=(name:string,value:boolean)=>{
        if(value){
            let cur=[...values,name]
            setvalues(cur)
            onChange(cur)
        }else{
            let cur=values.filter(item=>item===name)
            onChange(cur)
            setvalues(cur)
        }
    }
    return (
        <FormGroup>
            {
                Object.keys(valueSet).map((valuename,index)=>{
                        <FormControlLabel  key={name+index}
                        label={valuename}
                            control={<Checkbox disabled={disabled?.includes(valueSet[valuename])} value={valueSet[valuename]} onChange={e=>triggerChange(valueSet[valuename],e.target.checked)}  checked={values?.includes(valueSet[valuename])} />}
                        />
                })
            }
        </FormGroup>
    )
}

export default CheckBox