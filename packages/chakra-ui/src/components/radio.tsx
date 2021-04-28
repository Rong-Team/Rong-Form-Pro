import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

export interface RadioesInterface {
    direction: 'row' | 'column'
    defaultValue: string
    valueSet: { [name: string]: string }
    disabled?: string[]
    name: string
    colorScheme?: string
}

const Radioes: React.FC<RadioesInterface> = ({ valueSet, name, colorScheme, defaultValue, direction, disabled }) => {
    const isDisabled = (val: string) => {
        return disabled?.includes(val)
    }

    return (
        <RadioGroup  colorScheme={colorScheme} defaultValue={defaultValue} name={name} >
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