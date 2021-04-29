import { Switch } from "@chakra-ui/react";
import { ComponentBaseProps } from "../interface";


export interface SwitchProps extends ComponentBaseProps {
    size?:'sm'|'md'|'lg'
    colorTheme?:string
    defaultChecked?:boolean
    name:string
}

const SwitchComp :React.FC<SwitchProps>=(props)=>{

    return (
        <Switch  {...props} ></Switch>
    )
}

export default SwitchComp