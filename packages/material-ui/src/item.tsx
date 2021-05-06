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
export type ChildProps = SchemaField & {}
const RenderItem:React.FC<ChildProps>=({name,componentprops})=>{

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
                return <Input type={comptype} inputProps={props} />
        }
    }

    return <Field name={name}>

    </Field>
}