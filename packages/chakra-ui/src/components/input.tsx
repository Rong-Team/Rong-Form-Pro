import { Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, others } from "@chakra-ui/react";
import React from "react";
import { ComponentBaseProps, ComponentUnionProps } from "../interface";
import Password from "./password";
import { mapSize } from "./utils";



export interface InputProps extends ComponentUnionProps {
    type: 'color' | 'text' | 'email' | 'password' | 'url' | 'date' | 'datetime-local' | 'week' | 'month' | 'file'

    min?: string,
    max?: string

    accept?: string


    addAfter?: string
    addBefore?: string
    prefix?: string
    postfix?: string

}

const InputComp: React.FC<InputProps> = ({ type, ...props }) => {
    if (type === 'password') {
        return <Password {...props} />
    }
    const { size, colorScheme, addBefore, addAfter, prefix, postfix, ...others } = props

    return <InputGroup size={size} colorScheme={colorScheme}>
        {
            addBefore && <InputLeftAddon children={addBefore} />
        }
        <InputGroup size={size} colorScheme={colorScheme}>
            {
                prefix && <InputLeftElement

                    pointerEvents="none"
                    children={prefix}
                />
            }
            <Input  {...others} size={size} type={type} />
            {
                postfix && <InputRightElement
                    pointerEvents="none"
                    children={postfix}
                />
            }
        </InputGroup>
        {addAfter && <InputRightAddon children={addAfter} />}
    </InputGroup>
}

export default InputComp