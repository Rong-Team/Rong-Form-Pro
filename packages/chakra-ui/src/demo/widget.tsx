import { Button, ChakraProvider, Input, Stack, Switch } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import SchemaForm from "@rong-form-pro/chakra-ui";
import { IFieldStore } from "rong-form/lib/interface";

const schema = {
    name: "demo",
    properties: {
        name: {
            name: "name",
            title: "name",
            type: "string",
            isRequired: true,
            componentprops: { type: "customized" },
            widget: "combo"
        },

    },

}
const widget = (controls: any, meta: any, dependencies: {[name:string]:IFieldStore}) => {

    const [input, setinput] = useState(controls.value?.input || '')
    const [swi, setSwi] = useState(controls.value?.swi || false)
    const triggerChange = (val: any) => {
        if (controls?.onChange && typeof val === 'object' && typeof controls.value === 'object') {


            controls.onChange({ input, swi, ...controls?.value, ...val })

        }
    }
    const triggerSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!controls.value?.swi) {
            setSwi(e.target.checked)
        }
        triggerChange({ swi: e.target.checked, })
    }
    const triggerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!controls.value?.input) {
            setinput(e.target.value)
        }
        triggerChange({ input: e.target.value })
    }
    return <div>
        <Switch checked={swi} onChange={triggerSwitch} />
        <Input value={input} onChange={triggerInput} type="text" />
    </div>
}

const widgetList = {
    "combo": widget
}

const App: React.FC = () => {

    const form = useRef<any>(null)
    return <Stack>
        <SchemaForm ref={form} schema={schema} widget={widgetList} />
        <Button onClick={() => console.log(form.current?.getFieldsValue())}>submit</Button>
    </Stack>
}



export default () => {


    return (<ChakraProvider>
        <App />
    </ChakraProvider>)
}