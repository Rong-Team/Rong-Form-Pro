import { Slider } from "@material-ui/core"
import { ComponentUnionProps } from "../interface"

export interface SlideProps extends ComponentUnionProps {
    min?:number
    max?:number
    step?:number
    direction?:'up'|'down'|'left'|'right'
    valueLabelDisplay?:"on" | "off" | "auto" 
}

const SliderComp:React.FC<SlideProps>=({...props})=>{

    return <Slider {...props}  />
}

export default SliderComp