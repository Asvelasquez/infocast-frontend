import React, { useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { TextField } from "@material-ui/core";
export default function CrearEmergencia() {
  const [nombre, setNombre] = useState("");
  const [tipo_emergencia, setTipo_emergencia] = useState("");
  const [nivel_emergencia, setNivel_emergencia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado_emergencia, setEstado_emergencia] = useState("Sin Atender");
  const [ubicacion, setUbicacion] = useState("");
  const [entidad_solicitada, setEntidad_solicitada] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [comentario_usuario, setComentario_usuario] = useState("");
  const registrarEmergencia = async (e) => {
    e.preventDefault();
    const registrarEmergencia = {
      tipo_emergencia,
      nivel_emergencia,
      descripcion,
      estado_emergencia,
      ubicacion,
      entidad_solicitada,
      ciudad,
      barrio,
      comentario_usuario,
    };
    
     
    if (tipo_emergencia === "" || nivel_emergencia === "" ||  descripcion === ""  || ubicacion === "" || entidad_solicitada === "o" || ciudad === "" || barrio === "") {
      Swal.fire({
        icon: "error",
        title: "alguno de los campos esta vacio",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      
      const respuesta = await axios.post("emergencia/add", registrarEmergencia);
    console.log(respuesta);
      const mensaje = respuesta.data.mensaje;
      Swal.fire({
        icon: "success",
        title: "Emergencia registrada",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
      setNombre("");
      setTipo_emergencia("");
      setNivel_emergencia("");
      setDescripcion("");
      setEstado_emergencia("");
      setUbicacion("");
      setEntidad_solicitada("");
      setCiudad("");
      setBarrio("");

      window.location.href = "/verEmergencias";
     
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
};

  return (
  <div className="container mt-2">
    <div className="row">
    <div className="col-md-9 mx-auto"> 
<div className="card">
  <div className="card-header bg-danger text-center">
    <h3 className="text-white">Registrar Emergencia</h3>
  </div>
    
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <Form component="form" noValidate onSubmit={registrarEmergencia} required>
        <Form.Group as={Col} controlId="formGridState" required >
          <Form.Label>Tipo De Emergencia</Form.Label>
          <Form.Select defaultValue="Seleccionar"  required  onChange={(e) => setTipo_emergencia(e.target.value)}>
            <option>Seleccionar</option>
            <option>Incendio</option>
            <option>Inundacion</option>
            <option>Deslizamiento</option>
            <option>Tormenta</option>
            <option>Temblor</option>
            <option>Avalancha</option>
           
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" required>
          <Form.Label>Nivel De Emergencia</Form.Label>
          <Form.Select defaultValue="Seleccionar" required onChange={(e) => setNivel_emergencia(e.target.value)}>
            <option>Seleccionar</option>
            <option>Alto</option>
            <option>Medio</option>
            <option>Bajo</option>
            
          </Form.Select>
        </Form.Group>
        
        {/* <Form.Group as={Col} controlId="formGridState" required  onChange={(e) => setEstado_emergencia(e.target.value)}>
          <Form.Label>Estado De Emergencia</Form.Label>
          <Form.Select defaultValue="Seleccionar" required>
            <option>Seleccionar</option>
            <option>Sin Atender</option>
            <option>Atendida</option>
            <option>Atentida,se requiere apoyo</option>
            
          </Form.Select>
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formGridAddress1" required  onChange={(e) => setDescripcion(e.target.value)}>
          <Form.Label>Descripcion</Form.Label>
         
          <Form.Control placeholder="Descripcion Emergencia" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1" required onChange={(e) => setUbicacion(e.target.value)}>
          <Form.Label>Direccion</Form.Label>
          
          <Form.Control placeholder="Cll 22 # 33-66" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" required>
          <Form.Label>Entidad solicitada</Form.Label>
          <Form.Select defaultValue="Seleccionar" required onChange={(e) => setEntidad_solicitada(e.target.value)}>
            <option>Seleccionar</option>
            <option>Bomberos</option>
            <option>Cruz Roja</option>
            <option>Defensa Civil</option>
            <option>Policia</option>
            <option>Ejercito</option>
            
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">
         
          <Form.Group as={Col} controlId="formGridState" required>
          <Form.Label>Ciudad</Form.Label>
          <Form.Select defaultValue="Seleccionar" required onChange={(e) => setCiudad(e.target.value)}>
            <option>Seleccionar</option>
            <option>Bojaca</option>
            <option>El Rosal</option>
            <option>Facatativa</option>
            <option>Funza</option>
            <option>Madrid</option>
            <option>Mosquera</option>
            <option>Subachoque</option>
            <option>Zipacon</option>
          </Form.Select>
        </Form.Group>
          <Form.Group as={Col} controlId="formGridCity" required  onChange={(e) => setBarrio(e.target.value)}>
            <Form.Label>Barrio</Form.Label>
            <Form.Control />
           
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </div>
    </div>
    </div>
    </div>
    </div>

  );
}
