import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { ComponentUnionProps } from '../interface'
export interface CheckboxInterfaces extends ComponentUnionProps {
    valueSet: { [name: string]: string },
    defaultValue?: string[]
    disabled?: string[]
    name: string
    direction?: 'column' | 'row'
    spacing?: string

}


const Checkboxes: React.FC<CheckboxInterfaces> = ({
    valueSet,
    disabled, name, direction, spacing, ...props }) => {



    const isDisabled = (val: string) => {
        return disabled?.includes(val)
    }





    return (<CheckboxGroup {...props}  >
        <Stack direction={direction} spacing={spacing}>
            {
                Object.keys(valueSet).map((item, index) => {
                    return <Checkbox isDisabled={isDisabled(valueSet[item])} value={valueSet[item]} key={name + index}>{item}</Checkbox>
                })
            }
        </Stack>
    </CheckboxGroup>)
}


export default Checkboxes