import { Stack } from "@chakra-ui/react";
import React, { useImperativeHandle, useRef } from "react";
import { Form } from "rong-form";
import { IFormInstance } from "rong-form/lib/Form";
import { UIProvider } from "./context";
import {  SchemaType } from "./interface";
import RenderChild from "./item";
import RenderList from "./list";

export interface ISchemaForm {
    schema:SchemaType
}

const SchemaForm=React.forwardRef<IFormInstance,ISchemaForm>(({ schema },ref) => {


    const {name, properties, uistyle}=schema
    return (<UIProvider value={uistyle||{}}>
        <Form ref={ref}>
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
)
export default SchemaForm