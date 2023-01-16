import { React, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";


// import { async } from "@firebase/util";
// import {saveTransactionName} from './api'

export function AddTransactions() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [typeT, setTypeT] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const transactionsCollection = collection(db, "transactions");

  const addTrans = async (e) => {
    e.preventDefault();
    await addDoc(transactionsCollection, {
      description: description,
      amount: amount,
      date: date,
      typeT: typeT,
    });
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={addTrans}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            name="trip-start"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingreso</Form.Label> {""} 
          <input type="radio" name="typeT" value={1}  onChange={(e) => setTypeT(e.target.value)}></input> {""}
          <Form.Label>Gasto</Form.Label> {""}
          <input type="radio" name="typeT" value={2}  onChange={(e) => setTypeT(e.target.value)}></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Valor</Form.Label>
          <Form.Control
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClose} >
          Registrar
        </Button>{" "}
        <Button variant="primary" type="submit">
          Cancelar
        </Button>
      </Form>
    </Container>
  );
}
