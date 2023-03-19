import Ingreso from './Ingreso'
import IngresoForm from './IngresoForm'

const ItemList = ( {ingresos = []} ) => {
    return (     
    
    <div className="row">
        <IngresoForm/>
        
    <hr/>
        { ingresos.map((ing) => (
        
            <div key={ing.id} className="col-4">
                <Ingreso ingreso={ing} key={ing.id}/>
            </div> 
        ))
        }
</div>
)
}



export default ItemList
