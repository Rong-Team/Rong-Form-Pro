import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import React from "react";
import { ComponentBaseProps,  ComponentUnionProps } from "../interface";


export interface PinInputProps extends ComponentUnionProps {
    type?: 'alphanumeric' | 'number'
    opt?: boolean
    mask?: boolean
    defaultValue?: string
    length: number
    name: string
}

const PinInputComp: React.FC<PinInputProps> = ({ name, length, ...props }) => {
    return (<HStack>
        <PinInput  {...props} >
            {
                Array(length).map((each, index) => {
                    return (
                        <PinInputField key={name + index} />
                    )
                })
            }
        </PinInput>
    </HStack>)
}

export default PinInputComp