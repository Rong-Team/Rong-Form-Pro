import { SchemaField } from './interface'
import { Field } from 'rong-form'
import React, { ReactNode } from 'react'
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


const RenderChild: React.FC<SchemaField & { fieldName: string | string[] }> = ({ name, componentprops, title, dependencies, help, isListChild, fieldName,uistyle ,rules,isRequired}) => {

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

    const getRules=()=>{
        return {...rules,required:isRequired}
    }

    const pickType = (control: any) => {
        const type = componentprops.type
        
        let { ...props } = componentprops[type]
        switch (type) {
            case "checkbox":

                return <CheckBox  name={name}  {...props} {...control} />

            case "number":
                return <InputNumber {...props} {...control} />
            case "radio":
                return <Radio  name={name} {...props}  {...control} />
            case "pinInput":
                let { length } = componentprops['pinInput'] as any
                return <PinInput name={name} length={length} {...props}  {...control} />
            case 'select':
                return <Select name={name} {...props}  {...control} />
            case 'range':
                return <Slider name={name} {...props}  {...control} />
            case 'textarea':
                return <TextArea {...props}  {...control} />
            case 'switch':
                return <Switch name={name} {...props}  {...control} />
            default:
                return <Input type={type} {...props}  {...control} />

        }
    }

    return (
        <Field name={fieldName} rules={getRules()} isListField={isListChild} dependencies={dependencies}  {...fieldPorps()}>
            {
                (control, meta, dependencies) => {
                
                    return (
                        <FormControl isRequired={isRequired} isInvalid={meta?.errors?.length > 0} {...uistyle}>
                            <FormLabel >{title}</FormLabel>
                            <FormHelperText>{help}</FormHelperText>
                            {pickType({ ...control,})}
                            {
                               meta?.errors&& meta.errors.map((item, index) => {
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