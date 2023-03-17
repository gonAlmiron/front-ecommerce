import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';


const Item = ( {ingreso} ) => {

    return (
        <Card key={ingreso.id} className="container my-5" style={{width: '20rem'}}>
             <Card.Body>
                <Card.Title>{ingreso.producto}</Card.Title>
                <p>Fecha: {ingreso.fecha}</p>
                <small>Numero de orden: {ingreso.orden}</small>
                <hr/>
                <Card.Text>{ingreso.descripcion}</Card.Text>
                   <Link to={`/item/${ingreso.id}`} className="btn btn-primary my-2">Comprar</Link>

             </Card.Body>
        </Card>
    )
}

export default Item