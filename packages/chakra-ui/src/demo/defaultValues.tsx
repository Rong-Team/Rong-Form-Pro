import { Button, ChakraProvider, Stack } from "@chakra-ui/react"
import { useRef } from "react"
import { IFormInstance } from "rong-form/lib/Form"
import SchemaForm from "../form"
import { SchemaType } from "../interface"

const schema:SchemaType={
    name:"demo",
    properties:{
        name:{
            name:"name",
            title:"name",
            type:"string",
            isRequired:true,
            componentprops:{
                type:"text",

            },
            defaultValue:"rong-form"
        },
        pwd:{
            name:"password",
            title:"password",
            isRequired:true,
            type:"string",
            componentprops:{
                type:"password",
                
            },
            defaultValue:"123456"
        }
    },
    uistyle:{
        size:"sm"
    }
}
const App:React.FC=()=>{
    const form=useRef<IFormInstance>(null)
    return <Stack>
        <SchemaForm ref={form} schema={schema}/>
        <Button onClick={()=>console.log(form.current?.getFieldsValue())}>submit</Button>
    </Stack>
}



export default ()=>{


    return (<ChakraProvider>
        <App/>
    </ChakraProvider>)
}