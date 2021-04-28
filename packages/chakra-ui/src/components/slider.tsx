import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react"
import React from "react"

export interface SliderProps {
    defaultValue?:number
    colorScheme?:string
    orientation?:'vertical'|'horizontal'
    min?:number
    max?:number
    step?:number,
    disabled?:boolean
    readonly?:boolean
    name:string
}

const SliderComp:React.FC<SliderProps>=({defaultValue,colorScheme,orientation,min,max,step,disabled,readonly,name})=>{
    return (<Slider 
    colorScheme={colorScheme}  
    aria-label={'slider-'+name} 
    defaultValue={defaultValue} 
    min={min}
    max={max}
    step={step}
    isDisabled={disabled}
    isReadOnly={readonly}
    orientation={orientation}>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>)
}

export default SliderComp