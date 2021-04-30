import { ChakraProvider, Stack } from "@chakra-ui/react"
import { useRef } from "react"
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

            }
        },
        pwd:{
            name:"password",
            title:"password",
            isRequired:true,
            type:"string",
            componentprops:{
                type:"text",
                
            }
        }
    }
}
const App:React.FC=()=>{
    const form=useRef<any>()
    return <Stack>
        <SchemaForm ref={form} schema={schema}/>
    </Stack>
}



export default ()=>{


    return (<ChakraProvider>
        <App/>
    </ChakraProvider>)
}