import {useState} from "react"

const Bookmark = () => {
    const [booked, setBooked]=useState(false)
    return (<p onClick={()=>{
        setBooked(!booked)
    }}>
        {booked ? '✅ Добавлено': '☐ Добавить в избранное'}
    </p>)
}
export default Bookmark