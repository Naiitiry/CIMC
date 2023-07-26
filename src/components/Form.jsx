import {Form, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculadora = ()=>{

    return(
        <Form>
            <Form.Row>
            <Form.Group as={Col} xs={12} sm={6} md={4} lg={3}>
            <Form.Control
            type="number"
            placeholder="Ingresa un número"
            min="0" // Opcional: establece un valor mínimo si lo deseas.
            step="1" // Opcional: establece el incremento para los números si es necesario.
            />
            </Form.Group>
                <Form.Group>
                        <Form.Check
                        inline
                        type="radio"
                        id="radio1"
                        label="Radio 1"
                        name="radioGroup"
                        />
                        <Form.Check
                        inline
                        type="radio"
                        id="radio2"
                        label="Radio 2"
                        name="radioGroup"
                        />
                    </Form.Group>
                </Form.Row>
        </Form>
    )
}
export default Calculadora