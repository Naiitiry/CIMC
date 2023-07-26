import {Form, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Calculadora = ()=>{

    const [peso,setPeso] = useState('')
    const [altura,setAltura] = useState('')
    const [resultado,setResultado] = useState('')

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
        <Form>
            <Form.Check
                        inline
                        type="radio"
                        id="radio1"
                        label="Femenino"
                        name="radioGroup"
                        />
            <Form.Check
                        inline
                        type="radio"
                        id="radio2"
                        label="Masculino"
                        name="radioGroup"
                        />
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Altura</Form.Label>
                <Col sm={1}>
                    <Form.Control type="number" placeholder="en cm" value={altura} onChange={cambioEnAltura}/>
                </Col>
                <Form.Label column sm={2}>Peso</Form.Label>
                <Col sm={1}>
                    <Form.Control type="number" placeholder="en Kg" value={peso} onChange={cambioEnPeso}/>
                </Col>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" onClick={calcularIMC}>
                    Calcular
                </Button>
            </Form.Group>
            {resultado && <p>Tu indice de masa corporal (IMC) es: {resultado}</p>}
        </Form>
    )
}
export default Calculadora