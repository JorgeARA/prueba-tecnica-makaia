import { React, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom'
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Modal from 'react-bootstrap/Modal';
// import { async } from "@firebase/util";
// import {saveTransactionName} from './api'

export function AddTransactions() {

 const [description, setDescription] = useState( '')
 const [amount, setAmount] = useState(0)
 const navigate = useNavigate()
 const transactionsCollection = collection(db, "transactions");
  
 const addTrans = async (e) => {
  e.prevent.default()
  await addDoc(transactionsCollection, {description: description, amount: amount})
  navigate('/')
 }


  
  return (

    <Container>
      
      <Form onSubmit={addTrans}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control name="description" type="text" value={description} onChange={(e)=> setDescription(e.target.value)} />
        </Form.Group>

          
        {/* <Form.Group>
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
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Valor</Form.Label>
          <Form.Control name="amount" type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" >
          Registrar
        </Button> {' '}

      

        <Button variant="primary" type="submit">
          Cancelar
        </Button>
      </Form>
    </Container>
  );
}
