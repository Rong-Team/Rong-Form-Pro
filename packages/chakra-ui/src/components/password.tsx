import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { ComponentUnionProps } from "../interface";
import {ViewIcon,ViewOffIcon} from '@chakra-ui/icons'

export interface InputProps extends ComponentUnionProps {


}

const Password: React.FC<InputProps> = ({size,...props}) => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const mapPR=()=>{

    }
    return (
        <InputGroup size={size} >
            <Input
               // pr="4.5rem"
                type={show ? "text" : "password"}
                {...props}
                
            />
            <InputRightElement >
                {
                    show?<ViewIcon  onClick={handleClick}/>:<ViewOffIcon onClick={handleClick}/>
                }
               
            </InputRightElement>
        </InputGroup>
    )
}
export default Password