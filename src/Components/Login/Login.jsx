import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import "../Login/login.css";
import { useState } from "react";
import {useAuth} from "../../authContext";
import { Link, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import "../Home/home.css"


function Login() {
  const [user, setUSer] = useState({
    email: "",
    password: "",
  });
  const {login, loginWithGoogle} = useAuth();
  const navigate = useNavigate()
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUSer({ ...user, [name]: value });
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');
    try {
     await login(user.email, user.password)
      navigate("/")
    } catch (error) {
      if(error.code === "auth/internal-error") {
        setError("Correo invalido")
      }
      
    };
    
  };

  return (
    <Container className="login_container">
      <header>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/prueba-tecnica-makaia.appspot.com/o/images%2FprismaFinal.png?alt=media&token=48c3b15d-e7e1-4b6e-b842-b40369b21595"
          alt="logo prisma"
        />
        <hr />
      </header>

      {error && <p>{error}</p>}

      <Form className="login_form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="login_button">
          Ingresar
        </Button>
      </Form>
      <br />
      <Button onClick={handleGoogleSignin} variant="primary" type="submit">
        Ingresar con Google
      </Button>
      <p >
        ¿No tienes una cuenta? <Link to="/register">
          Regístrate
        </Link>
      </p>

    </Container>
  );
}

export default Login;
