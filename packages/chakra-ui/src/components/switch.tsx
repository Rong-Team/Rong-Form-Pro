import { Switch } from "@chakra-ui/react";
import { ComponentBaseProps, ComponentUnionProps } from "../interface";


export interface SwitchProps extends ComponentUnionProps {

    defaultChecked?: boolean
    name: string
}

const SwitchComp: React.FC<SwitchProps> = (props) => {

    return (
        <Switch  {...props} ></Switch>
    )
}

export default SwitchComp