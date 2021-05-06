import { TextField } from "@material-ui/core";
import { ComponentUnionProps } from "../interface";


export interface DateProps extends ComponentUnionProps {

    type?:'week'|'date'|'datetime-local'|'month'
}

const DatePicker:React.FC<DateProps>=({...props})=>{
    return <TextField  {...props} />
}

export default DatePicker