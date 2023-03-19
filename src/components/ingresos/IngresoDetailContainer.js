import {useEffect, useState} from "react"
import IngresoDetail from "./IngresoDetail"
import { useParams } from 'react-router-dom'
import Spinner from "../Spinner"

const ItemDetailContainer = () => {

    const [ingreso, setIngreso] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
   
   


    useEffect(() => {
        
      
        setLoading()
        fetch(`http://localhost:3002/api/ingresos/${id}`)
        .then((resp) => resp.json())
        .then((data) => {setIngreso(data)})
        .finally(() =>{
            setLoading(false)
        })
    
    },  [])

    return (

        <div>
            {    loading 
                ? <Spinner/> :
                <IngresoDetail ingreso={ingreso} key={id}/>
            
}
        </div>
    )
}

export default ItemDetailContainer
