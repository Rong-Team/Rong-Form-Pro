import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react"
import React from "react"
import { ComponentBaseProps, ComponentUnionProps } from "../interface"

export interface SliderProps extends ComponentUnionProps {
    defaultValue?: number
    orientation?: 'vertical' | 'horizontal'
    min?: number
    max?: number
    step?: number,
    name: string
}

const SliderComp: React.FC<SliderProps> = ({ name, ...props }) => {
    return (<Slider

        {...props}
        aria-label={'slider-' + name}
    >
        <SliderTrack>
            <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
    </Slider>)
}

export default SliderComp