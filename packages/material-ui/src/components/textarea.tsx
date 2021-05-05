import { TextareaAutosize } from "@material-ui/core";
import { ComponentUnionProps } from "../interface";


export interface TextAreaProps extends ComponentUnionProps {
    rows?:number
    rowMax?:number
    rowMin?:number
}


const TextArea:React.FC<TextAreaProps>=({...props})=>{

    return <TextareaAutosize {...props}/>
}

export default TextArea