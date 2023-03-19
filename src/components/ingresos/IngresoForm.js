import { useState } from "react"
import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Radio } from 'antd';


const NuevoProductoDos = () => {

// PARA EL BOTON MODAL:
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// PARA EL FORM:
    const [producto, setProducto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')
    const [tipo, setTipo ] = useState('');

    const handleSubmit = async (e) => {

      try {
        await axios.post("http://localhost:3002/api/ingresos",
        {producto, descripcion, fecha, tipo}
        )
      } 
        catch(err) {
            console.log(err.message)
            console.log(err.stack)
      }
    }
    
    return(
        <>
        <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" onClick={handleShow}>
            Nuevo Ingreso - Servicio técnico
            </Button>
        </div>
        <Modal size="lg" show={show} onHide={handleClose} >

        <Modal.Header closeButton>
          <Modal.Title className="mx-2">Nuevo Ingreso - Servicio técnico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Producto</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Ingrese marca/modelo"
                    onChange={(e) => {setProducto(e.target.value)}}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Tipo</Form.Label>
                <br/>
                <Radio.Group name="tipo" onChange={(e) => {setTipo(e.target.value)}}>
                <Radio value={"pc"}>PC/NOTEBOOK</Radio>
                <Radio value={"celular"}>CELULAR</Radio>
                <Radio value={"electronica"}>ELECTRONICA</Radio>
                </Radio.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                name="price"
                placeholder="Ingrese el precio"
                onChange={(e) => {setFecha(e.target.value)}}
                />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control 
              placeholder="Ingrese la descripción / detalles del equipo"
              name="description"
              type="text"
              rows={3} 
              onChange={(e) => {setDescripcion(e.target.value)}} 
              />
            </Form.Group>
            <Button type="submit"variant="primary" size="lg" className="my-3" onClick={handleClose}>
            Ingresar a servicio técnico
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          

        </Modal.Footer>
      </Modal>
        
        </>
    )
}

export default NuevoProductoDos