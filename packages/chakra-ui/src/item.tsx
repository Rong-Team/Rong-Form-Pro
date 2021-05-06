import { SchemaField } from './interface'
import { Field } from 'rong-form'
import React from 'react'
import CheckBox from './components/checkbox'
import InputNumber from './components/numberInput'
import Radio from './components/radio'
import PinInput from './components/pinInput'
import Select from './components/select'
import Slider from './components/slider'
import TextArea from './components/textarea'
import Switch from './components/switch'
import Input from './components/input'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react"




const RenderChild: React.FC<SchemaField & { fieldName: string | string[],widgets?:any,displayType?:any }> = ({ name,
    componentprops,
    title,
    dependencies,
    widget,
    help,
    isListChild, fieldName, uistyle, rules, isRequired, defaultValue, isReadOnly, isDisable, hidden ,widgets,displayType}) => {

    const fieldPorps = () => {
        const type = componentprops.type
        switch (type) {
            case 'file':
                return { valuePropName: 'fileList' }
            case 'switch':
                return { valuePropName: 'checked' }
            default:
                return {}
        }
    }
    

    const getRules = () => {
        return { ...rules, required: isRequired }
    }


    const pickType = (control: any) => {
        const type = componentprops.type

        let props = componentprops[type]
        switch (type) {
            case "checkbox":

                return <CheckBox name={name}  {...props} {...control} {...uistyle} />

            case "number":
                return <InputNumber {...props} {...control} {...uistyle} />
            case "radio":
                return <Radio name={name} {...props}  {...control} {...uistyle} />
            case "pinInput":
                let { length } = componentprops['pinInput'] as any
                return <PinInput name={name} length={length} {...props}  {...control} {...uistyle} />
            case 'select':
                return <Select name={name} {...props}  {...control} {...uistyle} />
            case 'range':
                return <Slider name={name} {...props}  {...control} {...uistyle} />
            case 'textarea':
                return <TextArea {...props}  {...control} {...uistyle} />
            case 'switch':
                return <Switch name={name} {...props}  {...control} {...uistyle} />
            default:
                const inputProps = componentprops['input']
                if(type==='datetime-local'||type==='month'||type==='time'||type==='week') {
                    props=componentprops['date']
                }

                
                return <Input type={type} {...props} {...inputProps} {...control} {...uistyle} />

        }
    }

    return (
        <Field name={fieldName} rules={getRules()} isListField={isListChild} dependencies={dependencies} defaultValue={defaultValue}  {...fieldPorps()}>
            {
                (control, meta, dependencies) => {
                    
                    if (widget && widgets && widgets[widget]) {
                       
                        const comp=widgets[widget]
                        return comp(control,meta,dependencies)
                    }
                    if (hidden) {
                        return <></>
                    }
                    return (
                        <FormControl  isRequired={isRequired} isDisabled={isDisable} isReadOnly={isReadOnly} isInvalid={meta?.errors?.length > 0} {...uistyle} >
                            <FormLabel >{title}</FormLabel>
                            <FormHelperText>{help}</FormHelperText>
                            {pickType({ ...control, })}
                            {
                                meta?.errors && meta.errors.map((item, index) => {
                                    return <FormErrorMessage key={name + '-error-' + index}>{item}</FormErrorMessage>
                                })
                            }
                        </FormControl>
                    )
                }
            }
        </Field>
    )
}

export default RenderChild