import {useState} from "react"
import Like from "../components/social/Like"
import Menu from "../components/Menu"

const CounterPage = () => {
    return (
        <div>
            <Menu />
            <img src="https://placekitten.com/g/400/300" />
            <Like defaultNum={5}/>

            <img src="https://placekitten.com/g/402/300" />
            <Like />
            
            <img src="https://placekitten.com/g/403/300" />
            <Like defaultNum={20}/>
        </div>
    )
}
export default CounterPage
