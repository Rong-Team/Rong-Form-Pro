import { ComponentBaseProps, ComponentUnionProps } from "../interface";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react"

export interface NumberInputProps extends ComponentUnionProps {
    defaultValue?: number
    min?: number
    max?: number
    step?: number
    precision?: number
}


const NumberInputComp: React.FC<NumberInputProps> = ({...props }) => {
    return (
        <NumberInput {...props}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    )
}

export default NumberInputComp