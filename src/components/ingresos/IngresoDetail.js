import Card from 'react-bootstrap/Card';
import QRCode from "react-qr-code";

const IngresoDetail = ({ingreso}) => {

    const Print = () =>{     
        //console.log('print');  
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
       document.body.innerHTML = originalContents; 
      }

    return (
        <>
        <div id='printablediv'>
        <Card className="container my-5" style={{width: '40rem'}}>
         
            <Card.Body>
            <Card.Title>{ingreso.producto}</Card.Title>
            
         
            <Card.Text>Fecha de Ingreso: {ingreso.fecha}</Card.Text>
            <hr/>

            <Card.Title>Descripcion / Detalles:</Card.Title>
            <Card.Text>{ingreso.descripcion}</Card.Text>

            
            <div className="container my-5">
            <Card.Title>Escaneá este QR para ver el estado de tu servicio:</Card.Title>
            
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={`http://localhost:3000/ingresodetail/${ingreso._id}`}
                viewBox={`0 0 256 256`}
                />
            </div>
            
            
            </div>
            <hr/>
           
            </Card.Body>
           
        </Card>
        
        </div>
          <div className="printer">
            <button type="btn btn-secondary" onClick={Print} > Imprimir Orden </button>
        </div>
      </>
    )


}

export default IngresoDetail