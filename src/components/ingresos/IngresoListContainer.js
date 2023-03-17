import { useEffect, useState } from "react"
import IngresoList from './IngresoList'

const IngresoListContainer = () => {

    const [ingresos, setIngresos] = useState([])

        useEffect(() => {

            fetch('http://localhost:3002/api/ingresos')
            .then((resp) => resp.json())
            .then((data) => {setIngresos(data)})
    
            
            
    }, [])
    console.log(ingresos)

    return(
        <>
            <IngresoList ingresos={ingresos}/>
        </>
    )
    }

    



export default IngresoListContainer

