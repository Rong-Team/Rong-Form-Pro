---
order: 4
title: Customized Field
---

# Customized Field

Rong-form-pro encapsulated components might be used in  80% user cases or scenarioes.However, we believed that most developers are expecting to use rong-form-pro in the remaining 20% scenario, for example:
- A searching component powered by elasticsearch or algolia which is hard to encapsulated.
- A customized ui kit (most of companies have unique ui kit)
- A complicated cascading among fields which is hard to described in schema

Thus, we provided a property `widget` that allows developers to map the field of schema to their customized components.

#### The Basic Example

```ts
const schema:SchemaType={
    name:"demo",
    properties:{
        name:{
            name:"name",
            title:"name",
            type:"string",
            isRequired:true,
            componentprops:{type:"customized"},
            widget:"combo"
        },
        
    },
}
const App:React.FC=()=>{
    
    const form=useRef<any>(null)
    return <Stack>
        <SchemaForm ref={form} schema={schema} widget={{"combo":Combo}}/>
        <Button onClick={()=>console.log(form.current?.getFieldsValue())}>submit</Button>
    </Stack>
}



export default ()=>{


    return (<ChakraProvider>
        <App/>
    </ChakraProvider>)
}
```

<code src="../demo/widget.tsx" />