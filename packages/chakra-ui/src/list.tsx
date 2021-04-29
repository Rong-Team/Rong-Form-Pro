import { Button, CloseButton, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { ListForm } from "rong-form";
import { SchemaField } from "./interface";
import RenderChild from "./item";
import {MinusIcon,AddIcon} from '@chakra-ui/icons'
import { warning } from "./components/utils";
import { useUI } from "./context";



const RenderList: React.FC<SchemaField> = ({ listChildren , name, defaultValue,...props }) => {

    const listInfo=props?.componentprops?.list
    const uistyle=useUI()
    if(listChildren){
        return <ListForm name={name}>
        {
            (fields, { add, remove }) => {
                return (
                    <Stack>
                        {
                            fields.map((field, index) => {
                                return <Stack direction="row" flexWrap="wrap" spacing={10} key={name + '-' + index}>
                                    {
                                        Object.keys(listChildren).map((item, index2) => {
                                            const curValue = listChildren[item]
                                            if(curValue.type==='list'){
                                                return <></>
                                            }
                                            return <React.Fragment key={name + '-' + index2}>
                                                {RenderChild({ ...curValue, fieldName: [field.name, curValue.name],uistyle:uistyle||curValue?.uistyle })}
                                            </React.Fragment>
                                        })
                                    }
                                    {listInfo&&listInfo.showRemove&&<CloseButton  onClick={()=>remove(index)}/>}
                                </Stack>
                            })
                        }
                        {
                            listInfo&&listInfo.showAdd&&<Button onClick={()=>add()} leftIcon={<AddIcon/>}>{listInfo?.addText}</Button>
                        }
                    </Stack>
                )
            }
        }
    </ListForm>
    }
    warning(false,"No listChildren props provided")
    return <></>
}

export default RenderList