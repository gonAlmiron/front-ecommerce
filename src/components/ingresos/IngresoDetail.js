import Card from 'react-bootstrap/Card';


const IngresoDetail = ({ingreso}) => {


    return (
        <Card className="container my-5" style={{width: '25rem'}}>
         
            <Card.Body>
            <Card.Title>{ingreso.producto}</Card.Title>
            
         
            <Card.Text>Fecha de Ingreso: {ingreso.fecha}</Card.Text>
            <hr/>

            <Card.Title>Descripcion / Detalles:</Card.Title>
            <Card.Text>{ingreso.descripcion}</Card.Text>

            
            <hr/>
      
            </Card.Body>
        </Card>
    )


}

export default IngresoDetail