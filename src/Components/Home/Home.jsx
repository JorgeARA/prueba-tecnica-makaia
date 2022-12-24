import { useAuth } from "../../authContext"
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";


export function Home() {
    const {user, logout, loading} = useAuth()
    console.log(user);

 

    const handleLogout =async () => {
        try {
        await logout();  
        } catch (error) {
            
        }
       
    };

    if (loading) return <h1>Cargando</h1>
    
  return (
    <Container className="home_container">
      <header>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/prueba-tecnica-makaia.appspot.com/o/images%2FprismaFinal.png?alt=media&token=48c3b15d-e7e1-4b6e-b842-b40369b21595"
          alt="logo prisma"
        />
        <hr />
      </header>
        <h1>Bienvenido {user.displayName || user.email}</h1>
        <Button onClick={handleLogout} variant="danger" className="button_logout">Salir</Button>{' '}
    </Container>
  )
}


