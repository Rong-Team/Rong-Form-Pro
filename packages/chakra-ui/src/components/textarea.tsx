import { Textarea } from "@chakra-ui/react"
import { ComponentBaseProps, ComponentUnionProps } from "../interface"


export interface TextAreaProps extends ComponentUnionProps{
    placeholder?:string
    resize?:'horizontal'|'vertical'|'none'
}

const TextAreaComp:React.FC<TextAreaProps>=(props)=>{

    return <Textarea  {...props}></Textarea>
}
export default TextAreaComp