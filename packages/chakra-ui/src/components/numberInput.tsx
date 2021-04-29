import { ComponentBaseProps } from "../interface";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react"

export interface NumberInputProps extends ComponentBaseProps {
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