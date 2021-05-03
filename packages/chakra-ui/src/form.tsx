import { Stack } from "@chakra-ui/react";

import React, { useImperativeHandle, useRef } from "react";
import { Form } from "rong-form";
import { IFormInstance } from "rong-form/lib/Form";
import { RootMapContext, UIProvider, WidgetProvider } from "./context";
import { IFieldStore, Meta, SchemaType } from "./interface";
import RenderChild from "./item";
import RenderList from "./list";

export interface ISchemaForm {
    schema: SchemaType
    widget?: { [name: string]: (control: any, meta: Meta, dependencies?: { [name: string]: IFieldStore }) => React.Component | React.ReactNode }
    onFinish?: (values: any, errors: any) => void
}

const SchemaForm = React.forwardRef<IFormInstance, ISchemaForm>(({ schema, widget }, ref) => {


    const { name, properties, uistyle,displayType} = schema

    return (

        <Form ref={ref}>

            <Stack>

                {
                    Object.keys(properties).map((fieldName, index) => {
                        const field = properties[fieldName]
                        if (field.type === 'list') {
                            return <React.Fragment key={name + index}>
                                {RenderList({...field,widgets:widget})}
                            </React.Fragment>
                        } else {
                            return <React.Fragment key={name + index}>
                                {RenderChild({ ...field, fieldName: field.name, uistyle: { ...field?.uistyle, ...uistyle }, widgets: widget })}
                            </React.Fragment>
                        }
                    })
                }

            </Stack>

        </Form>
    )

}
)
export default SchemaForm