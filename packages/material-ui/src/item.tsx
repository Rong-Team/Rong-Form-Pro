import { FormControl, FormControlLabel, FormHelperText, InputLabel } from '@material-ui/core'
import React from 'react'
import {Field} from 'rong-form'
import CheckBox from './components/checkbox'
import DatePicker from './components/date'
import Input from './components/input'
import Radio from './components/radio'
import Select from './components/select'
import Slider from './components/slider'
import Switch from './components/switch'
import TextArea from './components/textarea'
import { SchemaField } from './interface'
export type ChildProps = SchemaField & {widgets?:any}
const RenderItem:React.FC<ChildProps>=({name,rules,required,disabled,widget,widgets,help,componentprops})=>{

    const mapComponent=(control:any)=>{
        const comptype=componentprops.type
        let props=componentprops[comptype]
        switch (comptype) {
            case 'checkbox':
                
                return <CheckBox {...control}  name={name} {...props} />
            case 'radio':
                return <Radio {...control}  name={name} {...props}/>
            case 'range':
                return <Slider {...control} {...props} />
            case 'switch':
                return <Switch {...control} />
            case 'select':
                return <Select {...control} {...props} />
            case 'textarea':
                return <TextArea {...control} {...props} />

            default:
                const inputProps = componentprops['input']
                if(comptype==='datetime-local'||comptype==='month'||comptype==='time'||comptype==='week'||comptype==='date') {
                    props=componentprops['date']
                    return <DatePicker {...props} {...control} />
                }
                return <Input type={comptype} inputProps={props} {...control} {...inputProps} />
        }
    }

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
        return { ...rules, required, }
    }


    return <Field name={name} rules={getRules()} {...fieldPorps()}>
        {
            (control,meta,dependencies)=>{
                if(widget&&widgets && widgets[widget]){
                    const comp=widgets[widget]
                    return comp(control,meta,dependencies)
                }
                return <FormControl required={required} disabled={disabled} error={meta?.errors?.length>0}>
                    <InputLabel required={required} disabled={disabled} error={meta?.errors?.length>0} />
                    {
                        mapComponent(control)
                    }
                    <FormHelperText  >{help}</FormHelperText>
                    {
                        meta?.errors?.map((item,index)=>{
                            return <FormHelperText key={`error-${item}-${index}`} error={true}>{item}</FormHelperText>
                        })
                    }
                </FormControl>
            }
        }
    </Field>
}

export default RenderItem