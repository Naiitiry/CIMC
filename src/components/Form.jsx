import {Form, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Form.css'

const Calculadora = ()=>{

    //disponemos de todos los estados
    const [peso,setPeso] = useState('')
    const [altura,setAltura] = useState('')
    const [resultado,setResultado] = useState('')

    //funciones que captan los eventos
    const cambioEnPeso = (e)=>{
        setPeso(e.target.value);
    }
    const cambioEnAltura = (e)=>{
        setAltura(e.target.value)
    }

    //Calcular el IMC
    const calcularIMC = ()=>{
        const pesoIngreso = parseFloat(peso);
        const alturaEnCm = parseFloat(altura)/100; //convierte en metros
        const imc = (pesoIngreso/(alturaEnCm*alturaEnCm));
        setResultado(imc.toFixed(2))
    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <Form className='form'>
                <Form.Group as={Row}>
                    <Col sm={3} className='mb-3'>
                        <Form.Check
                                    inline
                                    type="radio"
                                    id="radio1"
                                    label="Femenino"
                                    name="radioGroup"
                                    />
                    </Col>
                    <Col sm={3}>
                        <Form.Check
                                    inline
                                    type="radio"
                                    id="radio2"
                                    label="Masculino"
                                    name="radioGroup"
                                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3'>
                    <Form.Label column sm={1}>Altura</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="number" placeholder="en cm" value={altura} onChange={cambioEnAltura}/>
                    </Col>
                    <Form.Label column sm={1}>Peso</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="number" placeholder="en Kg" value={peso} onChange={cambioEnPeso}/>
                    </Col>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Button variant="primary" onClick={calcularIMC}>
                        Calcular
                    </Button>
                </Form.Group>
                {resultado && <p>Tu indice de masa corporal (IMC) es: {resultado}</p>}
            </Form>
        </div>
    )
}
export default Calculadora