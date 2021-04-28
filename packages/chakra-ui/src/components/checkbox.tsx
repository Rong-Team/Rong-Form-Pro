import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
export interface CheckboxInterfaces {
    colorScheme: string
    valueSet: { [name: string]: string },
    defaultChecked?: string[]
    size?: 'sm' | 'md' | 'lg',
    disabled?: string[]
    onChange: (val: any) => void,
    name: string
    direction: 'column' | 'row'
    spacing:string
}


const Checkboxes: React.FC<CheckboxInterfaces> = ({
    valueSet,
    size,
    defaultChecked, disabled, name, direction, colorScheme ,spacing}) => {

    const isGroup = () => {
        return Object.keys(valueSet).length > 1
    }

    const isDisabled = (val: string) => {
        return disabled?.includes(val)
    }



    const renderCheckbox = (valueSet:{ [name: string]: string }) => {
        const a=Object.keys(valueSet)[0]
        return <Checkbox size={size} colorScheme={colorScheme} value={valueSet[a]}>{a}</Checkbox>
    }

    return (isGroup() ? <CheckboxGroup colorScheme={colorScheme} size={size} defaultValue={defaultChecked} >
        <Stack direction={direction} spacing={spacing}>
            {
                Object.keys(valueSet).map((item, index) => {
                    return <Checkbox isDisabled={isDisabled(valueSet[item])} value={valueSet[item]} key={name + index}>{item}</Checkbox>
                })
            }
        </Stack>
    </CheckboxGroup> : renderCheckbox(valueSet))
}


export default Checkboxes