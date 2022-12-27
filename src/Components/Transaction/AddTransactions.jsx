import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {saveTransactionName} from './api'

export function AddTransactions() {

  const [ error, setError ] = useState();

  const initialState = {
    description: "",
    transactionType: "Ingreso",
    amount: "",
  };

const [value, setValues] = useState(initialState);

const saveTransaction = () => {
  try{
    saveTransactionName(value);
  }catch(error){
    console.error(error);
  }
}



  
  return (
    <Container>
      <h2>Registro de movimientos</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control name="description" type="text" onChange={e => setValues(e.target.value)} />
        </Form.Group>

          
        <Form.Group>
        <Form.Label>Tipo de movimiento</Form.Label>  
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Ingreso"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Gasto"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={e => setValues(e.target.value)}>
          <Form.Label>Valor</Form.Label>
          <Form.Control name="amount" type="number"/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={saveTransaction} >
          Registrar
        </Button> {' '}

      

        <Button variant="primary" type="submit">
          Cancelar
        </Button>
      </Form>
    </Container>
  );
}
