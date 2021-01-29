import {useState} from "react"
import Slider from "../components/social/Slider"


const SliderPage = () => {
    const images=[
        "https://placekitten.com/g/400/300",
        "https://placekitten.com/g/402/300",
        "https://placekitten.com/g/403/300"
    ]
    return (
        <div>
            <Slider images={images} />
        </div>
    )
}
export default SliderPage
