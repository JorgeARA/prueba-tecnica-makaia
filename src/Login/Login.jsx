import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';

function Login() {
  return (
    <Container className='login_container'>
      <header>
        <img src="https://firebasestorage.googleapis.com/v0/b/prueba-tecnica-makaia.appspot.com/o/images%2FprismaFinal.png?alt=media&token=48c3b15d-e7e1-4b6e-b842-b40369b21595" alt="logo prisma" />
        <hr />
    </header>
        <Form className='login_form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit" className='login_button'>
        Ingresar
      </Button>
    </Form>
    <br />
    <Button variant="primary" type="submit">
        Inicio de sesión con Google
      </Button>
    </Container>
    
  )
}

export default Login