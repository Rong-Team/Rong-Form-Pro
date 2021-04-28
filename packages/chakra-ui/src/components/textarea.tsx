import { Textarea } from "@chakra-ui/react"
import { ComponentBaseProps } from "../interface"


export interface TextAreaProps extends ComponentBaseProps{
    placeholder?:string
    resize?:'horizontal'|'vertical'|'none'
    size?:'sm'|'md'|'lg'
    varient?:"outline" | "unstyled" | "filled" | "flushed"
}

const TextAreaComp:React.FC<TextAreaProps>=(props)=>{

    return <Textarea  {...props}></Textarea>
}
export default TextAreaCompx