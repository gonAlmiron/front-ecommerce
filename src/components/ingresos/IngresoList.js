import Ingreso from './Ingreso'

const ItemList = ( {ingresos = []} ) => {
    return (     
    
    <div className="row">
    <hr/>
        { ingresos.map((ing) => (
        
            <div key={ing.id} className="col-3">
                <Ingreso ingreso={ing} key={ing.id}/>
            </div> 
        ))
        }
</div>
)
}



export default ItemList
