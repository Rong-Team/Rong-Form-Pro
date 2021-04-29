import { Stack } from "@chakra-ui/react";
import React from "react";
import { Form } from "rong-form";
import { UIProvider } from "./context";
import { SchemaType } from "./interface";
import RenderChild from "./item";
import RenderList from "./list";


const SchemaForm: React.FC<SchemaType> = ({ name, properties, uistyle }) => {



    return (<UIProvider value={uistyle||{}}>
        <Form>
            <Stack>
                {
                    Object.keys(properties).map((fieldName, index) => {
                        const field = properties[fieldName]
                        if (field.type === 'list') {
                            return <React.Fragment key={name + index}>
                                {RenderList(field)}
                            </React.Fragment>
                        } else {
                            return <React.Fragment>
                                {RenderChild({ ...field, fieldName: field.name })}
                            </React.Fragment>
                        }
                    })
                }
            </Stack>
        </Form>
    </UIProvider>)
}

export default SchemaForm