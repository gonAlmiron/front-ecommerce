import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
// import { QRCode } from 'antd';


const Item = ( {ingreso} ) => {

    return (
        <Card key={ingreso.id} className="container my-3" style={{width: '20rem'}}>
             <Card.Body>
                <Card.Text>{ingreso.tipo}</Card.Text>
                <Card.Title>{ingreso.producto}</Card.Title>
                <p>Fecha: {ingreso.fecha}</p>
                <small>Numero de orden: {ingreso.orden}</small>
                <hr/>
                <Card.Text>{ingreso.descripcion}</Card.Text>
                
                   <Link to={`/ingresodetail/${ingreso.id}`} className="btn btn-primary my-2">Ingresar</Link>
                   {/* <QRCode value={`http://localhost:3002/ingresos/item/${ingreso.id}`} /> */}

             </Card.Body>
        </Card>
    )
}

export default Item