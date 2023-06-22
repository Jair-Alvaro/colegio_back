import AdminLayout from '../../components/plantillas/AdminLayout';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Zona() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <AdminLayout>
            <>
                <h1>Zonas</h1>
                <div className='col-2 mt-5'>

                    <Button variant="success" onClick={handleShow}>
                        AGREGAR ZONA
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Registro de zona</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        autoFocus
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Button variant="success" onClick={handleClose}>
                                Guardar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Descripción</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>

            </>
        </AdminLayout>
    )
}

export default Zona;