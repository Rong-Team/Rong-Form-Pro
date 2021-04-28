import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { ComponentUnionProps } from "../interface"

export interface RadioesInterface extends ComponentUnionProps {
    direction?: 'row' | 'column'
    defaultValue?: string
    valueSet: { [name: string]: string }
    disabled?: string[]
    name: string
}

const Radioes: React.FC<RadioesInterface> = ({ valueSet, direction, disabled ,name,...props}) => {
    const isDisabled = (val: string) => {
        return disabled?.includes(val)
    }

    return (
        <RadioGroup   name={name}  {...props} >
            <Stack direction={direction}>
                {
                    Object.keys(valueSet).map((item, index) => {
                        return <Radio isDisabled={isDisabled(valueSet[item])} key={name + index} value={valueSet[item]}>
                            {item}
                        </Radio>
                    })
                }
            </Stack>
        </RadioGroup>
    )
}

export default Radioes