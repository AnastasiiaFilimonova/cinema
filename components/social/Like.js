import {useState} from "react"
const Like = ({defaultNum=0}) => {
    const [num, setNum]=useState(defaultNum);
    const detailText = `Получено лайков: ${num}`
    return (
        <div>
            <button onClick ={()=>{setNum(num+1)}}>
                ❤️
            </button>
            {num}
            <button onClick ={()=>{setNum(num-1)}}>
                👎
            </button>
            <p>
                {detailText}
            </p>
        </div>
    )
}
export default Like
