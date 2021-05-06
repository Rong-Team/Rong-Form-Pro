import { MenuItem, Select } from '@material-ui/core';
import { ComponentUnionProps } from '../interface';
export interface SelectProps extends ComponentUnionProps{
    valueSet?:{[name:string]:string}
}

const SelectComp:React.FC<SelectProps>=({
    valueSet,...props
})=>{
    if(!valueSet){
        return <></>
    }
    return <Select  {...props}>
        {
            Object.keys(valueSet).map((name,index)=>{
                return <MenuItem value={valueSet[name]} key={name+index}>{
                    name
                } 
                </MenuItem> 
            })
        }
    </Select>
}

export default SelectComp