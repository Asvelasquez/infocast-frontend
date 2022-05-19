import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import Swal from "sweetalert2";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
function MultipleDetailPanels() {
  const [emergencias, setEmergencias] = useState([]);
  //const [nombre, setNombre] = useState("");
  const [idEmergencia, setIdEmergencia] = useState("");
  const [tipo_emergencia, setTipo_emergencia] = useState("");
  const [nivel_emergencia, setNivel_emergencia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado_emergencia, setEstado_emergencia] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [entidad_solicitada, setEntidad_solicitada] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [comentario_usuario, setComentario_usuario] = useState("");
  useEffect(() => {
    obtenerEmergencias();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const obtenerEmergencias = async () => {
    const id = sessionStorage.getItem("id_usuario");
    const token = sessionStorage.getItem("token");
    const rol = sessionStorage.getItem("rol");
    const respuesta = await axios.get("emergencia/listar/", {
      headers: { authorization: token },
    });
    console.log(respuesta);
    console.log("rol", rol);
    setEmergencias(respuesta.data);
  };

  const obtenerEmergencia = async (idParametro) => {
    setShow(true);
    const id = idParametro;
    const token = sessionStorage.getItem("token");
    const rol = sessionStorage.getItem("rol");
    const respuesta = await axios.get("emergencia/listar/" + id, {
      headers: { authorization: token },
    });
    console.log(respuesta.data);
    setIdEmergencia(respuesta.data._id);
    setComentario_usuario(respuesta.data.comentario_usuario);
    setEstado_emergencia(respuesta.data.estado_emergencia);
  };

  const actualizarEmergencia = async (e) => {
    e.preventDefault();
    const id = idEmergencia;
    const token = sessionStorage.getItem("token");
    const emergencia = {
      comentario_usuario,
      estado_emergencia,
    };
    const respuesta = await axios.put(
      "emergencia/actualizar/" + id,
      emergencia,
      {
        headers: { authorization: token },
      }
    );
    const mensaje = respuesta.data.mensaje;
    obtenerEmergencias();
    Swal.fire({
      icon: "success",
      title: "Actualizado",
      showConfirmButton: false,
      timer: 1500,
    });
    setShow(false);
  };
  const data = emergencias.map((emergencia) => ({
    id: emergencia._id,
    tipo_emergencia: emergencia.tipo_emergencia,
    nivel_emergencia: emergencia.nivel_emergencia,
    descripcion: emergencia.descripcion,
    estado_emergencia: emergencia.estado_emergencia,
    ubicacion: emergencia.ubicacion,
    entidad_solicitada: emergencia.entidad_solicitada,
    ciudad: emergencia.ciudad,
    barrio: emergencia.barrio,
    comentario_usuario: emergencia.comentario_usuario,
  }));
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-xl-20 mx-auto">
          <div className="card">
            <MaterialTable
              title="Detalle de Emergencias"
              columns={[
                //{ title: "ID", field: "id" },
                { title: "Tipo Emergencia", field: "tipo_emergencia" },
                { title: "Nivel Emergencia", field: "nivel_emergencia" },
                // { title: "Descripcion", field: "descripcion" },
              //  { title: "Estado Emergencia", field: "estado_emergencia" },
                { title: "Ubicacion", field: "ubicacion" },
                { title: "Entidad Solicitada", field: "entidad_solicitada" },
                { title: "Ciudad", field: "ciudad" },
                { title: "Barrio", field: "barrio" },
              ]}
              data={data}
              detailPanel={[
                {
                  tooltip: "Ver Comentario",

                  // onclick: (event, rowData) =>EditarComentario(rowData.id),

                  render: (rowData) => {
                    return (
                      <div className="container mt-3">
                        <div className="row">
                          <div className="col-md-6 mx-auto">
                            <div className="card">
                              <h4 className="mx-auto"> Estado Emergencia </h4>

                              <div
                                title="Detalle de Emergencias"
                                style={{
                                  fontSize: 20,
                                  textAlign: "center",
                                  color: "white",
                                  backgroundColor: "#E53935",
                                }}
                              >
                                {rowData.estado_emergencia}
                              </div>

                              <h4 className="mx-auto"> Comentario Usuario </h4>
                              <div
                                style={{
                                  fontSize: 20,
                                  textAlign: "center",
                                  color: "white",
                                  backgroundColor: "#fd6913d6",
                                }}
                              >
                                {rowData.comentario_usuario}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  },
                },
              ]}
              actions={[
                {
                  icon: "add",
                  tooltip: "Agregar Comentario",
                  onClick: (event, rowData) => obtenerEmergencia(rowData.id),
                },
              ]}
            />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Agregar Comentario</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="escriba el comentario"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    defaultValue={comentario_usuario}
                    onChange={(e) => setComentario_usuario(e.target.value)}
                  />
                </FloatingLabel>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={actualizarEmergencia}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultipleDetailPanels;
