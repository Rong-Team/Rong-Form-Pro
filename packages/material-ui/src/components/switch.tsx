import { Switch } from "@material-ui/core";
import { ComponentUnionProps, UIInterface } from "../interface";

 type UnionType=ComponentUnionProps &UIInterface
export interface SwitchProps extends UnionType  {

}


const SwitchComp:React.FC<SwitchProps> =(props)=>{
    return <Switch {...props} />
}

export default SwitchComp