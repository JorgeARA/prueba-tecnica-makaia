import React, {useState, useEffect} from 'react';
import {collection, getDocs, getDoc, deleteDoc, doc  } from "firebase/firestore";
import { db } from "../../firebase-config";
import { async } from '@firebase/util';
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { BsPlusCircleFill } from "react-icons/bs";
import  '../Transaction/showTransactions.css';
import Modal from 'react-bootstrap/Modal';
import { AddTransactions } from './AddTransactions';

export const ShowTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const transCollection = collection(db, "transactions");
    const [show, setShow] = useState(false);

    const getTransactions = async () =>{
        const data = await getDocs(transCollection)
        // console.log(data.docs);
        setTransactions(
            data.docs.map((doc) => ( {...doc.data(), id:doc.id}))
        )
        console.log(transactions);
    }

    const deleteTransaction = async (id) => {
        const transctionDoc = doc(db, "transactions", id)
        await deleteDoc(transctionDoc)
        getTransactions()
    }

    useEffect( ()=> {
        getTransactions()
    }, [])


  return (
    <Container>
    <tbody>
    { transactions.map( (transactions) => (
      <tr key={transactions.id}>
        <td>{transactions.description}</td>
        <td>{transactions.amount}</td>
        {/* <td>
          <Link to={`/edit/${product.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
          <button onClick={ () => { confirmDelete(product.id) } } className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
        </td> */}
      </tr>                
    )) }
  </tbody>
  {/* <Link to='/addtransactions'> <Button variant="primary" type="submit">
          agregar
        </Button></Link> */}
     <BsPlusCircleFill  onClick={() => setShow(true)}  className='buton_add' />

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          <h2>Registro de movimientos</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTransactions/>
        </Modal.Body>
      </Modal>
  </Container>
  )
}

// export default ShowTransactions