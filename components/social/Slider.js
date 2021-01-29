import {useState} from "react"
const Slider = ({images}) => {
    const [index, setIndex]=useState(0);
    const detailText = `Выбрана картинка: ${images[index]}`
    return (
        <div>
            <img 
            src={images[index]} 
            onClick ={()=>{setIndex((index+1)%images.length)}}
            />
            
            <p>
                {detailText}
            </p>
        </div>
    )
}
export default Slider
