import { Stack } from "@chakra-ui/react";
import React from "react";
import { ListForm } from "rong-form";
import { SchemaField } from "./interface";
import RenderChild from "./item";

export interface ListProps {
    value: { [name: string]: SchemaField }
    name: string
    defaultValue: any
    displayType?: "column" | 'row'
}

const RenderList: React.FC<ListProps> = ({ value, name, defaultValue,  }) => {



    return <ListForm name={name}>
        {
            (fields, { add, remove }) => {
                return (
                    fields.map((field, index) => {
                        return <Stack direction="row" flexWrap="wrap" spacing={10}>
                            {
                                Object.keys(value).map((item, index2) => {
                                    const curValue = value[item]
                                    if (Array.isArray(curValue.name)) {
                                        return <React.Fragment key={name+'-'+index2}>
                                            {RenderChild({ ...curValue, })}
                                        </React.Fragment>
                                    }
                                    return <React.Fragment key={name+'-'+index2}>
                                        {RenderChild({ ...curValue, name: [name, curValue.name] })}
                                    </React.Fragment>

                                })
                            }
                        </Stack>
                    })
                )
            }
        }
    </ListForm>

}